import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import { configure } from 'store/configureStore';
import ConnectedTodoList, { TodoList } from 'components/TodoList';
import ConnectedTodo, { Todo } from 'components/Todo';

describe('TodoList', ()=> {
	it('should exist', ()=> {
		expect(TodoList).toExist();
	});

	it('should render one Todo component for each todo item', ()=>{
		const todos = [{
			id: 1,
			text: 'Do something',
			completed: false,
			completedAt: undefined,
			createdAt: 2
		}, {
			id: 2,
			text: 'Do something else',
			completed: false,
			completedAt: undefined,
			createdAt: 2
		}];

		const store = configure({
			todos
		})
		const provider = TestUtils.renderIntoDocument(
			<Provider store = {store}>
				<ConnectedTodoList/>
			</Provider>
		)
		const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

		expect(todoComponents.length).toBe(todos.length);
	})

	it('should render empty message if no todos', ()=>{
		const todos = [];
		const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		const $el = $(ReactDOM.findDOMNode(todoList));
		expect($el.find('.container__message').length).toBe(1);
	})
});