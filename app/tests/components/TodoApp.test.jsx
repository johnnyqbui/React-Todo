import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import { configure } from 'store/configureStore';
import TodoApp from 'components/TodoApp';
import TodoList from 'components/TodoList';

describe('TodoApp', ()=> {
	it('should exist', ()=> {
		expect(TodoApp).toExist();
	});

	it('should render TodoList', () => {
		const store = configure();
		const provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<TodoApp/>
			</Provider>
		)

		const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
		const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

		expect(todoList.length).toEqual(1);
	})
})