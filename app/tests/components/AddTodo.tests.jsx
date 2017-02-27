var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); 	//dependente do que foi definido no file webpack.config.js
var TestUtils = require('react-addons-test-utils');

//var AddTodo = require('AddTodo');
var {AddTodo} = require('AddTodo'); 		//Lec. 124

//.......... Permitir agrupar vários testes e denominá-los;

describe('AddTodo', () => {
	/**/
	it('should exist', () => {
		expect(AddTodo).toExist();
	});
	//...............Alt. na Lec. 124
	it('should dispatch ADD_TODO when valid todo text', () => {
		var todoText = 'Check mail';
		var action = {
			type: 'ADD_TODO',
			text: todoText
		}
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});
	
	//...............NR Lec 89, 17.00, transformação da anterior...
	//...............Alt. na Lec. 124
	
	it('should not dispatch ADD_TODO when invalid todo text', () => {
		var todoText = ''; 	//EMPTY STRING
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
	
});	
