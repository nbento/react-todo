var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var uuid = require('node-uuid');	//Lec. 93, após instalar a dependência com o node (npm install node-uuid --save-dev)

var TodoApp = React.createClass({
	//............
	getInitialState: function()
	{
		return {
			showCompleted : false,  //  true | false
			searchText: '', 		//string
			todos: [
				{
					id: uuid(),
					text: "Walk the dog"
				},
				{
					id: uuid(),
					text: "Clan the yard"
				},
				{
					id: uuid(),
					text: "Leave mail on porch"
				},
				{
					id: uuid(),
					text: "Play video games"
				}
			]
		}

	},
	//............		
	handleAddTodo: function(text)
	{
		console.log('TodoApp  »»»  handleAddTodo text:::' + text);
		this.setState({
			todos: [
				...this.state.todos,	//com o spread operator, incluir os já existentes;
				{						//adicionar o novo todo
					id: uuid(),
					text: text
				}
			]
		})
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