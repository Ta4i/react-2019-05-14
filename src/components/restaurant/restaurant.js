import React, { PureComponent } from "react";
import { connect } from "react-redux";
import RestaurantMenu from "../restaurant-menu";
import { List, Avatar, Button } from "antd";
import AverageRating from "../average-rating";
import ReviewList from "../review-list";
import AddReview from "../add-review";
import { toggleVisibility } from "../../decorators/toggleVisibility";
import { createReviewSelector } from "../../selectors";
import { addReview } from "../../ac";
import * as PropTypes from "prop-types";
import "./restaurant.css";

class Restaurant extends PureComponent {
  state = {
    error: null,
    isShouldOpenModal: false
  };

  componentDidCatch(error) {
    this.setState({
      error
    });
  }

  render() {
    const {
      id,
      image,
      name,
      menu,
      reviews,
      isMenuOpen,
      isOpen: isReviewOpen,
      toggleVisibility
    } = this.props;

    const { isShouldOpenModal } = this.state;

    return this.state.error ? (
      "Not available"
    ) : (
      <>
        <List.Item
          className="restaurant-list-item"
          actions={[
            <AverageRating reviews={reviews} />,
            <Button
              data-automation-id={`toggle-review-list-${id}`}
              onClick={toggleVisibility}
            >
              {isReviewOpen ? "Hide reviews" : "Show reviews"}
            </Button>,
            <Button
              data-automation-id={`toggle-menu-${id}`}
              onClick={this.handleToggleOpenClick}
            >
              {isMenuOpen ? "Close menu" : "Open menu"}
            </Button>,
            <Button onClick={this.handleAddReviewToggle}>Add review</Button>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar shape="square" src={image} />}
            title={name}
          />
        </List.Item>
        {isReviewOpen ? <ReviewList reviews={reviews} /> : null}
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
        {isShouldOpenModal ? (
          <AddReview
            visible={isShouldOpenModal}
            handleCancel={this.handleAddReviewToggle}
            handleOk={this.handleAddReviewOk}
          />
        ) : null}
      </>
    );
  }

  handleAddReviewToggle = () => {
    this.setState({ isShouldOpenModal: !this.state.isShouldOpenModal });
  };

  handleAddReviewOk = (review, name, rating = 0) => {
    if (review && name) {
      this.props.addReview(this.props.id, name, review, rating);
      this.setState({ isShouldOpenModal: !this.state.isShouldOpenModal });
    }
  };

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

Restaurant.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  menu: RestaurantMenu.propTypes.menu,
  reviews: ReviewList.propTypes.reviews,

  isMenuOpen: PropTypes.bool,
  toggleOpenMenu: PropTypes.func.isRequired,

  isOpen: PropTypes.bool,
  toggleVisibility: PropTypes.func.isRequired
};

const initMapStateToProps = () => {
  const reviewSelector = createReviewSelector();

  return (state, ownProps) => {
    const reviews = ownProps.reviews.map(review =>
      state.reviews.find(el => el.id === review)
    );
    reviews.forEach(review => {
      review.user = state.users.find(user => user.id === review.userId);
    });
    return {
      reviews,
      ...reviewSelector(state, ownProps)
    };
  };
};

export default connect(
  initMapStateToProps,
  {
    addReview
  }
)(toggleVisibility(Restaurant));
