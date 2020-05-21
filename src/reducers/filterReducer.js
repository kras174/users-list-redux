import {
  INPUT_FILTER_CHANGE,
  INPUT_FILTER_CLEAR,
} from "../actions/filterActions";

const initialState = {
  inputFilter: "",
};

export default function filterReduser(state = initialState, action) {
  switch (action.type) {
    case INPUT_FILTER_CHANGE:
      return { ...state, inputFilter: action.payload };
    case INPUT_FILTER_CLEAR:
      return { ...state, inputFilter: "" };
    default:
      return state;
  }
}
