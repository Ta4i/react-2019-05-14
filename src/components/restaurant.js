import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import { List, Avatar, Button } from "antd";
import AverageRating from "./average-rating";
import ReviewList from "./review-list";
import { toggleVisibility } from "../decorators/toggleVisibility";
import PropTypes from "prop-types";

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
      isOpen: isReviewOpen,
      toggleVisibility
    } = this.props;

    return this.state.error ? (
      "Not available"
    ) : (
      <>
        <List.Item
          style={{ paddingLeft: "8px" }}
          actions={[
            <AverageRating reviews={reviews} />,
            <Button
              data-automation-id={`toggle-review-${id}`}
              onClick={toggleVisibility}
            >
              {isReviewOpen ? "Hide reviews" : "Show reviews"}
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
        {isReviewOpen ? <ReviewList reviews={reviews} /> : null}
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
      </>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  image: PropTypes.string,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      ingredients: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      text: PropTypes.string,
      rating: PropTypes.number
    })
  )
};

export default toggleVisibility(Restaurant);
