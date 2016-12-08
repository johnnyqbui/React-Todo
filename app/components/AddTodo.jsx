import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/actions';

export class AddTodo extends Component{
	onSubmit(e) {
		e.preventDefault();
		const { dispatch } = this.props;
		let todoText = this.refs.todoText.value;

		if (todoText.length > 0) {
			this.refs.todoText.value = '';
			dispatch(actions.addTodo(todoText));
		} else {
			// Focus back on input field if empty
			this.refs.todoText.focus();
		}
	}

	render() {
		return (
			<div className="container__footer">
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" placeholder="What do you need to do?" ref="todoText"/>
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		)
	}
}

export default connect()(AddTodo);