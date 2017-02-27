var React = require('react');
var {connect} = require('react-redux'); //Lec. 121

var actions = require('actions'); //Lec. 121 adicionar redux


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
		var {dispatch} = this.props;
		var showCompleted = this.refs.showCompleted.checked; 	//checkbox
		var searchText = this.refs.searchText.value; 			//inputtext

		 //this.props.onSearch(showCompleted, searchText);
		 //console.log('TodoSearch  handleSearch  searchText:::'+searchText);
		 dispatch(actions.searchText(searchText));
		 //dispatch(actions.toggleShowCompleted(showCompleted));
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
										
										onChange={this.handleSearch} />
								Show Completed todos		
						</label>
					</div>
			</div>)

	}
});

//module.exports = TodoSearch;		
module.exports = connect()(TodoSearch);  //Lec. 121		