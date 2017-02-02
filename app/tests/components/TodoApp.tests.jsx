var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); 	//dependente do que foi definido no file webpack.config.js
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

//.......... Permitir agrupar vários testes e denominá-los;

describe('TodoApp', () => {
	//..............
	it('TodoApp should exist', () => {
		expect(TodoApp).toExist();
	});
	//.............. Lec. 94
	it('KKKKKKKKKKKKKKKKK   should add todo to the todos state on handleAddTodo', () => {
		//expect(TodoApp).toExist();
		var  todoText = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({ todos: [] });
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});
	//..............	
});
	