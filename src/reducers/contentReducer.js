import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, FAVOURITE_HANDLER } from "../actions/contentActions";
import { INPUT_FILTER_CHANGE } from "../actions/filterActions";

const initialState = {
  usersList: [],
  isFetching: false,
  isFiltering: false,
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
        usersList: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    case FAVOURITE_HANDLER:
      return { ...state, usersList: action.payload };
    case INPUT_FILTER_CHANGE:
      return { ...state, isFiltering: !!action.payload };
    default:
      return state;
  }
}
