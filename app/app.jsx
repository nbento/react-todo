var React 		= require('react');
var ReactDOM 	= require('react-dom');
var {Provider} 	= require('react-redux');	//Lec. 121
//var {Route, Router, IndexRoute, hashHistory} = require('react-router'); //...... DESACTIVADA NA LEC. 144
var {hashHistory} = require('react-router'); //Route e os outros elementos estão em 'router/index.jsx'
//........... Alt. na Lec. 143
//import TodoApp from 'TodoApp'; 	
//var TodoApp 	= require('TodoApp');
//........... Lec. 126
//var TodoAPI = require('TodoAPI');   //...... DESACTIVADA NA LEC. 144

//...... Lec. 142
//import Login from 'Login';   //...... DESACTIVADA NA LEC. 144
//var Main 	= require('Main'); //...... DESACTIVADA NA LEC. 144
//import './../playground/firebase/index';  //.......... Lec. 127  DESACTIVADA NA LEC. 133
console.log('************************** APP.JSX!!!');
//..........
var actions = require('actions');
var store = require('configureStore').configure();	
//.......... Lec. 144
import firebase from 'app/firebase/';	
import router from 'app/router/'; 		//.......... Lec. 144  ~14.00
//...... NO VIDEO, ESTA PARTE FICOU AQUI,
//...... MAS É CORRECTO ESTAR NO router/index.jsx,
//...... PORQUE REUNE OS ELEMENTOS DO ROUTER 
//...... VOLTOU PARA AQUI, PARA TESTES, NA LEC. 145 NÃO FAZ LOGIN NO CHROME ???
firebase.auth().onAuthStateChanged((user)=>{
	if(user)
	{
		console.log('+++ ***** APP.JSX  .onAuthStateChanged user:::'+user);
		store.dispatch(actions.login(user.uid));  	//Lec. 145,  ~04.03
		store.dispatch( actions.startAddTodos() );  //Lec. 146
		
		hashHistory.push('/todos');
	}else{
		console.log('--- ***** APP.JSX  .onAuthStateChanged !user:::'+user);
		store.dispatch(actions.logout());  			//Lec. 145,  ~04.03
		hashHistory.push('/');
	}
});


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

//...... LEC. 137
////......Alt. Lec. 146 Como a base de dados tem verificações de segurança,
//não deve ser accionada aqui...
//store.dispatch( actions.startAddTodos() );


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
//...... CÓDIGO DA LEC. 144 PASSOU PARA O FILE router/index.jsx
//.......... Lec. 144
//'this is react router midleware, allow for async. code...'
//EM CONJUNTO COM O METHOD 'onEnter', DE UMA 'Route',
//(neste caso é o Route com component={TodoApp}),
//verifica se o login foi efectuado, 
/*var requireLogin = (nextState, replace, next) => {
	//no login, go back to the root of the app
	if( !firebase.auth().currentUser)
	{
		replace('/');
	}
	next();
}
//.......... Lec. 144
//SE ESTÁ LOGGADO, IR DIRECTO PARA OS TODOS
var redirectIfLoggedIn = (nextState, replace, next) => {
	//login, go directly to todos
	if( firebase.auth().currentUser)
	{
		replace('/todos');
	}
	next();
}
*/
//..........Lec. 121 Provider, ALTERADO NA LEC. 144
/*
ReactDOM.render( 
			<Provider store={store}>

				<Router history={hashHistory} >
					<Route path="/" component={Main}>
						<Route path="todos" 	component={TodoApp} onEnter={requireLogin} />
			  			<IndexRoute component={Login} onEnter={redirectIfLoggedIn}  /> 
			  		</Route>			
				</Router>
			</Provider>,

  			document.getElementById('app')
);
*/
//...... Lec. 144, retirado o Router para o file router/index.js
ReactDOM.render( 
	<Provider store={store}>
		{router}
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
