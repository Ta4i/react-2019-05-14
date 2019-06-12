import React, { PureComponent } from "react";
import { List, Avatar, Button } from "antd";
import AverageRating from "../average-rating";
import ReviewList from "../review-list";
import { toggleVisibility } from "../../decorators/toggleVisibility";
import * as PropTypes from "prop-types";
import "./restaurant.css";
import { NavLink } from "react-router-dom";
import { I18nContext } from "../../contexts/translate";

class Restaurant extends PureComponent {
  static contextType = I18nContext;

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
    const { t } = this.context;

    return this.state.error ? (
      t("not_available")
    ) : (
      <>
        <List.Item
          className="restaurant-list-item"
          actions={[
            <AverageRating id={id} />,
            <Button>
              <NavLink to={`/restaurant-map/${id}`}>{t("on_map")}</NavLink>
            </Button>,
            <Button
              data-automation-id={`toggle-review-list-${id}`}
              onClick={toggleVisibility}
            >
              {isReviewOpen ? t("hide_reviews") : t("show_reviews")}
            </Button>,
            <Button data-automation-id={`toggle-menu-${id}`}>
              <NavLink to={`/restaurant-menu/${id}`}>{t("go_to_menu")}</NavLink>
            </Button>,
            <Button>
              <NavLink to={`/restaurant-map/${id}`}>{t("show_on_map")}</NavLink>
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
