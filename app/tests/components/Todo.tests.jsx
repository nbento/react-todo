var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); 	//dependente do que foi definido no file webpack.config.js
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

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
	/*
	it('************should call onToggle prop with id, on click************', () => {
		var  todoData = {
			id: 199,
			text: 'Todo Test features',
			completed: true
		}
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

		var $el = $(ReactDOM.findDOMNode(todo));
		 
		//TestUtils.Simulate.click($el[0]);
		TestUtils.Simulate.change($el.find('input')[0]);
		todo.handleCheckboxChange();

		expect(spy).toHaveBeenCalledWith(199, true);
		//.............
		
	});
	*/
	
});	
