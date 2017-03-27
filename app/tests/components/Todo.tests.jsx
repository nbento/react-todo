/*var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var {Todo} = require('Todo');
*/
//=============
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery'); 	//dependente do que foi definido no file webpack.config.js

import * as actions from 'actions';   //Lec. 136
import {Todo} from 'Todo'; 			//ES6
//var {Todo} = require('Todo'); 	//ES5
//import ConnectedTodo, {Todo} from 'Todo';
//.......... Permitir agrupar vários testes e denominá-los;

describe('Todo', () => {
	/*
	it('should exist', () => {
		expect(Todo).toExist();
	});
	*/
	//.............. Lec. 96
	//COMO ESTÁ DIFERENTE DO VÍDEO, DEVE FICAR:
	//should call handleCheckboxChange METHOD, with id, on change
	//onChange={this.handleCheckboxChange}
	//---------------------NÃO FUNCIONOU
	//Alterada na Lec. 122, por causa da utilização de Redux
	//it('************should call onToggle prop with id, on click************', () => {
	/*it('************should dispatched TOGGLE_TODO action on click************', () => {
		var  todoData = {
			id: 199,
			text: 'Write todo.test.jsx test',
			completed: true
		}
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);

		var $el = $(ReactDOM.findDOMNode(todo));
		 
		//TestUtils.Simulate.click($el[0]); 
		TestUtils.Simulate.change($el.find('input')[0]); //change por causa da forma diferente do video
		todo.handleCheckboxChange();
		//.............
		//expect(spy).toHaveBeenCalledWith(199, true);
		expect(spy).toHaveBeenCalledWith({
			type: 'TOGGLE_TODO',
			id: todoData.id
		});
		//.............
	});
	*/
	//=========================================================
	//NÃO FUNCIONA, VER NOTAS EM udemyReactNotas.txt, Lec. 122 
	/*	it('+++++++should dispatch TOGGLE_TODO action on click************************', () => {
			    var todoData = {
			      id: 199,
			      text: 'Write todo.test.jsx test',
			      completed: true
			    };
			    var spy = expect.createSpy();
			    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
			    var $el = $(ReactDOM.findDOMNode(todo));

			    TestUtils.Simulate.click($el[0]);

			    expect(spy).toHaveBeenCalledWith({
			      type: 'TOGGLE_TODO',
			      id: todoData.id
			    });
		});
	*/ 	
	//=========================================================
	//Lec. 136  - NÃO FUNCIONA
  //E COM O CÓDIGO ORIGINAL TAMBÉM FALHA;
	//Error: spy was never called with [ [Function] ]...
	/*	it('+++++++should dispatch TOGGLE_TODO action on click************************', () => {
			    var todoData = {
			      id: 199,
			      text: 'Write todo.test.jsx test',
			      completed: true
			    };

			    var action = actions.startToggleTodo(todoData.id, !todoData.completed);


			    var spy = expect.createSpy();
			    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
			    var $el = $(ReactDOM.findDOMNode(todo));

			    TestUtils.Simulate.click($el[0]);

			    expect(spy).toHaveBeenCalledWith(action);
		});
	*/	  		 
	//=========================================================
	
	
});//...describe('Todo'...	
