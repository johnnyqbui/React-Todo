import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import Todo from 'Todo';

describe('Todo', ()=> {
	it('should exist', ()=> {
		expect(Todo).toExist();
	});

	it('should call onToggle prop with id on click', () => {
		const todoData = {
			id: 20,
			text: 'testing',
			completed: true
		}
		const spy = expect.createSpy();
		const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
		const $el = $(ReactDOM.findDOMNode(todo));
		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith(20);
	})
});