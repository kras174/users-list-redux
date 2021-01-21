export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const FAVORITE_HANDLER = 'FAVORITE_HANDLER';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const SAVE_USER = 'SAVE_USER';

export const fetchUsers = () => {
	return (dispatch, getState) => {
        if (getState().content.usersList.length > 0) return;

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
        const data = require('../data/data.json');
		const newUser = {
			...user,
            id: data.length,
            age: 30,
			image: 'sheep'
		};
		const newData = [...usersList, newUser];

		dispatch({
			type: ADD_USER,
			payload: newData
		});
	};
};

export const deleteUser = (id) => {
	return (dispatch, getState) => {
		const newData = getState().content.usersList.filter((item) => item.id !== id);

		dispatch({
			type: DELETE_USER,
			payload: newData
		});
	};
};

export const saveUser = (id, name, phone) => {
    return (dispatch, getState) => {
        const usersList = getState().content.usersList;
        const user = usersList[id];

        const newUserData = {...user, name, phone};

        dispatch({
			type: SAVE_USER,
			payload: newUserData
		});
    }
}
