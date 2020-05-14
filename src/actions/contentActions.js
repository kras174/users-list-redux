export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const FAVOURITE_HANDLER = "FAVOURITE_HANDLER";

export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
      const userList = [];
      const data = require("../data/data.json");
      for (let i = 0; i < 15; i++) {
        userList.push(data[i]);
      }
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: userList,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_ERROR,
        payload: {
          error: error.message,
        },
      });
    }
  };
}

export function starHandler(id) {
  return (dispatch, getState) => {
    const newStore = getState().content.usersList.map((item, index) => {
      if (index === id) {
        item.favourite = !item.favourite;
      }
      return item;
    });
    dispatch({
      type: FAVOURITE_HANDLER,
      payload: newStore,
    });
  };
}
