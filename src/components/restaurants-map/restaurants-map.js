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
import RestaurantInfo from "../restaurant-info";

class RestaurantsMap extends Component {
  render() {
    const { selectedRestaurantId } = this.props;
    return (
      <>
        {selectedRestaurantId && <RestaurantInfo id={selectedRestaurantId} />}
        <div ref={this.setEl} className="map" />)
      </>
    );
  }
  setEl = ref => {
    this.div = ref;
  };
  componentDidMount() {
    this.props.loadRestaurants();
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
    this.renderTiles();
  }

  renderTiles = () => {
    const { selectedRestaurantId, restaurants } = this.props;
    restaurants &&
      restaurants
        .filter(r => !selectedRestaurantId || r.id === selectedRestaurantId)
        .forEach(({ location: { lat, lng } }) => {
          Leaflet.marker([lat, lng]).addTo(this.map);
        });
  };
}

export default connect(
  state => ({
    restaurants: restaurantsSelector(state),
    isRestaurantLoading: restaurantsLoadingSelector(state),
    isRestaurantLoaded: restaurantsLoadedSelector(state)
  }), // this parameter confusion was awesome =)
  {
    loadRestaurants
  }
)(RestaurantsMap);
