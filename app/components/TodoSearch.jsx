var React = require('react');
var {connect} = require('react-redux'); //Lec. 121/125
var actions = require('actions'); //Lec. 121/125 adicionar redux


export var TodoSearch = React.createClass({
	//...........
	/*getDefaultProps: function()
	{
		return ({  
					onSearch: function(param1, param2) 
		})
	},*/
	//........... onChange no inputtext e na checkbox
	//DESACTIVADA NA LEC. 125, AO ADICIONAR REDUX
	//ERA USADA NO RENDER, ...onChange={this.handleSearch} 
	/*handleSearch: function()
	{
		var {dispatch} = this.props;
		var showCompleted = this.refs.showCompleted.checked; 	//checkbox
		var searchText = this.refs.searchText.value; 			//inputtext

		 //this.props.onSearch(showCompleted, searchText);
		 //console.log('TodoSearch  handleSearch  searchText:::'+searchText);
		 dispatch(actions.searchText(searchText));
		 //dispatch(actions.toggleShowCompleted(showCompleted));
	},*/
	//...........
	render: function()
	{
		var {dispatch, showCompleted, searchText} = this.props;

		return (<div className="container__header">
					<div>
						<input type="search" 
								ref="searchText"
								placeholder="Search todos"
								
								value={searchText}
								onChange={()=>{
									var searchText = this.refs.searchText.value;
									dispatch(actions.searchText(searchText));
								}}
						/>
					</div>

					<div>
						<label>
								<input type="checkbox" 
										ref="showCompleted"
										checked={showCompleted}
										onChange={()=>{
											dispatch(actions.toggleShowCompleted());
										}} 
								/>
								Show Completed todos		
						</label>
					</div>
			</div>)

	}
});

//module.exports = TodoSearch;		
//module.exports = connect()(TodoSearch);  //Lec. 121		
export default connect(
	(state)=>{
		return {
			showCompleted: 	state.showCompleted,
			searchText: 	state.searchText
		}
	}
)(TodoSearch);  //Lec. 125		