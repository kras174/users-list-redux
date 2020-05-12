export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export function fetchUsers() {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
      const response = await fetch("../../assets/data.json");
      const userList = response.data;

      console.log(userList);
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: {
          userList: userList,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_USERS_ERROR,
        payload: {
          error: error,
        },
      });
    }
  };
}
