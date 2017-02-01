var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	//............
	getInitialState: function()
	{
		return {
			showCompleted : false,  //  true | false
			searchText: '', 		//string
			todos: [
				{
					id: 1,
					text: "Walk the dog"
				},
				{
					id: 2,
					text: "Clan the yard"
				},
				{
					id: 3,
					text: "Leave mail on porch"
				},
				{
					id: 4,
					text: "Play video games"
				}
			]
		}

	},
	//............		
	handleAddTodo: function(text)
	{
		console.log('TodoApp  »»»  handleAddTodo text:::' + text);
	},	
	//............ TodoSearch callback		
	handleSearch: function(showCompleted, searchText)
	{
		console.log('TodoApp  »»»  handleSearch searchText:::' + searchText );
		this.setState({ 
						showCompleted: 	showCompleted,
						searchText: 	searchText.toLowerCase()
					});
	},	
	//............		
	render: function()
	{
		var {todos} = this.state;

		return (
				<div>
					<TodoSearch onSearch={this.handleSearch}/>
					<TodoList todos={todos}/>
					<AddTodo handleAddTodo={this.handleAddTodo} />
				</div>
			)
	}
});

module.exports = TodoApp;