import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import './App.css';
import { Layout, Menu, Typography, Row, Col } from 'antd';
import CartBadge from './components/cart-badge';
import RestaurrantsPage from './components/routes/restaurants-page';
import MapPage from './components/routes/map-page';
import OrderCompletePage from './components/routes/order-complete-page';
import Cart from './components/cart';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

export function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header>
            <Row>
              <Col span={4} offset={10}>
                <Title className="header-title" style={{ color: 'white' }}>
                  Restaurants
                </Title>
              </Col>
              <Col span={4} offset={4}>
                <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
                  <Menu.Item>
                    <NavLink to={'/restaurants'} activeStyle={{ color: 'lightgrey' }}>
                      List
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item>
                    <NavLink to={'/restaurant-map'} activeStyle={{ color: 'lightgrey' }}>
                      Map
                    </NavLink>
                  </Menu.Item>
                  <CartBadge />
                </Menu>
              </Col>
            </Row>
          </Header>
          <Content>
            <div style={{ background: '#fff', padding: 12, minHeight: 280 }}>
              <Row>
                <Switch>
                  <Route path={'/restaurants'} component={RestaurrantsPage} />
                  <Route path={'/restaurant-map/:id?'} component={MapPage} />
                  <Route path={'/order-complete'} component={OrderCompletePage} />
                </Switch>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>All rights reserved</Footer>
        </Layout>
        <Cart />
      </div>
    </Router>
  );
}

export default App;
