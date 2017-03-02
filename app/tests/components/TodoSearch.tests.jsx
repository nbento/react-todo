var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery'); 	//dependente do que foi definido no file webpack.config.js
var TestUtils = require('react-addons-test-utils');

//var TodoSearch = require('TodoSearch');//DESACTIVADA NA LEC. 125, AO ADICIONAR REDUX
import {TodoSearch} from 'TodoSearch';   //LEC. 125

//.......... Permitir agrupar vários testes e denominá-los;

describe('TodoSearch ++++++++++++*******************', () => {
	
	it('TodoSearch  should exist', () => {
		expect(TodoSearch).toExist();
	});
	it('should dispatch SET_SEARCH_TEXT on input change-----------------', () => {
	    var searchText = 'Dog';
	    var action = {
	      type: 'SEARCH_TEXT',
	      searchText
	    };
	    var spy = expect.createSpy();
	    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

	    todoSearch.refs.searchText.value = searchText;
	    TestUtils.Simulate.change(todoSearch.refs.searchText);

	    expect(spy).toHaveBeenCalledWith(action);
	  });
	//............... //ALTERAÇÕES NA LEC. 125
	/*it('it should DISPATCH SEARCH_TEXT ON INPUT CHANGE', () => {
		var searchText = 'Dog';
		var action = {
			type: 'SEARCH_TEXT',
			searchText 
		}
		var spy = expect.createSpy();
		//.......... render to document, como está na TodoApp
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
		
		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change( todoSearch.refs.searchText );

		expect(spy).toHaveBeenCalledWith(action);
	});*/
	//...............
	it('it should DISPATCH TOGGLE_SHOW_COMPLETED when checbox checked', () => {
		
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}
		var spy = expect.createSpy();
		//.......... render to document, como está na TodoApp
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoSearch));

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change( todoSearch.refs.showCompleted );

		expect(spy).toHaveBeenCalledWith(action);
	});
	
	//...............
});	