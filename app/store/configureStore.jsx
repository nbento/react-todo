//............Lec. 117
//............ Lec. 123 ~03.30 	initialState »»» ALT. FEITA POR CAUSA DO TESTE,
//............ NO FILE TodoList.tests.jsx	
var redux = require('redux');
//var thunk = require('redux-thunk').default;   //ADICIONAR EMBAIXO: redux.applyMiddleware(thunk), ... 

//var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

//............//	initialState={} »»» Lec. 123 ~03.30 (VER NOTAS NO TOPO)	
export var configure = (initialState={}) =>
{
	var reducer = redux.combineReducers({
		searchText : 	searchTextReducer,
		showCompleted : showCompletedReducer,
		todos : 		todosReducer
	});
	////redux.applyMiddleware(thunk),
	//	initialState »»» Lec. 123 ~03.30 (VER NOTAS NO TOPO)	 
	var store = redux.createStore(reducer, initialState, redux.compose(
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
