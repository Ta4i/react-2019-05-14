import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant/restaurant';
import accordion from '../../decorators/accordion';

class RestaurantList extends Component {
  componentDidMount() {
    if (this.props.restaurants.length === 0 && this.props.fetchData) {
      this.props.fetchData();
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
  toggleOpenItem: PropTypes.func,
  fetchData: PropTypes.func
};

export default accordion(RestaurantList);
