import React from "react";
import "./App.css";
import RestaurantList from "./components/restaurant-list";
import UserForm from "./components/user-form";
import RestaurantsMap from "./components/restaurants-map";
import { Layout } from "antd";
import PropTypes from "prop-types";
const { Header, Content } = Layout;

function App(props) {
  return (
    <Layout className="App">
      <Header />
      <Content>
        <RestaurantList restaurants={props.restaurants} />
        {/* temporary turn Map off */}
        {false && <RestaurantsMap restaurants={props.restaurants} />}
        <UserForm />
      </Content>
    </Layout>
  );
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      location: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
      }),
      image: PropTypes.string,
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          price: PropTypes.number,
          ingredients: PropTypes.arrayOf(PropTypes.string)
        })
      ).isRequired,
      reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          user: PropTypes.string,
          text: PropTypes.string,
          rating: PropTypes.number
        })
      ).isRequired
    })
  ).isRequired
};

export default App;
