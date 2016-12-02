import React, { Component } from 'react';
import TodoList from 'TodoList';

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
					text: "Complete React videos"
				},
				{
					id: 4,
					text: "Learn Mern Stack, FEEL THE MERN"
				}
			]
		}
	}

	render() {
		const { todos } = this.state;
		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		)
	}
}

module.exports = TodoApp;