import React, { Component } from 'react';
import moment from 'moment';

class Todo extends Component{
	render(){
		const {id, text, completed, createdAt, completedAt} = this.props;
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
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
			<input type="checkbox" checked={completed}/>
				<p>{text}</p>
				<p>{renderDate()}</p>
			</div>
		)
	}
}

module.exports = Todo;