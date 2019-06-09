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
      zoom: 12,
      minWidth: 640,
      minHeight: 480
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
    const restaurantId = this.props.id;
    const restaurant = this.props.restaurants.find(
      restaurantProps => restaurantProps.id === restaurantId
    );

    if (typeof restaurant !== "undefined") {
      Leaflet.marker([restaurant.location.lat, restaurant.location.lng]).addTo(
        this.map
      );
    }
  };
}

const initMapStateToProps = () => {
  return (state, ownProps) => {
    return {
      restaurants: restaurantsSelector(state),
      isRestaurantLoading: restaurantsLoadingSelector(state),
      isRestaurantLoaded: restaurantsLoadedSelector(state)
    };
  };
};

export default connect(
  initMapStateToProps,
  {
    loadRestaurants
  }
)(RestaurantsMap);
