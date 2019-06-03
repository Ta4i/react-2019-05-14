import { createSelector } from "reselect";

export const idSelector = (_, ownProps) => ownProps.id || ownProps.arrId;
export const cartSelector = state => state.cart;
export const restaurantsSelector = state => state.restaurants;
export const dishesSelector = state => state.dishes;
export const reviewsSelector = state => state.reviews;
export const usersSelector = state => state.users;

export const filteredReviewSelector = createSelector(
  reviewsSelector,
  idSelector,
  (reviews, arrId) => {
    return reviews.filter(review => arrId.includes(review.id));
  }
);
export const createDishSelector = () =>
  createSelector(
    dishesSelector,
    idSelector,
    (dishes, id) => {
      return dishes.find(dish => dish.id === id);
    }
  );

export const createRatingSelector = () =>
  createSelector(
    filteredReviewSelector,
    filteredReview => {
      const averageRating =
        filteredReview.reduce((acc, { rating }) => {
          return acc + rating;
        }, 0) / filteredReview.length;
      const normalizedRating = Math.floor(averageRating * 2) / 2;
      return {
        averageRating,
        normalizedRating
      };
    }
  );

export const createReviewListSelector = () =>
  createSelector(
    filteredReviewSelector,
    usersSelector,
    (filteredReview, users) =>
      filteredReview.map(review => ({
        ...review,
        user: users.find(user => user.id === review.userId).name
      }))
  );

export const selectAllDishesAndTotalPrice = createSelector(
  cartSelector,
  dishesSelector,
  (cart, dishes) => {
    let totalPrice = 0;
    const allDishes = Object.keys(cart).map(id => {
      let orderedDish = dishes.find(dish => dish.id === id);
      let totalDishPrice = cart[id] * orderedDish.price;
      totalPrice += totalDishPrice;
      return {
        id,
        amount: cart[id],
        price: orderedDish.price,
        name: orderedDish.name,
        totalDishPrice
      };
    });

    return {
      dishes: allDishes,
      totalPrice
    };
  }
);
