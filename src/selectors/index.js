import { createSelector } from "reselect";
import _ from "lodash";

export const idSelector = (_, ownProps) => ownProps.id;
export const cartSelector = state => state.cart;
export const restaurantsSelector = state => state.restaurants;
export const dishesSelector = state => state.dishes;
export const reviewsSelector = state => state.reviews;
export const usersSelector = state => state.users;

export const reviewIdPropSelector = (_, ownProps) => ownProps.reviewId;
export const restaurantIdPropSelector = (_, ownProps) => ownProps.restaurantId;

export const createRestaurantSelector = () =>
  createSelector(
    restaurantsSelector,
    restaurantIdPropSelector,
    (restaurants, id) => {
      return _.find(restaurants, r => r.id === id);
    }
  );

export const createReviewSelector = () =>
  createSelector(
    reviewsSelector,
    reviewIdPropSelector,
    (reviews, id) => {
      return _.find(reviews, r => r.id === id);
    }
  );

export const createRestaurantReviewsSelector = () =>
  createSelector(
    reviewsSelector,
    createRestaurantSelector(),
    (reviews, restaurant) => {
      const restaurantReviews = reviews.filter(r =>
        restaurant.reviews.includes(r.id)
      );
      return restaurantReviews;
    }
  );

export const createReviewIdsSelector = () =>
  createSelector(
    createRestaurantReviewsSelector(),
    reviews => {
      return reviews.map(r => r.id);
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

export const createRestaurantAverageRateSelector = () =>
  createSelector(
    createRestaurantReviewsSelector(),
    reviews => {
      return (
        reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length
      );
    }
  );

export const createReviewAuthorSelector = () =>
  createSelector(
    createReviewSelector(),
    usersSelector,
    (review, users) => {
      return _.find(users, u => u.id === review.userId);
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
