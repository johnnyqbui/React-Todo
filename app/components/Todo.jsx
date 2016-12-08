import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from 'actions/actions'

export class Todo extends Component{
	render(){
		const {id, text, completed, createdAt, completedAt, dispatch} = this.props;
		const todoClassName = completed ? 'todo todo-completed' : 'todo';
		const renderDate = () => {
			let message = 'Created ';
			let timeStamp = createdAt;

			if (completed) {
				message = 'Completed ';
				timeStamp = completedAt;
			}
			return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm: a');
		}
		return (
			<div className={todoClassName} onClick={() => {
				dispatch(actions.toggleTodo(id));
			}}>
				<div>
					<input type="checkbox" checked={completed}/>
				</div>
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		)
	}
}

// Set props for TodoList wit connect
export default connect()(Todo);