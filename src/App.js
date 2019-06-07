import React from "react";
import "./App.css";
import UserForm from "./components/user-form";
// import RestaurantsMap from "./components/restaurants-map";
import { Layout, Menu } from "antd";
import CartBadge from "./components/cart-badge";
// import Counter from "./components/counter";
import OrderList from "./components/order-list";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import ListPage from "./components/routes/list";
import MapPage from "./components/routes/map";

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
            <CartBadge />
          </Menu>
        </Header>
        <Content>
          <Route path={"/restaurants"} component={ListPage} />
          <Route path={"/restaurant-map"} component={MapPage} />
          {/* temporary turn Map off */}
          {/*{<RestaurantsMap />}*/}
          <OrderList />
          <UserForm />
        </Content>
        <Footer>{/*<Counter />*/}</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
