import { createSelector } from "reselect";
import _ from "lodash";

export const idSelector = (_, ownProps) => ownProps.id;
export const cartSelector = state => state.cart;
export const restaurantsSelector = state => state.restaurants;
export const dishesSelector = state => state.dishes;
export const reviewsSelector = state => state.reviews;

export const reviewIdPropSelector = (_, ownProps) => ownProps.id;
export const restaurantIdPropSelector = (_, ownProps) => ownProps.id;

export const createRestaurantSelector = () =>
  createSelector(
    restaurantsSelector,
    restaurantIdPropSelector,
    (restaurants, id) => {
      console.log("createRestaurantSelector", restaurants, id);
      return _.find(restaurants, r => r.id === id);
    }
  );

export const createReviewSelector = () =>
  createSelector(
    reviewsSelector,
    reviewIdPropSelector,
    (reviews, id) => {
      // console.log("createReviewSelector",reviews, id);
      // console.log("createReviewSelector -- id",id);
      return _.find(reviews, r => r.id === id);
    }
  );

export const createReviewIdsSelector = () =>
  createSelector(
    reviewsSelector,
    createRestaurantSelector,
    (reviews, restaurant) => {
      // console.log("createReviewIdsSelector",reviews, restaurant);
      return _.filter(reviews, r => _.includes(restaurant.reviews, r.id));
    }
  );

export const createDishSelector = () =>
  createSelector(
    dishesSelector,
    idSelector,
    (dishes, id) => {
      // console.log("dishSelector");
      return dishes.find(dish => dish.id === id);
    }
  );

export const selectAllDishesAndTotalPrice = createSelector(
  cartSelector,
  restaurantsSelector,
  (cart, restaurants) => {
    // console.log("selectAllDishesAndTotalPrice");
    let totalPrice = 0;
    const allDishes = restaurants.reduce((dishes, restaurant) => {
      restaurant.menu.forEach(dish => {
        const amount = cart[dish.id];
        if (amount) {
          const totalDishPrice = amount * dish.price;
          totalPrice += totalDishPrice;
          dishes.push({
            ...dish,
            amount,
            totalDishPrice
          });
        }
      });
      return dishes;
    }, []);

    return {
      dishes: allDishes,
      totalPrice
    };
  }
);
