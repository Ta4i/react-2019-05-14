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
      <Header style={{ background: "#fff" }}>
        <Row>
          <Col span={12} offset={6}>
            <Title level={1}>
              <Icon type="sketch" />
              Restaurant Order
            </Title>
          </Col>
        </Row>
      </Header>
      <Content>
        <Row gutter={16} type="flex" justify="center">
          <Col span={16}>
            <RestaurantList restaurants={restaurants} />
          </Col>
          <Col span={4}>
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
