//............Lec. 117
//............ Lec. 123 ~03.30 	initialState »»» ALT. FEITA POR CAUSA DO TESTE,
//............ NO FILE TodoList.tests.jsx
//var redux = require('redux'); //DESACTIVADO NA LEC. 133
//var thunk = require('redux-thunk').default;   //ADICIONAR EMBAIXO: redux.applyMiddleware(thunk), ... 


import * as redux from 'redux';	//Lec. 133, após instalar redux-thunk
import thunk from 'redux-thunk';//Lec. 133, após instalar redux-thunk


//var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');
//var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers'); //DESACTIVADO NA LEC. 133
import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers'; //Lec. 133
//............//	initialState={} »»» Lec. 123 ~03.30 (VER NOTAS NO TOPO)	
export var configure = (initialState={}) =>
{
	var reducer = redux.combineReducers({
		searchText : 	searchTextReducer,
		showCompleted : showCompletedReducer, 
		todos : 		todosReducer,
		auth: authReducer 	 					//Lec. 145
	});
	////redux.applyMiddleware(thunk),
	//	initialState »»» Lec. 123 ~03.30 (VER NOTAS NO TOPO)	 
	var store = redux.createStore(reducer, initialState, redux.compose(
		redux.applyMiddleware(thunk), //Lec. 133 (...mas já tinha sido abordado antes)
		window.devToolsExtension  ?  window.devToolsExtension()  :  f => f
	));

	return store;
};
//............
/*
//var redux = require('redux');
//var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}; 
*/
