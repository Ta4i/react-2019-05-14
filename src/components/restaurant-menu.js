import React, { Component } from "react";
import Dish from "./dish";
import PropTypes from "prop-types";
class RestaurantMenu extends Component {
  static defaultProps = {
    menu: []
  };
  state = {
    error: null
  };

  componentDidCatch(error) {
    console.error(error);
    this.setState({
      error
    });
  }
  render() {
    const { menu } = this.props;
    return this.state.error ? (
      "not available"
    ) : (
      <div data-automation-id={`menu`}>
        {menu.map(dish => (
          <Dish key={dish.id} {...dish} />
        ))}
      </div>
    );
  }
}

RestaurantMenu.propTypes = {
  menu: PropTypes.array.isRequired
};

export default RestaurantMenu;
