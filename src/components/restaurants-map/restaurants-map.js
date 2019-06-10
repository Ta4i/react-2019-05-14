import React, { Component } from "react";
import Leaflet from "leaflet";
import * as PropTypes from "prop-types";
import "./restaurant-map.css";
import { connect } from "react-redux";
import {
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
  restaurantsSelector,
  restaurantSelector
} from "../../selectors";
import { loadRestaurants } from "../../ac";

class RestaurantsMap extends Component {
  render() {
    return <div ref={this.setEl} className="map" />;
  }
  setEl = ref => {
    this.div = ref;
  };
  componentDidMount() {
    if (!this.props.isRestaurantLoading && !this.props.isRestaurantLoaded) {
      this.props.loadRestaurants();
    }
    this.map = Leaflet.map(this.div, {
      center: [51.51847684708113, -0.13999606534701844],
      zoom: 12
    });
    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  componentDidUpdate() {
    this.renderTiles();
  }
  renderTiles = () => {
    if (this.props.id && this.props.restaurant) {
      const { lat, lng } = this.props.restaurant.location;
      Leaflet.marker([lat || 0, lng || 0]).addTo(this.map);
    } else {
      this.props.restaurants.forEach(({ location: { lat, lng } }) => {
        Leaflet.marker([lat, lng]).addTo(this.map);
      });
    }
  };
}

export default connect(
  (state, ownProps) => ({
    restaurants: !ownProps.id ? restaurantsSelector(state) : [],
    restaurant: ownProps.id ? restaurantSelector(state, ownProps) : {},
    isRestaurantLoading: restaurantsLoadingSelector(state),
    isRestaurantLoaded: restaurantsLoadedSelector(state)
  }),
  { loadRestaurants }
)(RestaurantsMap);
