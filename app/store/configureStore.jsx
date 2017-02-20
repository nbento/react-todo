//............Lec. 117
//............
var redux = require('redux');
var thunk = require('redux-thunk').default;   //ADICIONAR EMBAIXO: redux.applyMiddleware(thunk), ... 

//var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');
var {searchTextReducer,showCompletedReducer} = require('./../reducers/index');

//............
export var configure = () =>
{
	var reducer = redux.combineReducers({
		searchText : searchTextReducer,
		showCompleted : showCompletedReducer
	});
			 
	var store = redux.createStore(reducer, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension  ?  window.devToolsExtension()  :  f => f
	));

	return store;
}
//............ 
