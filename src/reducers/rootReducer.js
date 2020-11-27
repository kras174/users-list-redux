import { combineReducers } from 'redux';
import { contentReducer } from './contentReducer';
import filterReducer from './filterReducer';

export const rootReducer = combineReducers({
	content: contentReducer,
	filter: filterReducer
});
