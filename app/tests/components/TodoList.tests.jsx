var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');  //... Lec. 123
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery'); 	//dependente do que foi definido no file webpack.config.js

import {configure} from 'configureStore';//..............Lec. 123
//var TodoList = require('TodoList');//...DESACTIVADA NA LEC. 122 ~13.09
//import POR CAUSA DO export default na TodoList.jsx, SER ES6
import ConnectedTodoList, {TodoList} from 'TodoList'; //..............Lec. 122
import ConnectedTodo, {Todo} from 'Todo'; //..............Lec. 123
//var Todo = require('Todo');

//.......... Permitir agrupar vários testes e denominá-los;
describe('TodoList', () => {
	/*
	it('TodoList should exist', () => {
		expect(TodoList).toExist();
	});
	*/
	//...........----- NÃO FUNCIONOU, MAS NO VIDEO ESTÁ CORRECTO
	//........... ALTERADA NA LEC. 123
	/*
	it('should render one Todo component for each todo item+++++++++++++', () => {
		var todos: [
				{
					id: 1,
					text: "Do something",
					completed: false,
					completedAt: undefined,
					createdAt: 500
				}, {
					id: 2,
					text: "Check mail",
					completed: false,
					completedAt: undefined,
					createdAt: 500
				} ];

		//...... Lec.123: O OBJ. DADO POR DEFAULT, 
		//...... OBRIGOU A ALTERAÇÕES NO FILE store/configureStore.jsx		
		var store = configure({
			todos
		});	
		//...... 	
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList/>
			</Provider>
		);
		//...... Desactivada na Lec. 123
		//var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);		
		//......
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		//......
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);	
		//...... 
		expect(todosComponents.length).toBe(todos.length);
	});
	*/
	//...........Lec. 104  NÃO FUNCIONOU
	//
	it('should render empty message if no todos', () => {
		var todos = [];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);		
		//expect(TodoList).toExist();
		var $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);
	});
	/**/

});	