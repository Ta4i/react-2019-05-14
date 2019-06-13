import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Provider as LocaleProvider, Consumer as LocaleConsumer } from './contexts/i18n';

import './App.css';
import { Layout, Menu, Typography, Row, Col, Icon, Dropdown } from 'antd';
import CartBadge from './components/cart-badge';
import RestaurantsPage from './components/routes/restaurants-page';
import MapPage from './components/routes/map-page';
import OrderCompletePage from './components/routes/order-complete-page';
import Cart from './components/cart';
import { connect } from 'react-redux';
import { loadLocale } from './actions';
import PropTypes from 'prop-types';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const localeMenu = (
  <LocaleConsumer>
    {({ lang, changeLocale }) => {
      return (
        <Menu theme="dark" onClick={changeLocale} selectedKeys={[lang]}>
          <Menu.Item key="EN">
            <NavLink to="#" activeStyle={{ color: 'lightgrey' }}>
              EN
            </NavLink>
          </Menu.Item>
          <Menu.Item key="RU">
            <NavLink to="#" activeStyle={{ color: 'lightgrey' }}>
              RU
            </NavLink>
          </Menu.Item>
        </Menu>
      );
    }}
  </LocaleConsumer>
);

export function App(props) {
  const [i18n, setLocale] = useState({
    lang: 'EN',
    locale: {},
    changeLocale: locale => {
      setLocale(state => {
        if (!state.locale[locale.key]) {
          props.loadLocale(locale.key);
        }

        return state.lang === locale.key
          ? state
          : {
              ...state,
              lang: locale.key
            };
      });
    },
    getText: (state, name) => {
      const text = state.locale[state.lang] ? state.locale[state.lang][name] : '';
      return text;
    }
  });

  useEffect(() => {
    if (!props.localeLoading && !props.localeLoaded && !i18n.locale[i18n.lang]) {
      props.loadLocale(i18n.lang);
    }
    if (props.localeLoaded && !i18n.locale[i18n.lang]) {
      console.log('add new locale from server', i18n.locale[i18n.lang]);
      setLocale(state => {
        return i18n.locale[i18n.lang]
          ? state
          : {
              ...state,
              locale: {
                ...state.locale,
                [props.lang]: props.locale
              }
            };
      });
    }
  });

  console.log(i18n);

  return (
    <LocaleProvider value={i18n}>
      <Router>
        <div className="App">
          <Layout>
            <Header>
              <Row>
                <Col span={2}>
                  <Dropdown overlay={localeMenu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                      {i18n.lang} <Icon type="down" />
                    </a>
                  </Dropdown>
                </Col>
                <Col span={4} offset={10}>
                  <Title className="header-title" style={{ color: 'white' }}>
                    {i18n.getText(i18n, 'appTitle')}
                  </Title>
                </Col>
                <Col span={4} offset={4}>
                  <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
                    <Menu.Item>
                      <NavLink to={'/restaurants'} activeStyle={{ color: 'lightgrey' }}>
                        {i18n.getText(i18n, 'menu.list')}
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                      <NavLink to={'/restaurant-map'} activeStyle={{ color: 'lightgrey' }}>
                        {i18n.getText(i18n, 'menu.map')}
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
                    <Route path={'/restaurants'} render={() => <RestaurantsPage i18n={i18n} />} />
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
    </LocaleProvider>
  );
}

App.propTypes = {
  lang: PropTypes.string,
  locale: PropTypes.object.isRequired,
  loadLocale: PropTypes.func,
  localeLoading: PropTypes.bool,
  localeLoaded: PropTypes.bool
};

export default connect(
  state => ({
    lang: state.i18n.lang,
    locale: state.i18n.locale,
    localeLoading: state.i18n.loading,
    localeLoaded: state.i18n.loaded
  }),
  {
    loadLocale
  }
)(App);
