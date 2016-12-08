import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'components/TodoApp';
import * as actions from 'actions/actions';
import { Provider } from 'react-redux';
import { configure } from 'store/configureStore';
import * as TodoApi from 'api/TodoApi';
const store = configure();

store.subscribe(() => {
	const state = store.getState();
	console.log('New State', state);
	TodoApi.setTodos(state.todos);
})

const initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos))

// Load Foundation
$(document).foundation();

// App.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store = { store }>
		<TodoApp/>
	</Provider>,
	document.getElementById("app")
)

