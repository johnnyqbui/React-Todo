export const setTodos = (todos) => {
	if (Array.isArray(todos)) {
		// stringify to store
		localStorage.setItem('todos', JSON.stringify(todos));
		return todos;
	}
}

export const getTodos = () => {
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

export const filterTodos = (todos, showCompleted, SearchText) => {
	let filteredTodos = todos;

	// Filter by showCompleted
	filteredTodos = filteredTodos.filter((todo) => {
		return !todo.completed || showCompleted;
	})

	// Filter by searchText
	filteredTodos = filteredTodos.filter((todo) => {
		const text = todo.text.toLowerCase();
		return text.indexOf(SearchText) >= 0;
	})

	// Sort incompleted Todos first
	filteredTodos.sort((a,b)=> {
		if (!a.completed && b.completed) return -1;
		if (a.completed && !b.completed) return 1;
	})
	return filteredTodos;
}
