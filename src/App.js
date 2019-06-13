import React, { useState } from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import CartBadge from "./components/cart-badge";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import ListPage from "./components/routes/list";
import MapPage from "./components/routes/map";
import MenuPage from "./components/routes/menu";
import Counter from "./components/counter";
import OrderPage from "./components/routes/order";
import OrderCompletePage from "./components/routes/order-complete";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./history";
import { Provider as UserProvider } from "./contexts/user";
import {
  LocalizationData,
  Provider as LocaleProvider
} from "./localization/context";
import LocaleSwitcher from "./components/locale-switcher";
import {
  LABEL_BUTTON__RESTAURANT__SHOW_ON_MAP,
  NAVBAR_ITEM_LABEL_LIST,
  NAVBAR_ITEM_LABEL_MAP
} from "./localization/textKeys";
import LocalizedString from "./localization/LocalizedString";

const { Header, Content, Footer } = Layout;

function App() {
  const [state, setState] = useState({
    localeData: {
      ...LocalizationData
    },
    user: {
      name: "default name"
    }
  });
  console.log("after setstate", state);

  const setUser = user =>
    setState({
      user: { ...state.user, ...user },
      localeData: state.localeData
    }); // don't even ask
  const setLocale = locale => {
    console.log("before setstate", state);
    setState({
      localeData: { ...state.localeData, locale: locale },
      user: state.user
    });
  };

  return (
    <LocaleProvider value={{ ...state.localeData, setLocale }}>
      <UserProvider value={state.user}>
        <ConnectedRouter history={history}>
          <Layout className="App">
            <Header className="header">
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item>
                  <NavLink
                    to={"/restaurants"}
                    activeStyle={{ color: "lightgrey" }}
                  >
                    <LocalizedString name={NAVBAR_ITEM_LABEL_LIST} />
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink
                    to={"/restaurant-map"}
                    activeStyle={{ color: "lightgrey" }}
                  >
                    <LocalizedString name={NAVBAR_ITEM_LABEL_MAP} />
                  </NavLink>
                </Menu.Item>
                <CartBadge />
                <LocaleSwitcher />
              </Menu>
            </Header>
            <Content>
              <Switch>
                <Redirect from={"/"} exact to={"/restaurants"} />
                <Route path={"/restaurants"} component={ListPage} />
                <Route path={"/restaurants/counter"} component={Counter} />
                <Route
                  path={"/restaurant-map/:restaurantId"}
                  component={MapPage}
                />
                <Route path={"/restaurant-map/"} component={MapPage} />
                <Route
                  path={"/restaurant-menu/:restaurantId"}
                  component={MenuPage}
                />
                <Route path={"/order-complete"} component={OrderCompletePage} />
                <Route
                  path={"/order"}
                  render={() => <OrderPage setUser={setUser} />}
                />
                <Route path={"/error"} render={() => <h2>Error page</h2>} />
                <Route
                  path={"/"}
                  exact
                  children={props => {
                    if (props.match) {
                      console.log("matched");
                      return (
                        <h2>
                          <LocalizedString
                            name={LABEL_BUTTON__RESTAURANT__SHOW_ON_MAP}
                          />
                        </h2>
                      );
                    } else {
                      console.log("not matched");
                    }
                  }}
                />
              </Switch>
            </Content>
            <Footer>{/*<Counter />*/}</Footer>
          </Layout>
        </ConnectedRouter>
      </UserProvider>
    </LocaleProvider>
  );
}

export default App;
