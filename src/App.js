import React from "react";
import "./App.css";
import RestaurantList from "./components/restaurant-list";
import UserForm from "./components/user-form";
import RestaurantsMap from "./components/restaurants-map";

function App(props) {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Restaurants:</h1>
            <div className="row">
              <div className="col-md-12">
                <RestaurantList restaurants={props.restaurants} />
              </div>
              <div className="col-md-12">
                <RestaurantsMap restaurants={props.restaurants} />
              </div>
            </div>
            <div className="col-md-12">
              <UserForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
