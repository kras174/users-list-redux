import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../actions/contentActions";

const initialState = {
  usersList: [],
  isFetching: false,
  error: "",
};

export function contentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        usersList: action.payload.usersList,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
