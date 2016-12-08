import React, { Component } from 'react';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';
import TodoSearch from 'components/TodoSearch';
import TodoApi from 'api/TodoApi';
import uuid from 'uuid';
import moment from 'moment';

class TodoApp extends Component{
	constructor(props) {
		super(props)
		this.state = {
			showCompleted: false,
			searchText: '',
			todos: TodoApi.getTodos()
		}
	}

	componentDidUpdate() {
		TodoApi.setTodos(this.state.todos);
	}

	handleAddTodo(text) {
		this.setState({
			todos: [
				...this.state.todos,
			{
				// Universal Id, timestamped unique id
				id: uuid(),
				text: text,
				completed: false,
				createdAt: moment().unix(),
				completedAt: undefined
			}]
		})
	}

	handleToggle(id) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}

			return todo;
		})

		this.setState({
			todos: updatedTodos
		});
	}

	handleSearch(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	}

	render() {
		const { todos, showCompleted, searchText, createdAt } = this.state;
		const filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
		return (
			<div>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<TodoSearch onSearch={this.handleSearch.bind(this)}/>
							<TodoList todos={filteredTodos} onToggle={this.handleToggle.bind(this)}/>
							<AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
						</div>
					</div>
				</div>


			</div>
		)
	}
}

module.exports = TodoApp;