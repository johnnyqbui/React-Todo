import expect from 'expect';
const reducers = require('reducers');
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
})