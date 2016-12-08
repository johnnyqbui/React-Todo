import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from 'components/Todo';

export class TodoList extends Component{
	render() {
		const {todos} = this.props;
		const renderTodos = () => {
			if (todos.length === 0) {
				return (
					<p className="container__message">Nothing to do</p>
				)
			}
			return todos.map((todo) => {
				return (
					// Spread operator
					<Todo key={todo.id} {...todo} />
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

// Set props for TodoList wit connect
export default connect(
	(state) => {
		return {
			todos: state.todos
		}
	}
)(TodoList);