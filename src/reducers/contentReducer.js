import {
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_ERROR,
	FAVORITE_HANDLER,
	CHANGE_LANGUAGE,
    ADD_USER,
    DELETE_USER,
    SAVE_USER,
} from '../actions/contentActions';
import { SORT_BUTTON_CLICK, DIRECTION_BUTTON_CLICK } from '../actions/sortActions';

const initialState = {
	usersList: [],
	isFetching: false,
	isEnglish: false,
	sortType: '',
	sortDirection: 'Forward',
	error: ''
};

export function contentReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				isFetching: false,
				usersList: action.payload
			};
		case FETCH_USERS_ERROR:
			return {
				...state,
				isFetching: false,
				error: action.payload.error
			};
		case FAVORITE_HANDLER:
			return { ...state, usersList: action.payload };
		case SORT_BUTTON_CLICK:
			return { ...state, sortType: action.payload };
		case DIRECTION_BUTTON_CLICK:
			return { ...state, sortDirection: action.payload };
		case CHANGE_LANGUAGE:
			return { ...state, isEnglish: !state.isEnglish };
		case ADD_USER:
            return { ...state, usersList: action.payload };
        case DELETE_USER:
            return { ...state, usersList: action.payload };
        case SAVE_USER:
            const usersList = state.usersList;
            usersList[action.payload.id] = action.payload;

            return { ...state, usersList: [...state.usersList] };
        default:
        return state;
	}
}
