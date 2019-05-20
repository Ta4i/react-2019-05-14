import React from "react";
import "./App.css";
import RestaurantList from "./components/restaurant-list";
import UserForm from "./components/user-form";
import Footer from "./components/footer";
import RestaurantsMap from "./components/restaurants-map";

function App(props) {
  return (
    <div className="App">
      <RestaurantList restaurants={props.restaurants} />
      <RestaurantsMap restaurants={props.restaurants} />
      <UserForm />
      <Footer />
    </div>
  );
}

export default App;
