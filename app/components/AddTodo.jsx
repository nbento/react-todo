var React = require('react');

var AddTodo = React.createClass({
	//...........
	handleSubmit: function(e)
	{
		e.preventDefault();

		var todoText = this.refs.todoText.value;

		console.log('AddTodo  handleSubmit todoText:::'+todoText);
		if(todoText.length > 0)
		{
			this.refs.todoText.value='';
			this.props.handleAddTodo(todoText);
		} else {
			//DEVOLVE O FOCO DE VOLTA AO INPUTTEXT FIELD
			this.refs.todoText.focus();
		}	
	},
	//...........
	render: function()
	{
		return (
					<div className="container__footer">
						<form onSubmit={this.handleSubmit}>
							<input 
								ref="todoText"
								type="text" 
								placeholder="What you need to do?" />
							<button className="button expanded">Add Todo</button>
						</form>
					</div>
			)
	}
});

module.exports = AddTodo;