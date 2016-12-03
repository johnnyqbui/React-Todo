import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import AddTodo from 'AddTodo';

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	})

	it('should call onAddTodo if valid input entered', () => {
		const spy = expect.createSpy();
		const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
		const $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = 'Play video games';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith('Play video games');
	});

	it('should not call onAddTodo if invalid input entered', () => {
		const spy = expect.createSpy();
		const addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>)
		const $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled('');
	});
});