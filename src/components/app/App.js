import React from "react";
import "./App.css";
import RestaurantList from "../restaurant-list";
import UserForm from "../use-form";
import RestaurantsMap from "../restaurants-map";

function App(props) {
  return (
    <div className="App">
      <header>
        <div className="container">Restaurants application</div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="content">
              <section className="left">
                <RestaurantList restaurants={props.restaurants} />
              </section>

              <aside className="right">
                <UserForm />
              </aside>
            </div>
          </div>
          <section className="map">
            <RestaurantsMap restaurants={props.restaurants} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
