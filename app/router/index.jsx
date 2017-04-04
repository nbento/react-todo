//...... Lec. 144 ~10.30
import React from 'react';
import {Route, Router, IndexRoute, hashHistory}  from 'react-router';
import TodoApp from 'TodoApp';//...... Alt. na Lec. 143 	
import Login from 'Login';
import firebase from 'app/firebase';


var requireLogin = (nextState, replace, next) => {
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
//......
export default (
	<Router history={hashHistory} >
		<Route path="/">
			<Route path="todos" component={TodoApp} onEnter={requireLogin}/>
			<IndexRoute component={Login} onEnter={redirectIfLoggedIn}/> 
		</Route>			
	</Router>
);