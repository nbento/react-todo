//............
//Lec. 118
//............
var expect = require('expect');
var df = require('deep-freeze-strict');   //Lec.118

var reducers = require('reducers');

//.......... 
describe('Reducers', ()=>
{
	//.......... 
	describe('searchTextReducer', ()=>
	{
		it('Should set searchText', ()=>
		{
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'Dog'	
			};
			var res = reducers.searchTextReducer(df(''), df(action));
			//var res = reducers.searchTextReducer('', action);
			expect(res).toEqual(action.searchText);
		});
		//..........
	});
	//.......... Test that the showCompleted status gets flipped
	//.......... 
	describe('showCompletedReducer', ()=>
	{
		it('Should toggle showCompleted**********************', ()=>
		{
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};
			var res = reducers.showCompletedReducer(df(false), df(action));
			//var res = reducers.showCompletedReducer(false, action);
			expect(res).toBe(true);
			//...ou expect(res).toEqual(true);
		});
		//..........
		
	});
	//.......... 
	describe('todosReducer', ()=>
	{
		it('Should add new todo---------------------', ()=>
		{
			var action = {
				type: 'ADD_TODO',
				text: "Walk the dog" 	//action.text,  		
				//{
							//O ÚNICO QUE É ADCIONADO PELA ACTION É O text,
							//OS RESTANTES, NÃO PRECISAM DE PARAMETERS
							//id: 		'123', //uuid(),
 							//completed: 	false,
							//createdAt: '2017.02.21', //moment().unix(),  	//Lec. 102
 							//completedAt: undefined  		//Lec. 102
				//		}
			};
			//...
			var res = reducers.todosReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
			//...
		});
		//..........
		//defined todos array with realistic item
		//generate action
		//call reducer and assert 
		it('Should toggle todo ------------------------------------', ()=>
		{
			//......
			var todos = [{
 					id: 		'123', 		//uuid(),
 					text: "Something", 		//action.text,  		//
					completed: 	true,
 					createdAt: '123', //moment().unix(),  	//Lec. 102
					completedAt: 125  
			}];
			//......
			var action = {
				type: 'TOGGLE_TODO',
 				id: '123' 			//uuid(),	
			};
			//......
			var res = reducers.todosReducer(df(todos), df(action));
			
			expect(res[0].completed).toEqual(false);
			//expect(res[0].completedAt).toEqual(undefined);
 			//......
		});
	});
	//..........

	//..........
});	 
	