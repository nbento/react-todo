var React = require('React');
var Todo = require('Todo');

var TodoList = React.createClass({
	//............
	//return (<li key={item.id} > ID::: {item.id} | TEXT:::{item.text}</li>)
	//............
	render: function()
	{
		var {todos} = this.props;
		var renderTodos = () => {
			return (
						todos.map((todo) =>
						{
							return (<Todo key={todo.id} {...todo} />)
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