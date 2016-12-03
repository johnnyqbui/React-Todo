import React, { Component } from 'react';

class TodoSearch extends Component {
	handleSearch() {
		// Checkbox checked
		const showCompleted = this.refs.showCompleted.checked;
		const searchText = this.refs.searchText.value;

		// Call onSearch for checked boxes or searched texts
		this.props.onSearch(showCompleted, searchText);
	}
	render() {
		return (
			<div>
				<div>
					<input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch.bind(this)}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" onChange={this.handleSearch.bind(this)}/>
						Show Completed
					</label>
				</div>
			</div>
		)
	}
}

module.exports = TodoSearch;