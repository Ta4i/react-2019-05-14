import React from "react";
import "./App.css";
import UserForm from "./components/user-form";
// import RestaurantsMap from "./components/restaurants-map";
import { Layout, Menu } from "antd";
import CartBadge from "./components/cart-badge";
import OrderList from "./components/order-list";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import ListPage from "./components/routes/list";
import MapPage from "./components/routes/map";
import RestaurantMapPage from "./components/routes/restaurant-map";
import MenuPage from "./components/routes/menu";
import Counter from "./components/counter";
import OrderPage from "./components/routes/order";
import OrderComplete from "./components/order-complete";

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
                to={"/restaurants-map"}
                activeStyle={{ color: "lightgrey" }}
              >
                Map
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to={"/order-page"}>
                <CartBadge />
              </NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route path={"/restaurants"} component={ListPage} />
            <Route path={"/restaurants/counter"} component={Counter} />
            <Route path={"/restaurants-map"} component={MapPage} />
            <Route path={"/order-page"} component={OrderPage} />
            <Route path={"/order-complete"} component={OrderComplete} />
            <Route
              path={"/restaurant-menu/:restaurantId"}
              component={MenuPage}
            />
            <Route
              path={"/restaurant-map/:restaurantId"}
              component={RestaurantMapPage}
            />
            <Route path={"/"} render={() => <h2>Page not found</h2>} />
          </Switch>
        </Content>
        <Footer>{/*<Counter />*/}</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
