var React = require('React');

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
		var {text, id, completed} = this.props;
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
				<div>
					<input 
						type="checkbox" 
						defaultChecked={completed} 
						onChange={this.handleCheckboxChange}   /> {/*DIFERENTE DO VÍDEO*/}
					TEXT:::{text}
				</div>
			)
	}
});

module.exports = Todo;