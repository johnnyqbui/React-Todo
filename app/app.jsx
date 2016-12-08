import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'components/TodoApp';
import * as actions from 'actions/actions';
import { Provider } from 'react-redux';
import { configure } from 'store/configureStore';
const store = configure();

store.subscribe(() => {
	console.log('New State', store.getState());
})

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

