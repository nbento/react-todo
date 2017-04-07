//...... Lec. 144 ~10.30
import React from 'react';
import {Route, Router, IndexRoute, hashHistory}  from 'react-router';
import TodoApp from 'TodoApp';//...... Alt. na Lec. 143 	
import Login from 'Login';
import firebase from 'app/firebase';
//...... NO VIDEO, ESTA PARTE FICOU NA APP.JSX
//...... MAS É CORRECTO ESTAR AQUI,  REUNINDO OS 
//...... ELEMENTOS DO ROUTER
/*firebase.auth().onAuthStateChanged((user)=>{
	if(user)
	{
		console.log('+++ 000 ROUTER  .onAuthStateChanged user:::'+user);
		//store.dispatch(actions.login(user.uid));  	//Lec. 145,  ~04.03
		hashHistory.push('/todos');
	}else{
		console.log('--- 000 ROUTER  .onAuthStateChanged !user:::'+user);
		//store.dispatch(actions.logout());  			//Lec. 145,  ~04.03
		hashHistory.push('/');
	}
});
*/
//...... NO LOGIN, GO BACK TO THE ROOT OF THE APP
var requireLogin = (nextState, replace, next) => {
	if( !firebase.auth().currentUser)
	{
		replace('/');
	}
	next();
}
//....... Lec. 144
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
			<Route  	component={TodoApp}  onEnter={requireLogin}  path="todos"/>
			<IndexRoute component={Login} 	 onEnter={redirectIfLoggedIn}/> 
		</Route>			
	</Router>
);