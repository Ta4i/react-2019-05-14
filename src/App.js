import React from "react";
import "./App.css";
import RestaurantList from "./components/restaurant-list";
import UserForm from "./components/user-form";
import RestaurantsMap from "./components/restaurants-map";

import { Layout, Row, Col } from "antd";

function App(props) {
  return (
    <div className="App">
      <Layout className="layout">
        <div className="header">
          <div className="container">
            <div className="logo">Food</div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <RestaurantList restaurants={props.restaurants} />
            <Row type="flex" gutter={20}>
              <Col className="island-col" xs={24} md={12}>
                <div className="island">
                  <RestaurantsMap restaurants={props.restaurants} />
                </div>
              </Col>
              <Col className="island-col" xs={24} md={12}>
                <div className="island">
                  <UserForm />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="copy">Food ©2019</div>
      </Layout>
    </div>
  );
}

export default App;
