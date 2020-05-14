import { combineReducers } from "redux";
import { contentReducer, filterReducer } from "./contentReducer";

export const rootReducer = combineReducers({
  content: contentReducer,
  filter: filterReducer,
});
