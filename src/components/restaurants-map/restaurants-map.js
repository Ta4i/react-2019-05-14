import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';
import { connect } from 'react-redux';
import {
  createRestaurantSelector,
  loadedSelector,
  loadingSelector,
  restaurantsSelector
} from '../../selectors';
import { loadRestaurants } from '../../actions';

class RestaurantsMap extends Component {
  render() {
    if (this.props.loaded) {
      const { restaurant, restaurants } = this.props;
      this.layerGroup.clearLayers();

      if (restaurant) {
        Leaflet.marker([restaurant.location.lat, restaurant.location.lng]).addTo(this.layerGroup);
      } else {
        restaurants.forEach(({ location: { lat, lng } }) => {
          Leaflet.marker([lat, lng]).addTo(this.layerGroup);
        });
      }
    }
    return <div ref={this.setEl} className="map" />;
  }

  setEl = ref => {
    this.div = ref;
  };

  componentDidMount() {
    if (!this.props.loading && !this.props.loaded) {
      this.props.loadRestaurants();
    }

    this.map = Leaflet.map(this.div, {
      center: [51.51847684708113, -0.13999606534701844],
      zoom: 12
    });
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.layerGroup = Leaflet.layerGroup().addTo(this.map);
  }
}

RestaurantsMap.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  loadRestaurants: PropTypes.func,
  restaurant: PropTypes.object,
  restaurants: PropTypes.array
};

const initMapStateToProps = () => {
  const restaurantSelector = createRestaurantSelector();

  return (state, ownProps) => {
    return {
      restaurant: restaurantSelector(state, ownProps),
      restaurants: restaurantsSelector(state),
      loading: loadingSelector(state),
      loaded: loadedSelector(state)
    };
  };
};

const initMapDispatchToProps = () => {
  return dispatch => {
    return {
      loadRestaurants: () => dispatch(loadRestaurants())
    };
  };
};

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(RestaurantsMap);
