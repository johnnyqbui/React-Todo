import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import { TodoSearch } from 'components/TodoSearch';

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	})

	it('should dispatch SET_SEARCH_TEXT on input change', () => {
		const searchText = 'Clean';
		const action = {
			type: 'SET_SEARCH_TEXT',
			searchText
		}
		// Create spy variable;
		const spy = expect.createSpy();
		const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)

		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		// onSearch spy with arguments
		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox is checked', () => {
		const spy = expect.createSpy();
		const action = {
			type: 'TOGGLE_SHOW_COMPLETED',
		}
		const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(action);
	});
});