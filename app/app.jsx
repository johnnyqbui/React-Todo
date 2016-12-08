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

store.dispatch(actions.addTodo('Complete react app'));
store.dispatch(actions.setSearchText('react'));
store.dispatch(actions.toggleShowCompleted());

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

