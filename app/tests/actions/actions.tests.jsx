//.......... Lec. 134
	import configureMockStore from 'redux-mock-store';
	import thunk from 'redux-thunk';

//.......... Lec. 117
var expect = require('expect');
var actions = require('actions');

//.......... Lec. 134
//recebe 1 parameter, um array 'midleware'
var createMockStore = configureMockStore([thunk]);

//.......... 
describe('Actions', ()=>
{
	//.......... 
	it('Should generate search text action', ()=>
	{
		var action = {
			type: 'SEARCH_TEXT',
			searchText: 'Some search text'	
		};

		var res = actions.searchText(action.searchText);

		expect(res).toEqual(action);
	});
	//..........ANTES DA LEC. 134
	/* 
	it('Should generate add todo action', ()=>
	{
		var action = {
			type: 'ADD_TODO',
			text: 'Thing to do'	 		
		};

		var res = actions.addTodo(action.text);

		expect(res).toEqual(action);
	});
	*/
	//..........LEC. 134 COM FIREBASE
	it('Should generate add todo action', ()=>
	{
		var action = {
			type: 'ADD_TODO',
			todo: {		
					id: 'abc123', 			//uuid(),
					text: "SOMETHING TO DO", 	//action.text,
					completed: 	false,
					createdAt: '0' 	//moment().unix(),  	//Lec. 102
					//completedAt: undefined  	//Lec. 102
				}	 		
		};

		var res = actions.addTodo(action.todo);

		expect(res).toEqual(action);
	});
	//..........LEC. 134 COM FIREBASE
	//foi instalado um module para poder criar este teste, redux-mock-store,
	//porque o código a testar tem uma componente ASYNC;
	it('Should create todo and dispatch ADD_TODO', (done)=>{
		const store = createMockStore({});
		const todoText = 'My todo item';

		store.dispatch(actions.startAddTodo(todoText)).then(()=>{
			const actions = store.getActions();
			expect(actions[0]).toInclude({
				type: 'ADD_TODO'
			});

			expect(actions[0].todo).toInclude({
				text: todoText
			});

			done();

		}).catch(done);

	});//...it('Should create todo and dispatc...
	
	//..........Lec. 126  
	it('Should generate add todos action object', ()=>
	{
		var todos = [{
			id:'111',
			text:'anything',
			completed: false,
			completedAt: 'undefined',
			createdAt: 330000
		}];

		var action = {
			type: 'ADD_TODOS',
			todos	
		};

		var res = actions.addTodos(todos);

		expect(res).toEqual(action);
	});
	//.......... 
	it('Should generate toggle show completed action', ()=>
	{
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'	
		};

		var res = actions.toggleShowCompleted();

		expect(res).toEqual(action);
	});
	//..........
	it('Should generate toggle  todo action', ()=>
	{
		var action = {
			type: 'TOGGLE_TODO',
			id: '123'	 		
		};

		var res = actions.toggleTodo(action.id);

		expect(res).toEqual(action);
	});
	//..........
	/*	it('should generate toggle todo action', () => {
		    var action = {
		      type: 'TOGGLE_TODO',
		      id: '123'
		    };
		    var res = actions.toggleTodo(action.id);

		    expect(res).toEqual(action);
		  });*/ 
	//.......... 
});//...describe