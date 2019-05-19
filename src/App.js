import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Layout, Typography, Row, Col } from 'antd';
import RestaurantList from './components/restaurant-list';
import UserForm from './components/user-form';
import RestaurantsMap from './components/restaurants-map';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

function App(props) {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Title style={{ textAlign: 'center', color: 'white' }}>Restaurants</Title>
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
                <Row style={{ padding: 24 }}>
                  <UserForm />
                </Row>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>All rights reserved</Footer>
      </Layout>
    </div>
  );
}

App.propTypes = {
  restaurants: PropTypes.array
};

export default App;
