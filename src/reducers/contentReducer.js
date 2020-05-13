import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../actions/contentActions";
import { MENU_SWITCH_HANDLER } from "../actions/headerActions";

const initialState = {
  usersList: [],
  isFetching: false,
  error: "",
  previewContent: false,
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
    case MENU_SWITCH_HANDLER:
      return {
        ...state,
        previewContent: action.payload,
      };
    default:
      return state;
  }
}
