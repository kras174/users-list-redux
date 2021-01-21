export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const FAVORITE_HANDLER = 'FAVORITE_HANDLER';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const ADD_USER = 'ADD_USER';

export const fetchUsers = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_USERS_REQUEST });

		try {
			const userList = [];
			const data = require('../data/data.json');
			for (let i = 0; i < data.length; i++) {
				userList.push(data[i]);
			}
			dispatch({
				type: FETCH_USERS_SUCCESS,
				payload: userList
			});
		} catch (error) {
			dispatch({
				type: FETCH_USERS_ERROR,
				payload: {
					error: error.message
				}
			});
		}
	};
};

export const starHandler = (id) => {
	return (dispatch, getState) => {
		const newStore = getState().content.usersList.map((item) => {
			if (item.id === id) {
				item.favorite = !item.favorite;
			}
			return item;
		});
		dispatch({
			type: FAVORITE_HANDLER,
			payload: newStore
		});
	};
};

export const changeLanguage = () => {
	return (dispatch) =>
		dispatch({
			type: CHANGE_LANGUAGE
		});
};

export const addUser = (user) => {
    return (dispatch, getState) => {
        const usersList = getState().content.usersList;
        usersList.push({
            ...user, 
            id: usersList.length,
            image: "sheep",
        });
		dispatch({
            type: ADD_USER,
            payload: usersList
		});
    }
};
