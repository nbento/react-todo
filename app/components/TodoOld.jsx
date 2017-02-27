var React = require('react');
var {connect} = require('react-redux'); //Lec. 121 adicionar redux
var moment = require('moment');

var actions = require('actions'); //Lec. 121 adicionar redux
//export »»» Lec. 122
export var Todo = React.createClass({
	//...........
	/*handleCheckboxChange: function(e)
	{
		//e.preventDefault();

		//var valor = e.target.checked;  //this.refs.checkCompleted.checked; //
		//console.log( "000  TODO.jsx  »»»  numId:::" + this.props.numId ); 	//OK!	
		//console.log( "000  TODO.jsx  »»»  valor:::" + valor );

		//.............
			//console.log( "000  TODO.jsx  »»»  this.key:::" + this.key );   	//----- ???
			//SOLUÇÃO: NÃO UTILIZAR key
				//var {text, id, completed} = this.props;
				//console.log( "000  TODO.jsx  »»»  this.key id:::" + id );  

		//Desactivado na Lec. 121  
		//this.props.onToggle(this.props.numId, valor);

		//Lec. 121 adicionar redux
		//Este code está aqui, porque está diferente do original, em que existe um click event
		
		//var {dispatch, id} = this.props;
		//console.log('::::::::::::::::::::id:::'+id);
		//dispatch(actions.toggleTodo(id)); 
	},
	*/
	//...........
	render: function()
	{
		//.......... elementos enviados do parent, com o spread operator
		//.....Lec. 102, createdAt para o tempo, completedAt
		//...... Lec. 121 dispatch
		var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
		//consoante o valor de completed, insere uma class
		var todoClassName = completed  ?  'todo todo-completed'  :  'todo' ;   //Lec. 104;
		//.....Lec. 102
		var renderDate = () => {
			var message = 'Created ';
			var timestamp = createdAt;
			//SE COMPLETOU, MOSTRA OUTRA MENSAGEM
			if(completed)
			{
				message = 'Completed ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		}
		//console.log( "TODO.jsx  »»»  completed:::" + completed );
		//<li> COMPLETED::: {completed.toString()} | TEXT:::{text}</li>)
		//ref="checkCompleted"
		//defaultChecked={completed}    //IMPORTANTE: PARA QUANDO É ALTERÁVEL
		//..........
		/*return (
				    <div className={todoClassName} onClick={() => {
				          dispatch(actions.toggleTodo(id));
				    }}>
				        <div>
				          <input type="checkbox" checked={completed}/>
				        </div>
				        <div>
				          <p>{text}</p>
				          <p className="todo__subtext">{renderDate()}</p>
				        </div>
				    </div>
			    )
		*/	
		//..........
		return (
				    <div>
				        <div>
				          <input type="checkbox"/>
				        </div>
				        <div>
				          <p>{text}</p>
				          
				        </div>
				    </div>
			    )	
				
	}
});

export default connect()(Todo);    		//Lec. 122
//module.exports = connect()(Todo);     //Lec. 121