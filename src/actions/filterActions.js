export const INPUT_FILTER_CHANGE = "INPUT_FILTER_CHANGE";

export function inputFilterAction(e) {
  return (dispatch) => {
    dispatch({
      type: INPUT_FILTER_CHANGE,
      payload: e.target.value,
    });
  };
}
