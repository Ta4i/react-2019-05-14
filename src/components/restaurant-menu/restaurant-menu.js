import React from 'react';
import PropTypes from 'prop-types';
import Dish from '../dish/dish';

function RestaurantMenu(props) {
  return (
    <div data-automation-id="menu">
      {props.menu.map(dish => (
        <Dish key={dish} id={dish} />
      ))}
    </div>
  );
}

RestaurantMenu.propTypes = {
  menu: PropTypes.array
};

export default RestaurantMenu;
