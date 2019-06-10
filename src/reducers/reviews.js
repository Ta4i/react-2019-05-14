// import { normalizedReviews } from "../fixtures";
import { FAIL, LOAD_REVIEWS, START, SUCCESS, ADD_REVIEW } from "../constants";

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: []
};

export default (reviewsState = initialState, action) => {
  switch (action.type) {
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
        loading: false,
        loaded: false,
        error: action.error
      };
    }
    case ADD_REVIEW: {
      return [
        ...reviewsState,
        {
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating
        }
      ];
    }
    default:
      return reviewsState;
  }
};

// export default (reviewsState = normalizedReviews, action) => {
// 	switch (action.type) {
// 		case ADD_REVIEW: {
// 			return [
// 				...reviewsState,
// 				{
// 					id: action.generatedId,
// 					userId: action.userId,
// 					text: action.payload.text,
// 					rating: action.payload.rating
// 				}
// 			];
// 		}
// 		default:
// 			return reviewsState;
// 	}
// };
