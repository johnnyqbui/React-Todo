import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import TodoSearch from 'components/TodoSearch';

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	})

	it('should call onSearch when input text', () => {
		const searchText = 'Clean'
		// Create spy variable;
		const spy = expect.createSpy();
		const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		// onSearch spy with arguments
		expect(spy).toHaveBeenCalledWith(false, searchText);
	});

	it('should call onSearch with checked box', () => {
		const spy = expect.createSpy();
		const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(true, '');
	});
});