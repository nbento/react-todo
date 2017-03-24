var React = require('react');
var {connect} = require('react-redux');   //Lec. 121/124

var actions = require('actions'); //Lec. 121/124 adicionar redux

export var AddTodo = React.createClass({
	//...........
	handleSubmit: function(e)
	{
		e.preventDefault();

		var {dispatch} = this.props;
		
		var todoText2 = this.refs.todoText.value;

		console.log('AddTodo  handleSubmit todoText:::'+todoText2);
		if(todoText2.length > 0)
		{
			this.refs.todoText.value='';
			//this.props.onAddTodo(todoText2);
			//DESACTIVADA NA LEC. 133  
			//dispatch(actions.addTodo(todoText2));
			dispatch(actions.startAddTodo(todoText2));
		} else {
			//DEVOLVE O FOCO DE VOLTA AO INPUTTEXT FIELD
			this.refs.todoText.focus();
		}	
	},
	//...........
	render: function()
	{
		//var {dispatch} = this.props;
		return (
					<div className="container__footer">
						<form onSubmit={ this.handleSubmit}>
							<input 
								ref="todoText"
								type="text" 
								placeholder="What you need to doooooo?" />
							<button className="button expanded">Add Todo</button>
						</form>
					</div>
			)
	}
});

//.............module.exports = AddTodo;
//module.exports = connect()(AddTodo);
export default connect()(AddTodo);