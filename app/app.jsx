import React from 'react';
import redux, { createStore, compose } from 'redux';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'components/TodoApp';
import * as actions from 'actions/actions';
import reducer from 'store/configureStore'

let store = createStore(reducer, compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

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
	<TodoApp />,
	document.getElementById("app")
)

