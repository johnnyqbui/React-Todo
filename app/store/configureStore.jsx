import { combineReducers } from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

export default combineReducers({
	searchText: searchTextReducer,
	showCompleted: showCompletedReducer,
	todos: todosReducer
})