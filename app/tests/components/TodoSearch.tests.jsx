var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); 	//dependente do que foi definido no file webpack.config.js
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

//.......... Permitir agrupar vários testes e denominá-los;

describe('TodoSearch ++++++++++++*******************', () => {
	/*
	it('TodoSearch  should exist', () => {
		expect(TodoSearch).toExist();
	});
	//...............
	it('TodoSearch  it should call onSearch with entered input text', () => {
		
		var searchText = 'Dog';
		var spy = expect.createSpy();
		//.......... render to document, como está na TodoApp
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoSearch));

		todoSearch.refs.searchText.value = searchText;

		//TestUtils.Simulate.change($el.find('input')[0]);		//também funciona!!!
		TestUtils.Simulate.change( todoSearch.refs.searchText );

		expect(spy).toHaveBeenCalledWith(false, searchText);
	});
	//...............
	it('_________________TodoSearch  it should call onSearch with proper checked value', () => {
		
		//var searchText = 'Dog';
		var spy = expect.createSpy();
		//.......... render to document, como está na TodoApp
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoSearch));

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change( todoSearch.refs.showCompleted );

		expect(spy).toHaveBeenCalledWith(true, '');
	});
	*/
	//...............
});	