import { createSelector } from "reselect";

export const idSelector = (_, ownProps) => ownProps.id;
export const cartSelector = state => state.cart;
export const restaurantsSelector = state => state.restaurants;
export const dishesSelector = state => state.dishes;
export const reviewsSelector = state => state.reviews;
export const reviewIdSelector = (_, ownProps) => ownProps.reviews;
export const usersSelector = state => state.users;

export const createDishSelector = () =>
  createSelector(
    dishesSelector,
    idSelector,
    (dishes, id) => {
      return dishes.find(dish => dish.id === id);
    }
  );

// export const selectAllDishesAndTotalPrice = createSelector(
//   cartSelector,
//   restaurantsSelector,
//   (cart, restaurants) => {
//     // console.log("selectAllDishesAndTotalPrice");
//
//     let totalPrice = 0;
//
//     const allDishes = restaurants.reduce((dishes, restaurant) => {
//
//       restaurant.menu.forEach(dishId => {
//
//         const amount = cart[dishId];
//
//         if (amount) {
//
//           const totalDishPrice = amount * dish.price;
//           totalPrice += totalDishPrice;
//           dishes.push({
//             ...dish,
//             amount,
//             totalDishPrice
//           });
//         }
//       });
//
//
//       return dishes;
//     }, []);
//
//
//
//     console.log(allDishes, totalPrice);
//
//
//
//     return {
//       dishes: allDishes,
//       totalPrice
//     };
//   }
// );

export const selectAllDishesAndTotalPrice = createSelector(
  cartSelector,
  restaurantsSelector,
  dishesSelector,
  (cart, restaurants, dishes) => {
    let allDishes = [];
    let totalPrice = 0;

    for (let dishId in cart) {
      dishes.forEach(dish => {
        if (dish.id === dishId) {
          let { id, name, price } = dish;
          allDishes.push({
            id,
            name,
            price,
            amount: cart[dishId]
          });

          totalPrice += price * cart[dishId];
        }
      });
    }

    // allDishes.forEach(dish => {
    // 		totalPrice += dish.price * dish.amount;
    // });

    return {
      dishes: allDishes,
      totalPrice
    };
  }
);

// get all reviews for one restaurants
export const createReviewsSelector = () =>
  createSelector(
    reviewsSelector,
    reviewIdSelector,
    usersSelector,
    (reviews, reviewsId, users) => {
      let result = [];
      let reviewsArray = [];

      reviewsId.forEach(id => {
        reviews.forEach(reviewsItem => {
          if (id === reviewsItem.id) {
            reviewsArray.push(reviewsItem);
          }
        });
      });

      reviewsArray.forEach(reviewItem => {
        users.forEach(userItem => {
          if (reviewItem.userId === userItem.id) {
            let { id, rating, text } = reviewItem;
            result.push({
              id,
              rating,
              text,
              name: userItem.name
            });
          }
        });
      });
      return result;
    }
  );
