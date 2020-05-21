export const INPUT_FILTER_CHANGE = "INPUT_FILTER_CHANGE";
export const INPUT_FILTER_CLEAR = "INPUT_FILTER_CLEAR";

export function inputFilterAction(e) {
  return (dispatch) => {
    dispatch({
      type: INPUT_FILTER_CHANGE,
      payload: e.target.value,
    });
  };
}

export function inputFilterClear() {
  return (dispatch) => {
    dispatch({
      type: INPUT_FILTER_CLEAR,
    });
  };
}
