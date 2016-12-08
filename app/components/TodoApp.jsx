import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';
import TodoSearch from 'components/TodoSearch';
import * as TodoApi from 'api/TodoApi';

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
							<TodoList/>
							<AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
						</div>
					</div>
				</div>


			</div>
		)
	}
}

export default TodoApp;