import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";
import { List } from "antd";
import PropTypes from "prop-types";

class RestaurantList extends Component {
  componentDidMount() {
    this.props.fetchData && this.props.fetchData();
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
      ).isRequired,
      reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          user: PropTypes.string,
          text: PropTypes.string,
          rating: PropTypes.number
        })
      ).isRequired
    })
  ).isRequired
};

export default accordion(RestaurantList);
