import { createSelector } from "reselect";

export const idSelector = (_, ownProps) => ownProps.id;
export const cartSelector = state => state.cart;
export const restaurantsSelector = state => state.restaurants;
export const dishesSelector = state => state.dishes;
export const reviewsSelector = state => state.reviews;
export const usersSelector = state => state.users;
export const reviewListSelector = (_, ownProps) => ownProps.reviews;
export const reviewUserIDSelector = (_, ownProps) => ownProps.review.userId;

export const createDishSelector = () =>
  createSelector(
    dishesSelector,
    idSelector,
    (dishes, id) => {
      console.log("dishSelector");
      return dishes.find(dish => dish.id === id);
    }
  );

export const createReviewsSelector = () =>
  createSelector(
    reviewsSelector,
    reviewListSelector,
    (reviews, list) => {
      return reviews.filter(review => list.indexOf(review.id) > -1);
    }
  );

export const createUsersSelector = () =>
  createSelector(
    usersSelector,
    reviewUserIDSelector,
    (users, id) => {
      return users.find(user => user.id === id).name || "";
    }
  );

export const selectAllDishesAndTotalPrice = createSelector(
  cartSelector,
  restaurantsSelector,
  (cart, restaurants) => {
    console.log("selectAllDishesAndTotalPrice");
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
