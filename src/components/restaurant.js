import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import { List, Avatar, Button } from "antd";
import AverageRating from "./average-rating";
import ReviewList from "./review-list";
import { toggleVisibility } from "../decorators/toggleVisibility";
import { PropTypes } from "prop-types";

class Restaurant extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    menu: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired,
    isMenuOpen: PropTypes.bool,
    isOpen: PropTypes.bool,
    toggleVisibility: PropTypes.func.isRequired
  };

  static defaults = {
    isMenuOpen: false,
    isOpen: false
  };

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
      name,
      image,
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
            <Button data-aid="toggle-reviews" onClick={toggleVisibility}>
              {isReviewOpen ? "Hide reviews" : "Show reviews"}
            </Button>,
            <Button data-aid="toggle-menu" onClick={this.handleToggleOpenClick}>
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

export default toggleVisibility(Restaurant);
