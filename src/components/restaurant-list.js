import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurant from './restaurant';
import accordion from '../decorators/accordion';

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // props from accordion decorator
      openItemId,
      toggleOpenItem
    } = this.props;

    return (
      <div>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleOpenMenu={toggleOpenItem}
          />
        ))}
      </div>
    );
  }
}

RestaurantList.propTypes = {
  restaurants: PropTypes.array,
  isOpened: PropTypes.bool,
  openItemId: PropTypes.any,
  toggleOpenItem: PropTypes.func
};

export default accordion(RestaurantList);
