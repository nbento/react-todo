var React 		= require('react');
var ReactDOM 	= require('react-dom');
var {Provider} 	= require('react-redux');	//Lec. 121
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp 	= require('TodoApp');

var TodoAPI = require('TodoAPI'); //........... Lec. 126

//import './../playground/firebase/index';  //.......... Lec. 127  DESACTIVADA NA LEC. 133

//..........
	var actions = require('actions');
	var store = require('configureStore').configure();	

	store.subscribe(()=>
	{
		var state = store.getState();
		console.log('New state.todos', state.todos);	
		//........... Lec. 126
		//TodoAPI.setTodos(state.todos);
		//console.log('New state  state.searchText:::', state.searchText);	
	});
//..........Lec. 120, DESACTIVADAS NA Lec. 125
	//store.dispatch(actions.addTodo('Clean the yard'));
	//store.dispatch(actions.searchText('yard'));
	//store.dispatch(actions.toggleShowCompleted());
//..........Lec. 126
//var initialTodos = TodoAPI.getTodos();
//store.dispatch( actions.addTodos(initialTodos) );

//store.dispatch( actions.addTodosInit() );


//Load foundation (CARREGA UM FILE CSS DIRECTA/ NUM FILE JSX(!!!))  (Lec.51 ~10:00)
//css! »»» 'by default the require doesn't know how to load a css file'; FORMA QUE PERMITE AO REQUIRE LOADAR UM CSS  
//style! »»» FORMA QUE injectar o css file no HTML
//require('style!css!foundation-sites/dist/foundation.min.css'); //Retirar: Lec.83 Alt. para SASS Foundation
$(document).foundation();

//alias em webpack.config.js
require('style!css!sass!applicationStyles');
//<Route path="countdown" component={Countdown} />
//<IndexRoute path="timer" component={Timer} />

//<TodoApp/>,  <p>Boilerplate 3</p>
/*
ReactDOM.render( 
			<TodoApp/>,
  			document.getElementById('app')
);
*/
//..........Lec. 121 Provider
ReactDOM.render( 
			<Provider store={store}>
				<TodoApp/>
			</Provider>,
  			document.getElementById('app')
);
