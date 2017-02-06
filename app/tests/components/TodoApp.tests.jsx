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

		//.............//Lec. 102
		//expect createAt toBe a number   //expect(2).toBeA('number')
		expect(todoApp.state.todos[0].createAt).toBeA('number');
	});
	
	//.............. Lec. 96
	it('************should toggle completed value when handleToggle called************', () => {
		var  todoData = {
			id: 11,
			text: 'Test features',
			completed: false,
			createAt: 0,			//Lec. 102
			completedAt: undefined  //Lec. 102
		}

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);	
		expect(todoApp).toExist();
		todoApp.setState({ todos: [todoData] });
		
		todoApp.handleToggle(11, true);
		expect(todoApp.state.todos[0].completed).toBe(true);
		
		//.............//Lec. 102
		//expect completedAt toBe a number
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
		
	});
	//.............. Lec. 102
	//Test that when toggle true to false, completeAt get removed
	it('************should toggle todo completed to incompleted************', () => {
		var  todoData = {
			id: 11,
			text: 'Test features',
			completed: true,
			createAt: 0,			//Lec. 102
			completedAt: 123  //Lec. 102
		}

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);	
		
		todoApp.setState({ todos: [todoData] });
		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleToggle(11, false);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toNotExist();
		
	});
	//..............	
});
	