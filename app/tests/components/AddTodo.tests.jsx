var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); 	//dependente do que foi definido no file webpack.config.js
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

//.......... Permitir agrupar vários testes e denominá-los;

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});
	//...............
	it('should call onAddTodo prop with valid data', () => {
		var todoText = 'Check mail';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);
	});
	//...............NR Lec 89, 17.00, transformação da anterior...
	it('should not call onAddTodo when invalid input', () => {
		var todoText = ''; 	//EMPTY STRING
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});	
