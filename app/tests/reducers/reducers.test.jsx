import expect from 'expect';
import * as reducers from 'reducers/reducers'

// Deep freeze to ensure reducers are pure functions
import df from 'deep-freeze-strict';

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			const action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'search this'
			}
			const res = reducers.searchTextReducer(df(''), df(action));
			expect(res).toEqual(action.searchText);
		})
	})

	describe('showCompletedReducer', () => {
		it('should be toggled showCompleted', () => {
			const action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			}
			const res = reducers.showCompletedReducer(df(false), df(action));
			expect(res).toBe(true);
		})
	})

	describe('todosReducer', () => {
		it('should add new todo', () => {
			const action = {
				type: 'ADD_TODO',
				text: 'complete testing'
			}
			const res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		})

		it('should toggle todo', () => {
			const todos = [{
				id: 1,
				text: 'something',
				completed: true,
				createdAt: 1,
				completedAt: 2
			}]

			const action = {
				type: 'TOGGLE_TODO',
				id: 1
			}

			const res = reducers.todosReducer(df(todos), df(action));
			expect(res[0].completed).toEqual(false);
			expect(res[0].completedAt).toEqual(undefined);
		})

		it('should add existing todos', () => {
			const todos = [{
				id: '5',
				test: 'something',
				completed: false,
				completedAt: undefined,
				createdAt: 6
			}];

			const action = {
				type: 'ADD_TODOS',
				todos
			};

			const res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);
		})
	})
})