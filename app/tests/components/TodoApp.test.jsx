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
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	})

	it('should toggle completed when handleToggle called', () => {
		const todoData = {
			id: 10,
			text: 'tester',
			completed: false,
			createdAt: 1,
			completedAt: undefined
		}
		const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({
			todos: [todoData]
		})

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(10);
		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].createdAt).toBe(1);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	})

	it('should toggle completed to incompleted when handleToggle called', () => {
		const todoData = {
			id: 10,
			text: 'tester',
			completed: true,
			createdAt: 1,
			completedAt: 2
		}
		const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({
			todos: [todoData]
		})

		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleToggle(10);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].createdAt).toBe(1);
		expect(todoApp.state.todos[0].completedAt).toBe(undefined);
	})
});