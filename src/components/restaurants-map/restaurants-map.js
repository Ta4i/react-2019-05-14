import React, { Component } from "react";
import Leaflet from "leaflet";
import "./restaurant-map.css";
import { connect } from "react-redux";
import {
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
  restaurantsSelector
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
    this.renderTiles();
  }
  componentDidUpdate() {
    // Не всегда вызывается???
    this.renderTiles();
  }
  renderTiles = () => {
    if (this.props.id) {
      const restaurant = this.props.restaurants.find(
        restaurant => restaurant.id === this.props.id
      );
      if (restaurant) {
        const { lat, lng } = restaurant.location;
        Leaflet.marker([lat, lng]).addTo(this.map);
      }
    } else {
      this.props.restaurants.forEach(({ location: { lat, lng } }) => {
        Leaflet.marker([lat, lng]).addTo(this.map);
      });
    }
  };
}

export default connect(
  state => ({
    restaurants: restaurantsSelector(state),
    isRestaurantLoading: restaurantsLoadingSelector(state),
    isRestaurantLoaded: restaurantsLoadedSelector(state)
  }),
  {
    loadRestaurants
  }
)(RestaurantsMap);
