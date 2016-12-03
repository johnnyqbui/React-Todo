import React, { Component } from 'react';

class AddTodo extends Component{
	onSubmit(e) {
		e.preventDefault();
		let todoText = this.refs.todoText.value;
		if (todoText.length > 0) {
			this.refs.todoText.value = '';
			this.props.onAddTodo(todoText);
		} else {
			// Focus back on input field if empty
			this.refs.todoText.focus();
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" placeholder="What do you need to do?" ref="todoText"/>
					<button className="button expanded">Add</button>
				</form>
			</div>
		)
	}
}

module.exports = AddTodo;