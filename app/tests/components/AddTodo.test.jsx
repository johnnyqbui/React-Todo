import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import { AddTodo } from 'components/AddTodo';

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	})

	it('should dispatch ADD_TODO when valid todo entered', () => {
		const todoText = 'Get coffee';
		const action = {
			type: 'ADD_TODO',
			text: todoText
		}
		const spy = expect.createSpy();
		const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
		const $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should not dispatch ADD_TODO when invalid todo entered', () => {
		const todoText = '';
		const spy = expect.createSpy();
		const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
		const $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled('');
	});
});