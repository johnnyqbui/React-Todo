module.exports = {
	setTodos(todos) {
		if (Array.isArray(todos)) {
			// stringify to store
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},

	getTodos() {
		const stringTodos = localStorage.getItem('todos');
		let todos = [];

		// Check if valid object
		try {
			todos = JSON.parse(stringTodos);
		} catch(e) {

		}

		// Check if array
		return Array.isArray(todos) ? todos : [];
	}
};