import React, { Component } from 'react';
import Todo from 'Todo';

class TodoList extends Component{
	render() {
		const {todos} = this.props;
		const renderTodos = () => {
			return todos.map((todo) => {
				return (
					// Spread operator
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
				)
			})
		};

		return (
			<div>
				{renderTodos()}
			</div>
		)
	}
}

module.exports = TodoList;