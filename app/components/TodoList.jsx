var React = require('React');
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
		var renderTodos = () => {
			return (
						todos.map((todo) =>
						{
							return (<Todo numId={todo.id} 
											key={todo.id} {...todo} 
											onToggle={this.props.onToggle} 
									/>)
						})
 					)
		}
		//............
		return (
					<div>
						<ul>
							{renderTodos()}
						</ul>
					</div>
			)
	}
});

module.exports = TodoList;