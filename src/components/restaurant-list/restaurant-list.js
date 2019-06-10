import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant/restaurant';
import accordion from '../../decorators/accordion';
import { connect } from 'react-redux';
import { loadingSelector, loadedSelector, restaurantsSelector } from '../../selectors';
import { loadRestaurants, loadUsers } from '../../actions';

class RestaurantList extends Component {
  componentDidMount() {
    if (!this.props.loading && !this.props.loaded) {
      this.props.loadRestaurants();
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
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  loadRestaurants: PropTypes.func,
  restaurants: PropTypes.array,
  isOpened: PropTypes.bool,
  openItemId: PropTypes.any,
  toggleOpenItem: PropTypes.func
};

const initMapDispatchToProps = () => {
  return dispatch => {
    dispatch(loadUsers());
    return {
      loadRestaurants: () => dispatch(loadRestaurants())
    };
  };
};

export default connect(
  store => ({
    restaurants: restaurantsSelector(store),
    loading: loadingSelector(store),
    loaded: loadedSelector(store)
  }),
  initMapDispatchToProps
)(accordion(RestaurantList));
