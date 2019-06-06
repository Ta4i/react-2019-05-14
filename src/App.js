import React from "react";
import { connect } from "react-redux";
import "./App.css";
import RestaurantList from "./components/restaurant-list";
import UserForm from "./components/user-form";
// import RestaurantsMap from "./components/restaurants-map";
import { Layout } from "antd";
import CartBadge from "./components/cart-badge";
// import Counter from "./components/counter";
import OrderList from "./components/order-list";
import {
  loadingRestaurantsSelector,
  restaurantsSelector,
  dishesSelector,
  loadingDishesSelector,
  loadingUsersSelector,
  loadingReviewsSelector,
  usersSelector,
  reviewsSelector
} from "./selectors";
import { loadRestaurants, loadDishes, loadUsers, loadReviews } from "./ac";
const { Header, Content, Footer } = Layout;

function App(props) {
  const {
    loadingMenu,
    loadingRestaurants,
    loadingUsers,
    loadingReviews
  } = props;

  const isLoading =
    loadingMenu && loadingRestaurants && loadingUsers && loadingReviews;

  return (
    <Layout className="App">
      <Header className="header">
        <CartBadge />
      </Header>
      <Content>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <RestaurantList
            restaurants={props.restaurants}
            menu={props.menu}
            reviews={props.reviews}
            users={props.users}
            fetchRestaurants={props.loadRestaurants}
            fetchMenu={props.loadDishes}
            fetchUsers={props.loadUsers}
            fetchReviews={props.loadReviews}
          />
        )}
        {/* temporary turn Map off */}
        {/*{<RestaurantsMap restaurants={props.restaurants} />}*/}
        <OrderList />
        <UserForm />
      </Content>
      <Footer>{/*<Counter />*/}</Footer>
    </Layout>
  );
}

export default connect(
  store => ({
    restaurants: restaurantsSelector(store),
    menu: dishesSelector(store),
    users: usersSelector(store),
    reviews: reviewsSelector(store),
    loadingMenu: loadingDishesSelector(store),
    loadingRestaurants: loadingRestaurantsSelector(store),
    loadingUsers: loadingUsersSelector(store),
    loadingReviews: loadingReviewsSelector(store)
  }),
  {
    loadRestaurants,
    loadDishes,
    loadUsers,
    loadReviews
  }
)(App);
