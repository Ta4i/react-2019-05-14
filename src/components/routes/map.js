import React from "react";
import RestaurantsMap from "../restaurants-map";

function MapPage({ match }) {
  return <RestaurantsMap selectedRestaurantId={match.params.restaurantId} />;
}

export default MapPage;
