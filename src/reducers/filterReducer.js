import { INPUT_FILTER_CHANGE } from "../actions/filterActions";

const initialState = {
  inputFilter: "",
};

export default function filterReduser(state = initialState, action) {
  switch (action.type) {
    case INPUT_FILTER_CHANGE:
      return { ...state, inputFilter: action.payload };
    default:
      return state;
  }
}
