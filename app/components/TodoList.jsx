import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from 'components/Todo';
import * as TodoApi from 'api/TodoApi';

export class TodoList extends Component{
	render() {
		const {todos, showCompleted, searchText} = this.props;
		const renderTodos = () => {
			if (todos.length === 0) {
				return (
					<p className="container__message">Nothing to do</p>
				)
			}
			return TodoApi.filterTodos(todos, showCompleted, searchText).map((todo) => {
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
		return state;
	}
)(TodoList);