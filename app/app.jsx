var React 		= require('react');
var ReactDOM 	= require('react-dom');
var {Provider} 	= require('react-redux');	//Lec. 121
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//........... Alt. na Lec. 143
import TodoApp from 'TodoApp'; 	
//var TodoApp 	= require('TodoApp');
//........... Lec. 126
var TodoAPI = require('TodoAPI'); 

//...... Lec. 142
//var Login 	= require('Login'); 
import Login from 'Login';
var Main 	= require('Main');
//import './../playground/firebase/index';  //.......... Lec. 127  DESACTIVADA NA LEC. 133

//..........
	var actions = require('actions');
	var store = require('configureStore').configure();	

	//...... DESACTIVADA NA LEC. 137
	//store.subscribe(()=>
	//{
	//	var state = store.getState();
	//	//console.log('New state.todos', state.todos);	
	//	//........... Lec. 126
	//	//TodoAPI.setTodos(state.todos);
	//	//console.log('New state  state.searchText:::', state.searchText);	
	//});
//..........Lec. 120, DESACTIVADAS NA Lec. 125
	//store.dispatch(actions.addTodo('Clean the yard'));
	//store.dispatch(actions.searchText('yard'));
	//store.dispatch(actions.toggleShowCompleted());
	
//..........Lec. 126  //...... DESACTIVADA NA LEC. 137
//...... SERVIA PARA OBTER INFO DA LOCALSTORAGE E ACTUALIZAR O STATE
//var initialTodos = TodoAPI.getTodos();
//store.dispatch( actions.addTodos(initialTodos) ); 

//......LEC. 137
store.dispatch( actions.startAddTodos() );


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

				<Router history={hashHistory} >
					<Route path="/" component={Main}>
						<Route path="todos" 	component={TodoApp} />
			  			<IndexRoute component={Login} /> 
			  		</Route>			
				</Router>
			</Provider>,

  			document.getElementById('app')
);
//..........
/*
			<Router history={hashHistory} >
				<Route path="/" component={Main}>
					<Route path="about" 	component={About} />
			  		<Route path="examples" 	component={Examples} />
			  		<IndexRoute component={Weather} /> 	
		  		</Route>
			</Router>,
*/
