var React = require('react');
var uuid = require('node-uuid');	//Lec. 93, após instalar a dependência com o node (npm install node-uuid --save-dev)
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoAPI = require('TodoAPI'); 	//Lec. 97



var TodoApp = React.createClass({
	//............
	getInitialState: function()
	{
		return {
			showCompleted : false,  	//  true | false
			searchText: '', 			//string
			todos: TodoAPI.getTodos() 	//Lec. 97, Substitui o array de objectos
			/*todos: [
				{
					id: uuid(),
					text: "Walk the dog",
					completed: false
				},
				{
					id: uuid(),
					text: "Clan the yard",
					completed: true
				},
				{
					id: uuid(),
					text: "Leave mail on porch",
					completed: true
				},
				{
					id: uuid(),
					text: "Play video games",
					completed: false
				}
			]*/
		}
	},
	//............Lec. 97		
	componentDidUpdate: function(text)
	{
		TodoAPI.setTodos(this.state.todos);
	},
	//............		
	handleAddTodo: function(text)
	{
		//console.log('TodoApp  »»»  handleAddTodo text:::' + text);
		this.setState({
			todos: [
				...this.state.todos,	//com o spread operator, incluir os já existentes;
				{						//adicionar o novo todo
					id: uuid(),
					text: text,
					completed: false, 	//NOVO ELEMENTO, DEVE TER false, não completado
					createdAt: moment().unix(),  //Lec. 102
					//recebe valor no handleToggle, quando altera a checkbox;
					completedAt: undefined  //Lec. 102
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
	//............ from TodoList »»» from Todo (Alterações checkbox)
	//............ NO VIDEO 95, APENAS ENVIA O ID, FUNCIONA PORQUE SÓ EXISTEM 2 VALORES POSSÍVEIS
	//............ MAS NÃO É CORRECTO, VER NOTAS EM Sec.08 Lect.95
	handleToggle: function(id, valor)
	{
		//console.log("TodoApp »»» id:::" + id + " | valor:::" + valor);

		//......... Alterar valor nos todos
		var total = this.state.todos.length;
		var todosAux = this.state.todos.map(function(todo)
		{
			if(todo.id === id)
			{
				console.log("TodoApp onChangeTodo »»» todos_.id === id!!!");
				todo.completed = valor;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}	

			return todo;
		});
		/*	console.log("TodoApp »»» todosAux total:::" + todosAux.length );

			for (var i = 0; i < total; i++) 
			{
				var todos_ = todosAux[i];
				//console.log("TodoApp onChangeTodo »»» todos_:::" + todos_.id);
				if(todos_.id === id)
				{
					console.log("TodoApp onChangeTodo »»» todos_.id === id!!!");
					todos_.completed = valor;
				}	
			}
		*/
		//......... 
		this.setState({todos: todosAux});
	},
	//............		
	render: function()
	{
		//var {todos} = this.state;
		//var {todos, showCompleted, searchText} = this.state;
    	//var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		//.......... Lec. 99 (Filter todos)
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		//.......... 
		return (
				<div>
					<TodoSearch onSearch={this.handleSearch}/>
					<TodoList todos={filteredTodos}  onToggle={this.handleToggle} />
					<AddTodo handleAddTodo={this.handleAddTodo} />
				</div>
			)
	}
});

module.exports = TodoApp;