import React from "react";
import "./App.css";
import UserForm from "./components/user-form";
// import RestaurantsMap from "./components/restaurants-map";
import { Layout, Menu } from "antd";
import CartBadge from "./components/cart-badge";
// import Counter from "./components/counter";
import OrderList from "./components/order-list";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import ListPage from "./components/routes/list";
import MapPage from "./components/routes/map";
import MenuPage from "./components/routes/menu";
import Counter from "./components/counter";
import ThankYouPage from "./components/routes/thank-you-page";
import OrderPage from "./components/routes/order-page";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="App">
        <Header className="header">
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Menu.Item>
              <NavLink to={"/restaurants"} activeStyle={{ color: "lightgrey" }}>
                List
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink
                to={"/restaurant-map"}
                activeStyle={{ color: "lightgrey" }}
              >
                Map
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to={"/order"} activeStyle={{ color: "lightgrey" }}>
                <CartBadge />
              </NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route path={"/restaurants"} exact component={ListPage} />
            <Route path={"/restaurants/counter"} exact component={Counter} />
            <Route path={"/restaurant-map"} exact component={MapPage} />
            <Route
              path={"/restaurant-menu/:restaurantId"}
              exact
              component={MenuPage}
            />
            <Route path={"/restaurant-map/:restaurantId"} component={MapPage} />
            <Route path={"/order"} exact component={OrderPage} />
            <Route path={"/thank-you"} exact component={ThankYouPage} />
            <Route path={"/"} exact component={ListPage} />
          </Switch>
        </Content>
        <Footer>{/*<Counter />*/}</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
