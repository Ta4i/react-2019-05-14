import { createSelector } from "reselect";

export const idSelector = (_, ownProps) => ownProps.id;
export const idReviewSelector = (_, ownProps) => ownProps.review;
export const averageRatingIdsSelector = (_, ownProps) => ownProps.reviews;
export const averageRatingReviewsSelector = state => state.reviews;
export const cartSelector = state => state.cart;
export const restaurantsSelector = state => state.restaurants;
export const dishesSelector = state => state.dishes;
export const reviewsSelector = state => state.reviews;
export const usersSelector = state => state.users;

export const averageRatingSelector = createSelector(
  averageRatingReviewsSelector,
  averageRatingIdsSelector,
  (reviews, reviewId) => {
    const rawRating =
      reviews.reduce((acc, { id, rating, text }) => {
        reviewId.forEach(review => {
          if (id === review) {
            acc += rating;
          }
        });
        return acc;
      }, 0) / reviewId.length;
    const normalizedRating = Math.floor(rawRating * 2) / 2;
    return normalizedRating;
  }
);

export const reviewSelector = createSelector(
  reviewsSelector,
  idReviewSelector,
  (reviews, id) => {
    return reviews.find(review => review.id === id);
  }
);

export const userSelector = createSelector(
  usersSelector,
  reviewsSelector,
  idReviewSelector,
  (users, reviews, id) => {
    const review = reviews.find(review => review.id === id);

    return users.find(user => user.id === review.userId);
  }
);

export const createDishSelector = () =>
  createSelector(
    dishesSelector,
    idSelector,
    (dishes, id) => {
      console.log("dishSelector");
      return dishes.find(dish => dish.id === id);
    }
  );

export const selectAllDishesAndTotalPrice = createSelector(
  cartSelector,
  restaurantsSelector,
  dishesSelector,
  (cart, restaurants, dishes) => {
    console.log("selectAllDishesAndTotalPrice");
    let totalPrice = 0;
    const allDishes = restaurants.reduce((selectedDishes, restaurant) => {
      restaurant.menu.forEach(dishId => {
        const amount = cart[dishId];
        if (amount) {
          const dish = dishes.find(dish => dish.id === dishId);
          const totalDishPrice = amount * dish.price;
          totalPrice += totalDishPrice;
          selectedDishes.push({
            ...dish,
            amount,
            totalDishPrice
          });
        }
      });
      return selectedDishes;
    }, []);

    return {
      dishes: allDishes,
      totalPrice
    };
  }
);
