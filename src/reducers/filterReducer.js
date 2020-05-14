import { INPUT_FILTER_CHANGE, INPUT_FILTER_RESULT } from "../actions/filterActions";

const initialState = {
  filteredUsers: [],
  inputFilter: "",
  error: "",
};

export default function filterReduser(state = initialState, action) {
  switch (action.type) {
    case INPUT_FILTER_CHANGE:
      return { ...state, inputFilter: action.payload };
    case INPUT_FILTER_RESULT:
      return { ...state, filteredUsers: action.payload };
    default:
      return state;
  }
}
