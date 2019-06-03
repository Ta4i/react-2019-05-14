import uuidv4 from "uuid/v4";
import { ADD_REVIEW } from "../constants";

export let logger = store => next => action => {
  // console.log("before", store.getState());
  // console.log("action", action);
  next(action);
  // console.log("after", store.getState());
};

export let generateId = store => next => action => {
  if (action.type === ADD_REVIEW) {
    let { name, value, review, restaurantId } = action.payload.review;
    let { reviews, users, restaurants } = store.getState();

    let oldUser = users.find(
      user => user.name.toLowerCase() === name.toLowerCase()
    );
    let restaurant = restaurants.find(
      restaurant => restaurant.id === restaurantId
    );
    let idxRestaurant = restaurants.findIndex(
      restaurant => restaurant.id === restaurantId
    );

    let generatedNewReviewId = uuidv4();

    let updatedRestaurant = {
      ...restaurant,
      reviews: [...restaurant.reviews, generatedNewReviewId]
    };

    let newUser;
    let updatedUsers;
    let newReview = {
      id: generatedNewReviewId,
      rating: value,
      text: review
    };

    if (oldUser) {
      newReview = {
        ...newReview,
        userId: oldUser.id
      };

      updatedUsers = [...users];
    } else {
      let newUserId = uuidv4();

      newUser = {
        id: newUserId,
        name
      };

      newReview = {
        ...newReview,
        userId: newUserId
      };

      updatedUsers = [...users, newUser];
    }

    let updatedReviews = [...reviews, newReview];
    let updatedRestaurants = [
      ...restaurants.slice(0, idxRestaurant),
      updatedRestaurant,
      ...restaurants.slice(idxRestaurant + 1)
    ];

    action.payload.result = {
      users: updatedUsers,
      restaurants: updatedRestaurants,
      reviews: updatedReviews
    };
  }

  next(action);
};
