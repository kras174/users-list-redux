export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
      const userList = [];
      const data = require("../data/data.json");
      for (let i = 0; i < 11; i++) {
        userList.push(data[i]);
      }
      console.log(userList);
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: userList,
      });
    } catch (error) {
      console.log("error " + error);
      dispatch({
        type: FETCH_USERS_ERROR,
        payload: {
          error: error,
        },
      });
    }
  };
}
