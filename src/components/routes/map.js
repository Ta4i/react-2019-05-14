import React from "react";
import RestaurantsMap from "../restaurants-map";

function MapPage(props) {
  return <RestaurantsMap id={props.match.params.id} />;
}

export default MapPage;
