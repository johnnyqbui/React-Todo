import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'uuid';

class TodoApp extends Component{
	constructor(props) {
		super(props)
		this.state = {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: "Walk the dog",
					completed: false
				},
				{
					id: uuid(),
					text: "Clean the house",
					completed: true
				},
				{
					id: uuid(),
					text: "Implement Mern Stack",
					completed: false
				},
				{
					id: uuid(),
					text: "Feel the MERN",
					completed: false
				}
			]
		}
	}

	handleAddTodo(text) {
		this.setState({
			todos: [
				...this.state.todos,
			{
				// Universal Id, timestamped unique id
				id: uuid(),
				text: text,
				completed: false
			}]
		})
	}

	handleToggle(id) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
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
		const { todos } = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch.bind(this)}/>
				<TodoList todos={todos} onToggle={this.handleToggle.bind(this)}/>
				<AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
			</div>
		)
	}
}

module.exports = TodoApp;