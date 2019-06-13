import React, { PureComponent } from "react";
import { List, Avatar, Button } from "antd";
import AverageRating from "../average-rating";
import ReviewList from "../review-list";
import { toggleVisibility } from "../../decorators/toggleVisibility";
import * as PropTypes from "prop-types";
import "./restaurant.css";
import { NavLink } from "react-router-dom";
import LocalizedString from "../../localization/LocalizedString";
import {
  RESTAURANT_BUTTON_LABEL__GO_TO_MENU,
  RESTAURANT_BUTTON_LABEL__HIDE_REVIEWS,
  RESTAURANT_BUTTON_LABEL__SHOW_ON_MAP,
  RESTAURANT_BUTTON_LABEL__SHOW_REVIEWS
} from "../../localization/textKeys";

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
      isOpen: isReviewOpen,
      toggleVisibility
    } = this.props;

    return this.state.error ? (
      "Not available"
    ) : (
      <>
        <List.Item
          className="restaurant-list-item"
          actions={[
            <AverageRating id={id} />,
            <Button
              data-automation-id={`toggle-review-list-${id}`}
              onClick={toggleVisibility}
            >
              {isReviewOpen ? (
                <LocalizedString name={RESTAURANT_BUTTON_LABEL__HIDE_REVIEWS} />
              ) : (
                <LocalizedString name={RESTAURANT_BUTTON_LABEL__SHOW_REVIEWS} />
              )}
            </Button>,
            <Button
              data-automation-id={`toggle-menu-${id}`}
              onClick={this.handleToggleOpenClick}
            >
              <NavLink to={`/restaurant-menu/${id}`}>
                <LocalizedString name={RESTAURANT_BUTTON_LABEL__GO_TO_MENU} />
              </NavLink>
            </Button>,
            <Button>
              <NavLink to={`/restaurant-map/${id}`}>
                <LocalizedString name={RESTAURANT_BUTTON_LABEL__SHOW_ON_MAP} />
              </NavLink>
            </Button>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar shape="square" src={image} />}
            title={name}
          />
        </List.Item>
        {isReviewOpen ? <ReviewList id={id} /> : null}
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
  reviews: PropTypes.arrayOf(PropTypes.string),

  isMenuOpen: PropTypes.bool,
  toggleOpenMenu: PropTypes.func.isRequired,

  isOpen: PropTypes.bool,
  toggleVisibility: PropTypes.func.isRequired
};

export default toggleVisibility(Restaurant);
