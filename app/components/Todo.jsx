var React = require('React');
var moment = require('moment');

var Todo = React.createClass({
	//...........
	handleCheckboxChange: function(e)
	{
		//e.preventDefault();

		var valor = e.target.checked;  //this.refs.checkCompleted.checked; //
		//console.log( "000  TODO.jsx  »»»  numId:::" + this.props.numId ); 	//OK!	
		//console.log( "000  TODO.jsx  »»»  valor:::" + valor );

		//.............
			//console.log( "000  TODO.jsx  »»»  this.key:::" + this.key );   	//----- ???
			//SOLUÇÃO: NÃO UTILIZAR key
				//var {text, id, completed} = this.props;
				//console.log( "000  TODO.jsx  »»»  this.key id:::" + id );  

		this.props.onToggle(this.props.numId, valor);
	},
	//...........
	render: function()
	{
		//.......... elementos enviados do parent, com o spread operator
		//.....Lec. 102, createdAt para o tempo, completedAt
		var {text, id, completed, createdAt, completedAt} = this.props;
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
		console.log( "TODO.jsx  »»»  completed:::" + completed );
		//<li> COMPLETED::: {completed.toString()} | TEXT:::{text}</li>)
		//ref="checkCompleted"
		//defaultChecked={completed}    //IMPORTANTE: PARA QUANDO É ALTERÁVEL
		//..........
		return (
				/*DO VÍDEO 95, 06.47
					<div onClick={ ()=>{
						this.props.onToggle(id);
					}}>
						<input type="checkbox" checked={completed}/>
						{text}
					</div>
				*/
				<div className={todoClassName}>
					<div>
						<input 
							type="checkbox" 
							defaultChecked={completed} 
							onChange={this.handleCheckboxChange}   /> {/*DIFERENTE DO VÍDEO*/}
					</div>	
					<div>
						<p>{text}</p>
						<p className="todo__subtext">{renderDate()}</p>
					</div>	
				</div>
			)
	}
});

module.exports = Todo;