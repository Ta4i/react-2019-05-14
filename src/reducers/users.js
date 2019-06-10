// import { normalizedUsers } from "../fixtures";
import { FAIL, LOAD_USERS, START, SUCCESS, ADD_REVIEW } from "../constants";

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: []
};

export default (usersState = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS + START: {
      return {
        ...usersState,
        loading: true
      };
    }
    case LOAD_USERS + SUCCESS: {
      return {
        ...usersState,
        entities: action.response,
        loading: false,
        loaded: true
      };
    }
    case LOAD_USERS + FAIL: {
      return {
        ...usersState,
        loading: false,
        loaded: false,
        error: action.error
      };
    }
    case ADD_REVIEW: {
      if (!usersState.find(user => user.id === action.userId)) {
        return [
          ...usersState,
          {
            id: action.userId,
            name: action.payload.userName
          }
        ];
      } else {
        return usersState;
      }
    }
    default:
      return usersState;
  }
};

// export default (usersState = normalizedUsers, action) => {
//   switch (action.type) {
//     case ADD_REVIEW: {
//       if (!usersState.find(user => user.id === action.userId)) {
//         return [
//           ...usersState,
//           {
//             id: action.userId,
//             name: action.payload.userName
//           }
//         ];
//       } else {
//         return usersState;
//       }
//     }
//     default:
//       return usersState;
//   }
// };
