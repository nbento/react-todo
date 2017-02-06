var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); 	//dependente do que foi definido no file webpack.config.js
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

//.......... Permitir agrupar vários testes e denominá-los;
describe('TodoList', () => {
	/*
	it('TodoList should exist', () => {
		expect(TodoList).toExist();
	});
	*/
	//...........----- NÃO FUNCIONOU, MAS NO VIDEO ESTÁ CORRECTO
	/*
	it('should render one Todo component for each todo item+++++++++++++', () => {
		var todos: [
				{
					id: 1,
					text: "Do something"
				}, {
					id: 2,
					text: "Check mail"
				} ];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);		
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);	

		expect(todosComponents.length).toBe(todos.length);
	});
	*/
	//...........Lec. 104  NÃO FUNCIONOU
	/**/
	it('should render empty message if no todos', () => {
		var todos = [];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);		
		//expect(TodoList).toExist();
		var $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);
	});
	/**/
});	