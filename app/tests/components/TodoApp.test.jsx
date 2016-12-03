import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import TodoApp from 'TodoApp';

describe('TodoApp', ()=> {
	it('should exist', ()=> {
		expect(TodoApp).toExist();
	});

	it('should add todo to the todos state on handleAddTodo', () => {
		const todoText = 'test text';
		const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	})

	it('should toggle completed when handleToggle called', () => {
		const todoData = {
			id: 10,
			text: 'tester',
			completed: false
		}
		const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({
			todos: [todoData]
		})

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(10);
		expect(todoApp.state.todos[0].completed).toBe(true);
	})
});