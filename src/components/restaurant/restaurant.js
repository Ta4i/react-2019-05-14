import React, { PureComponent } from "react";
import RestaurantMenu from "../restaurant-menu";
import { List, Avatar, Button } from "antd";
import AverageRating from "../average-rating";
import ReviewList from "../review-list";
import ReviewForm from "../review-form";
import { toggleVisibility } from "../../decorators/toggleVisibility";
import * as PropTypes from "prop-types";
import "./restaurant.css";

class Restaurant extends PureComponent {
  state = {
    error: null
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
      isOpen1: isReviewOpen,
      isOpen2: isFormOpen,
      toggleVisibility1,
      toggleVisibility2
    } = this.props;

    return this.state.error ? (
      "Not available"
    ) : (
      <>
        <List.Item
          className="restaurant-list-item"
          actions={[
            <AverageRating arrId={reviews} />,
            <Button
              data-automation-id={`toggle-review-list-${id}`}
              onClick={toggleVisibility1}
            >
              {isReviewOpen ? "Hide reviews" : "Show reviews"}
            </Button>,
            <Button
              data-automation-id={`toggle-review-form-${id}`}
              onClick={toggleVisibility2}
              style={{ width: 107 }}
            >
              {isFormOpen ? "Close" : "Send review"}
            </Button>,
            <Button
              data-automation-id={`toggle-menu-${id}`}
              onClick={this.handleToggleOpenClick}
            >
              {isMenuOpen ? "Close menu" : "Open menu"}
            </Button>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar shape="square" src={image} />}
            title={name}
          />
        </List.Item>
        {isReviewOpen ? <ReviewList arrId={reviews} /> : null}
        {isFormOpen ? (
          <ReviewForm id={id} closeForm={toggleVisibility2} />
        ) : null}
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
      </>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

Restaurant.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  menu: RestaurantMenu.propTypes.menu,
  reviews: PropTypes.arrayOf(PropTypes.string),

  isMenuOpen: PropTypes.bool,
  toggleOpenMenu: PropTypes.func.isRequired,

  isOpen: PropTypes.bool,
  toggleVisibility1: PropTypes.func.isRequired,
  toggleVisibility2: PropTypes.func.isRequired
};

export default toggleVisibility(Restaurant);
