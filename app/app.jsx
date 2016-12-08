import React from 'react';
import redux, { createStore, compose } from 'redux';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'components/TodoApp';
import action from 'actions/actions';
import reducer from 'store/configureStore'

let store = createStore(reducer, compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

store.subscribe(() => {
	console.log('New State', store.getState());
})

store.dispatch(action.addTodo('Complete react app'));
store.dispatch(action.setSearchText('react'));
store.dispatch(action.toggleShowCompleted());

// Load Foundation
$(document).foundation();

// App.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<TodoApp />,
	document.getElementById("app")
)

