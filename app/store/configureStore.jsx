import { combineReducers } from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer } from 'reducers/reducers';

export default combineReducers({
	searchText: searchTextReducer,
	showCompleted: showCompletedReducer,
	todos: todosReducer
})