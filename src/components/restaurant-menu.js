import React from 'react';
import PropTypes from 'prop-types';
import Dish from './dish';

function RestaurantMenu(props) {
  return (
    <div>
      {props.menu.map(dish => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  );
}

RestaurantMenu.propTypes = {
  menu: PropTypes.array
};

export default RestaurantMenu;
