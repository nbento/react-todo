//............Lec. 117
//............
var redux = require('redux');
//var thunk = require('redux-thunk').default;   //ADICIONAR EMBAIXO: redux.applyMiddleware(thunk), ... 

//var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

//............
export var configure = () =>
{
	var reducer = redux.combineReducers({
		searchText : 	searchTextReducer,
		showCompleted : showCompletedReducer,
		todos : 		todosReducer
	});
	////redux.applyMiddleware(thunk),		 
	var store = redux.createStore(reducer, redux.compose(
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
