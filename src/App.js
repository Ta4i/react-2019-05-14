import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import { Layout, Typography, Row, Col } from 'antd';
import CartBadge from './components/cart-badge';
import RestaurantList from './components/restaurant-list';
import RestaurantsMap from './components/restaurants-map';
import Cart from './components/cart';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

function App(props) {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Row>
            <Col span={10} offset={2}>
              <Title className="header-title" style={{ color: 'white' }}>
                Restaurants
              </Title>
            </Col>
            <Col span={2} offset={10}>
              <CartBadge />
            </Col>
          </Row>
        </Header>
        <Content>
          <div style={{ background: '#fff', padding: 12, minHeight: 280 }}>
            <Row>
              <Col span={14} style={{ padding: 24 }}>
                <RestaurantList restaurants={props.restaurants} />
              </Col>
              <Col span={8} style={{ padding: 24 }}>
                <Row style={{ padding: 24 }}>
                  <RestaurantsMap restaurants={props.restaurants} />
                </Row>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>All rights reserved</Footer>
      </Layout>
      <Cart />
    </div>
  );
}

App.propTypes = {
  restaurants: PropTypes.array
};

export default connect(state => ({
  restaurants: state.restaurants
}))(App);
