import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component{
	constructor(props) {
		super(props)
		this.state = {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: 1,
					text: "Walk the dog"
				},
				{
					id: 2,
					text: "Clean the house"
				},
				{
					id: 3,
					text: "Implement Mern Stack"
				},
				{
					id: 4,
					text: "Feel the MERN"
				}
			]
		}
	}

	handleAddTodo(text) {
		console.log("add", text, typeof text)
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
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
			</div>
		)
	}
}

module.exports = TodoApp;