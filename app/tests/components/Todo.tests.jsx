var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); 	//dependente do que foi definido no file webpack.config.js
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

//.......... Permitir agrupar vários testes e denominá-los;
/*
describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});
	
});	
*/