export const INPUT_FILTER_CHANGE = "INPUT_FILTER_CHANGE";
export const INPUT_FILTER_RESULT = "INPUT_FILTER_RESULT";

export function inputFilterAction(e) {
  return (dispatch, getState) => {
    dispatch({
      type: INPUT_FILTER_CHANGE,
      payload: e.target.value,
    });
    const usersList = getState().content.usersList;
    let filteredUsers = usersList.filter((user) => {
      let userName = user.name.toLowerCase(); //+ poet.lastName.toLowerCase()
      return userName.indexOf(e.target.value.toLowerCase()) !== -1;
    });
    if (!e.target.value) {
      filteredUsers = [];
    }
    dispatch({
      type: INPUT_FILTER_RESULT,
      payload: filteredUsers,
    });
  };
}
