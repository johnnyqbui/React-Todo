import expect from 'expect';
import TodoApi from 'TodoApi';

describe('TodoApi', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	})

	it('should exist', () => {
		expect(TodoApi).toExist();
	})

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			const todos = [{
				id: 30,
				text: 'tester',
				completed: false
			}]
			TodoApi.setTodos(todos);
			const actualTodos = JSON.parse(localStorage.getItem('todos'));
			expect(actualTodos).toEqual(todos);
		})

		it('should not set invalid todos array', () => {
			const badTodos = {
				a: 'b'
			}
			TodoApi.setTodos(badTodos);
			expect(localStorage.getItem('todos')).toBe(null);
		})
	})

	describe('getTodos', () => {
		it('should return todo if valid array in localStorage', () => {
			const todos = [{
				id: 30,
				text: 'tester',
				completed: false
			}]
			localStorage.setItem('todos', JSON.stringify(todos));
			const actualTodos = TodoApi.getTodos();
			expect(actualTodos).toEqual(todos);
		})

		it('should return empty array for bad localStorage data', () => {
			const actualTodos = TodoApi.getTodos();
			expect(actualTodos).toEqual([]);
		})
	})

	describe('filterTodos', () => {
		const todos = [{
			id: 40,
			text: 'Testing here',
			completed: true
		}, {
			id: 41,
			text: 'Testing again',
			completed: false
		}, {
			id: 43,
			text: 'and again',
			completed: true
		}];

		it('should return all items if showCompleted is true', () => {
			const filteredTodos = TodoApi.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		})

		it('should return incompleted todos when showCompleted is false', () => {
			const filteredTodos = TodoApi.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		})

		it('should sort by completed status', () => {
			const filteredTodos = TodoApi.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(false)
		})

		it('should filter todos by searchText', () => {
			const filteredTodos = TodoApi.filterTodos(todos, true, 'here');
			expect(filteredTodos.length).toBe(1);
		})

		it('should return all todos if searchText is empty', () => {
			const filteredTodos = TodoApi.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		})
	})
})