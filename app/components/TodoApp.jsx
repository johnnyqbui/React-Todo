import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends Component{
	constructor(props) {
		super(props)
		this.state = {
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

	render() {
		const { todos } = this.state;
		return (
			<div>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
			</div>
		)
	}
}

module.exports = TodoApp;