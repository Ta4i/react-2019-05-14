import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import { List, Avatar, Button } from "antd";
import AverageRating from "./average-rating";
import ReviewList from "./review-list";
import { toggleVisibility } from "../decorators/toggleVisibility";
import PropTypes from "prop-types";

class Restaurant extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.object),
    reviews: PropTypes.arrayOf(PropTypes.object)
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
              data-automation-id={`toggle-menu`}
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
        {isReviewOpen ? <ReviewList reviews={reviews} id={id} /> : null}
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
      </>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default toggleVisibility(Restaurant);
