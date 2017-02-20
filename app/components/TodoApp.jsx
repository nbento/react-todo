var React = require('react');
var uuid = require('node-uuid');	//Lec. 93, após instalar a dependência com o node (npm install node-uuid --save-dev)
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoAPI = require('TodoAPI'); 	//Lec. 97
/*
//require('./redux-example.jsx');
var redux = require('redux');
//var axios = require('axios');
//............Lec. 117 Redux
var actions = require('./../actions/actions');
var store   = require('./../store/configureStore').configure();
var unsubscribe = store.subscribe(()=>{
	var state = store.getState();

	console.log('SUBSCRIBE »»» searchText:::', state.searchText);
	console.log('SUBSCRIBE »»» SHOWCOMPLETED:::', state.showCompleted);
	console.log('========================');
	//document.getElementById('app').innerHTML = state.name;

	//console.log('New state', store.getState());
	//.............. Lec. 115	
});
*/
var TodoApp = React.createClass({
	//............
	getInitialState: function()
	{
		return {
			showCompleted : false,  //store.dispatch(actions.getCompleted(false)),  	//  true | false
			searchText: '', 		//store.dispatch(actions.changeText('')), 			//string
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
	componentDidUpdate: function()
	{
		console.log('****************COMPONENTDIDUPDATE');
		TodoAPI.setTodos(this.state.todos);
	},
	/*componentWillReceiveProps: function()
	{
		console.log('-------------------componentWillReceiveProps');
	},*/
	//............		
	handleAddTodo: function(text)
	{
		console.log('TodoApp  »»»  handleAddTodo text:::' + text);
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
		//console.log('TodoApp  »»»  handleSearch searchText:::' + searchText );
		var texto = searchText; 		//store.dispatch(actions.changeText(searchText.toLowerCase()));
		var completed = showCompleted;  //store.dispatch(actions.getCompleted(showCompleted));
		
		this.setState({ 
						showCompleted: 	completed,//showCompleted, 
						searchText: 	texto//searchText.toLowerCase()
					});
		this.componentDidUpdate();	
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
		/* 
		return (
				<div>
					<TodoSearch onSearch={this.handleSearch}/>
					<TodoList todos={filteredTodos}  onToggle={this.handleToggle} />
					<AddTodo handleAddTodo={this.handleAddTodo} />
				</div>
			)
		*/	
		//.......... 
		return (
				<div>
					<h1 className="page-title">Todo App</h1>

					<div className="row">
							<div className="column small-centered small-11 medium-6 large-5">
								<div className="container">
										<TodoSearch onSearch={this.handleSearch}/>
										<TodoList todos={filteredTodos}  onToggle={this.handleToggle} />
										<AddTodo handleAddTodo={this.handleAddTodo} />
								</div>
							</div>	
					</div>
				</div>
			)	
	}
});

module.exports = TodoApp;