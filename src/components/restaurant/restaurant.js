import React, { PureComponent } from "react";
import RestaurantMenu from "../restaurant-menu";
import { List, Avatar, Button } from "antd";
import AverageRating from "../average-rating";
import ReviewList from "../review-list";
import { toggleVisibility } from "../../decorators/toggleVisibility";
import * as PropTypes from "prop-types";
import "./restaurant.css";
import { loadDishes, loadReviews } from "../../ac";
import { connect } from "react-redux";
import {
  loadMenuSelector,
  loadingDishesSelector,
  isLoadReviews
} from "../../selectors";
import Spinner from "../spinner";

class Restaurant extends PureComponent {
  state = {
    error: null
  };

  componentDidMount() {
    if (!this.props.isLoadReviews) {
      this.props.loadReviews();
    }
  }

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
      isMenuOpen,
      isOpen: isReviewOpen,
      toggleVisibility,
      loadDishes,
      restaurantMenu,
      loading
    } = this.props;

    if (this.state.error) {
      return <h3>Not available</h3>;
    }

    if (this.props.isLoadReviews) {
      return (
        <>
          <List.Item
            className="restaurant-list-item"
            actions={[
              <AverageRating id={id} />,
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
              </Button>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar shape="square" src={image} />}
              title={name}
            />
          </List.Item>
          {isReviewOpen ? <ReviewList id={id} /> : null}
          {isMenuOpen ? (
            <RestaurantMenu
              menu={menu}
              loading={loading}
              fetchMenu={loadDishes}
              restaurantMenu={restaurantMenu}
            />
          ) : null}
        </>
      );
    }

    return <Spinner />;
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}
Restaurant.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // menu: RestaurantMenu.propTypes.menu,
  reviews: PropTypes.arrayOf(PropTypes.string),
  isMenuOpen: PropTypes.bool,
  toggleOpenMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  toggleVisibility: PropTypes.func.isRequired
};

export default connect(
  (state, ownProps) => ({
    restaurantMenu: loadMenuSelector(state),
    loading: loadingDishesSelector(state),
    isLoadReviews: isLoadReviews(state)
  }),
  {
    loadDishes,
    loadReviews
  }
)(toggleVisibility(Restaurant));
