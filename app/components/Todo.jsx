import React, { Component } from 'react';

class Todo extends Component{
	render(){
		const {id, text} = this.props;
		return (
			<div>
				{id}. {text}
			</div>
		)
	}
}

module.exports = Todo;