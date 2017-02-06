var React = require('react');

var TodoSearch = React.createClass({
	//...........
	/*getDefaultProps: function()
	{
		return ({  
					onSearch: function(param1, param2) 
		})
	},*/
	//........... onChange no inputtext e na checkbox
	handleSearch: function()
	{
		var showCompleted = this.refs.showCompleted.checked; 	//checkbox
		var searchText = this.refs.searchText.value; 			//inputtext

		 this.props.onSearch(showCompleted, searchText);
	},
	//...........
	render: function()
	{
		return (<div className="container__header">
					<div>
						<input type="text" 
								ref="searchText"
								placeholder="Search todos"
								onChange={this.handleSearch} />
					</div>

					<div>
						<label>
								<input type="checkbox" 
										ref="showCompleted"
										placeholder="Search todos"
										onChange={this.handleSearch} />
								Show Completed todos		
						</label>
					</div>
			</div>)

	}
});

module.exports = TodoSearch;		