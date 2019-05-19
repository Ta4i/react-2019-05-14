import React from "react";
import "./App.css";
import RestaurantList from "./components/restaurant-list";
import UserForm from "./components/user-form";
import RestaurantsMap from "./components/restaurants-map";
import { Col, Layout, Row } from "antd";

function App(props) {
    const { Content } = Layout;

    return (
        <Layout className="App">
            <Content className="AppWrapper">
                <div className="AppContent">
                    <Row>
                        <Col span={12} offset={6}>
                            <RestaurantList restaurants={props.restaurants} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6}>
                            <RestaurantsMap restaurants={props.restaurants} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6}>
                            <UserForm />
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
}

export default App;
