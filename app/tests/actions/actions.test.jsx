import expect from 'expect';
const actions = require('actions')

describe('Actions', () => {
	it('should generate search text action', () => {
		const action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'some text'
		}
		const res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	})

	it('should generate add todo action', () => {
		const action = {
			type: 'ADD_TODO',
			text: 'Do tests'
		}
		const res = actions.addTodo(action.text);

		expect(res).toEqual(action);
	})

	it('should generate toggle show complete action', () => {
		const action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}
		const res = actions.toggleShowCompleted();

		expect(res).toEqual(action);
	})

	it('should generate toggle todo action', () => {
		const action = {
			type: 'TOGGLE_TODO',
			id: 1
		}
		const res = actions.toggleTodo(action.id);

		expect(res).toEqual(action);
	})
})