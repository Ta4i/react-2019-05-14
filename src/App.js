import React from "react";
import "./App.css";
import RestaurantList from "./components/restaurant-list";
import UserForm from "./components/user-form";
import RestaurantsMap from "./components/restaurants-map";
import { Layout, Typography, Icon, Row, Col } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

function App({ restaurants }) {
  return (
    <Layout>
      <Header style={{ background: "#fff", padding: 0 }}>
        <Row>
          <Col span={12} offset={6}>
            <Title level={1}>
              <Icon type="sketch" />
              Restaurant Order
            </Title>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Row gatter={8} type="flex" justify="center">
          <Col span={6}>
            <RestaurantList restaurants={restaurants} />
          </Col>
          <Col span={3}>
            <UserForm />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <RestaurantsMap restaurants={restaurants} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
