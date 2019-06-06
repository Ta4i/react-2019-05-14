import { createSelector } from "reselect";

export const idSelector = (_, ownProps) => ownProps.id;
export const cartSelector = state => state.cart;
export const restaurantsSelector = state =>
  state.restaurants.get("entities").toJS();
export const dishesSelector = state => state.dishes.entities;
export const reviewsSelector = state => state.reviews.entities;
export const usersSelector = state => state.users.entities;

export const loadingRestaurantsSelector = state =>
  state.restaurants.get("loading");
export const loadingDishesSelector = state => state.dishes.loading;
export const loadingReviewsSelector = state => state.reviews.loading;
export const loadingUsersSelector = state => state.users.loading;

export const createDishSelector = () =>
  createSelector(
    dishesSelector,
    idSelector,
    (dishes, id) => {
      return dishes.find(dish => dish.id === id);
    }
  );

export const selectAllDishesAndTotalPrice = createSelector(
  cartSelector,
  dishesSelector,
  (cart, dishes) => {
    let totalPrice = 0;
    const allDishes = dishes.reduce((dishesInOrder, dish) => {
      const amount = cart[dish.id];
      if (amount) {
        const totalDishPrice = amount * dish.price;
        totalPrice += totalDishPrice;
        dishesInOrder.push({
          ...dish,
          amount,
          totalDishPrice
        });
      }
      return dishesInOrder;
    }, []);

    return {
      dishes: allDishes,
      totalPrice
    };
  }
);

export const restaurantSelector = createSelector(
  restaurantsSelector,
  idSelector,
  (restaurants, id) => {
    return restaurants.find(restaurant => restaurant.id === id);
  }
);

export const createUserSelector = () =>
  createSelector(
    usersSelector,
    idSelector,
    (users, id) => {
      return users.find(user => user.id === id);
    }
  );

export const createReviewsSelector = () =>
  createSelector(
    reviewsSelector,
    restaurantSelector,
    (reviews, restaurant) => {
      // console.log(restaurant);
      return restaurant.reviews.map(reviewId =>
        reviews.find(review => review.id === reviewId)
      );
    }
  );

export const createRatingSelector = () => {
  const reviewsSelector = createReviewsSelector();
  return createSelector(
    reviewsSelector,
    reviews => {
      const rawRating =
        reviews
          .filter(review => typeof review !== "undefined")
          .reduce((acc, { rating }) => {
            return acc + rating;
          }, 0) / reviews.length;
      return Math.floor(rawRating * 2) / 2;
    }
  );
};
