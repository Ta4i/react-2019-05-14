import { createSelector } from 'reselect';

export const idSelector = (_, ownProps) => ownProps.id;
export const restaurantIdSelector = (_, ownProps) => ownProps.restaurantId;
export const restaurantsSelector = state => state.restaurants.get('entities').toJS();
export const loadingSelector = state => state.restaurants.get('loading');
export const dishesSelector = state => state.dishes;
export const reviewsSelector = state => state.reviews;
export const currentUserSelector = state => state.user;
export const usersSelector = state => state.users.get('entities').toJS();
export const restarauntReviewsSelector = (_, ownProps) => ownProps.reviews;

export const cartSelector = state => state.cart;

export const createRestaurantSelector = () =>
  createSelector(
    restaurantIdSelector,
    restaurantsSelector,
    (id, restaurants) => {
      return restaurants.find(restaurant => restaurant.id === id);
    }
  );

export const createCartDishesSelector = () =>
  createSelector(
    cartSelector,
    dishesSelector,
    (cart, dishes) => {
      const cartDishes = [];
      for (const [id, value] of Object.entries(cart.dishes)) {
        const menuDish = dishes.find(item => item.id === id);
        if (menuDish) {
          cartDishes.push({
            id: menuDish.id,
            name: menuDish.name,
            value,
            price: menuDish.price
          });
        }
      }
      return cartDishes;
    }
  );

export const createOrderTotalSelector = () => {
  const cartDishesSelector = createCartDishesSelector();
  return createSelector(
    cartDishesSelector,
    dishes => dishes.reduce((sum, item) => sum + item.price * item.value, 0)
  );
};

export const createAvarageRateSelector = () =>
  createSelector(
    restarauntReviewsSelector,
    reviewsSelector,
    (restarauntReviews, reviews) => {
      const rate = restarauntReviews.length
        ? restarauntReviews
            .map(id => reviews.find(review => review.id === id))
            .reduce((sum, item) => (item ? sum + item.rating : sum), 0) / restarauntReviews.length
        : 0;
      return Math.floor(rate) === rate ? rate : Math.floor(rate) + 0.5;
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

export const createUsersSelector = () =>
  createSelector(
    usersSelector,
    idSelector,
    (users, id) => {
      return users.find(user => user.id === id);
    }
  );

export const createReviewSelector = () =>
  createSelector(
    reviewsSelector,
    usersSelector,
    idSelector,
    (reviews, users, id) => {
      const review = reviews.find(item => item.id === id);
      const user = users.find(item => item.id === review.userId);
      return {
        ...review,
        user
      };
    }
  );
