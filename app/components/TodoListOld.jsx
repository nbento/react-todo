var React = require('react');
var {connect} = require('react-redux'); //Lec. 121 adicionar redux

var Todo = require('Todo');


var TodoList = React.createClass({
	//............
	
	//............ AL MUDAR O VALOR NA CHECKBOX TODO: (key | false/true)
	/*changeTodo: function(id, valor)
	{
		//console.log("TodoList »»» id:::" + id + " | valor:::" + valor);

		this.props.onChangeTodo(id, valor);
	},*/
	//............
	render: function()
	{
		////return (<li key={item.id} > ID::: {item.id} | TEXT:::{item.text}</li>)
		var {todos} = this.props;
		//console.log('todos:::'+todos);
		//.................
		var renderTodos = () => 
		{
			console.log('todos.length:::'+todos.length);
			if (todos.length === 0 )
			{
				return (<p className="container__message">Nothing To Do</p>)		
			}	
 			return (todos.map((todo) => {
							return (<Todo key={todo.id} {...todo} />) 					
						})
 					)		
		}
		
		return (
				<div>
					
						{renderTodos()}
					
				</div>
			)
	}
});

//module.exports = TodoList;
module.exports = connect(
	//forma de obter os dados do state, que interessam aqui
	(state)=>
	{
		return { 
			todos: state.todos   //faz com que em cima, var {todos} = this.props, PODE ACEDER A todos
		}
	}
)(TodoList); //Lec. 121 adicionar redux
//Permite aceder a dados sem precisar da hierarquia