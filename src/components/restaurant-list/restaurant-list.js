import React, { Component } from "react";
import Restaurant from "../restaurant";
import { accordion } from "../../decorators/accordion";
import { List } from "antd";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadingSelector, restaurantsSelector, reviewsSelector, dishesSelector } from "../../selectors";
import { loadRestaurants, loadReviews, loadDishes } from "../../ac";

class RestaurantList extends Component {
  componentDidMount() {
    const {
      restaurants,
      reviews,
      fetchRestaurants,
      fetchReviews,
      fetchDishes,
      dishes,
    } = this.props;

    if (!restaurants.length) {
      fetchRestaurants && fetchRestaurants();
    }

    if (!reviews.length) {
      fetchReviews && fetchReviews();
    }

    if (!dishes.length) {
      fetchDishes && fetchDishes();
    }
  }

  render() {
    const {
      restaurants,

      // props from accordion decorator
      openItemId,
      toggleOpenItem
    } = this.props;

    return (
      <List>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleOpenMenu={toggleOpenItem}
          />
        ))}
      </List>
    );
  }
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      menu: PropTypes.array.isRequired,
      reviews: PropTypes.array.isRequired
    })
  ).isRequired,

  dishes: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  openItemId: PropTypes.string,
  toggleOpenItem: PropTypes.func.isRequired
};

export default connect(
  store => ({
    restaurants: restaurantsSelector(store),
    reviews: reviewsSelector(store),
    dishes: dishesSelector(store),
    loading: loadingSelector(store)
  }),
  {
    fetchRestaurants: loadRestaurants,
    fetchReviews: loadReviews,
    fetchDishes: loadDishes,
  }
)(accordion(RestaurantList));
