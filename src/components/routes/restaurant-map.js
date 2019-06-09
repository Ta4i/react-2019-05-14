import React from "react";
import RestaurantsMap from "../restaurants-map";

function RestaurantMapPage(props) {
  let restaurant = { ...props.location.state.location };
  return (
    <>
      <div
        className="restaurants-map-header"
        style={{ display: "flex", margin: "20px" }}
      >
        <img
          src={props.location.state.image}
          alt={props.location.state.name}
          style={{ width: "200px", height: "200px", marginRight: "20px" }}
        />
        <h1 style={{ fontSize: "32px" }}>{props.location.state.name}</h1>
      </div>
      <RestaurantsMap restaurantItem={restaurant} />
    </>
  );
}

export default RestaurantMapPage;
