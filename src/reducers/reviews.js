import { ADD_REVIEW, FAIL, START, SUCCESS, LOAD_REVIEWS } from "../constants";

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: []
};

export default (reviewsState = initialState, action) => {
  switch (action.type) {
    /*case ADD_REVIEW: {
      return [
        ...reviewsState,
        {
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating
        }
      ];
    }*/

    case LOAD_REVIEWS + START: {
      return {
        ...reviewsState,
        loading: true
      };
    }
    case LOAD_REVIEWS + SUCCESS: {
      return {
        ...reviewsState,
        entities: action.response,
        loading: false,
        loaded: true
      };
    }
    case LOAD_REVIEWS + FAIL: {
      return {
        ...reviewsState,
        error: action.error,
        loading: false,
        loaded: false
      };
    }

    default:
      return reviewsState;
  }
};
