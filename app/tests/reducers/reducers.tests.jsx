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
				type: 'SEARCH_TEXT',
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
		/*//..........ANTERIOR À LEC. 134
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
		*/
		//..........UPDATE NA LEC. 134
		it('Should add new todo---------------------', ()=>
		{
			var action = {
				type: 'ADD_TODO', 		
				todo: {		
					id: 'abc123', 			//uuid(),
					text: "SOMETHING TO DO", 	//action.text,
					completed: 	false,
					createdAt: '92384275' 	//moment().unix(),  	//Lec. 102
					//completedAt: undefined  	//Lec. 102
				}
			};
			//...
			var res = reducers.todosReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);
			//...
		});
		//..........DESACTIVADA NA LEC 136
		//defined todos array with realistic item
		//generate action
		//call reducer and assert 
		/*it('Should toggle todo ------------------------------------', ()=>
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
		});*/
		//..........LEC 136
		it('Should update todo ------------------------------------', ()=>
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
			var updates = {
				completed: false,
				completedAt: null	
			};
			//......
			var action = {
				type: 'UPDATE_TODO',
 				id: todos[0].id,
 				updates	
			};
			//......
			var res = reducers.todosReducer(df(todos), df(action));
			
			expect(res[0].completed).toEqual(updates.completed);
			expect(res[0].completedAt).toEqual(updates.completedAt);
			expect(res[0].text).toEqual(todos[0].text);
 			//......
		});
		//..........dá erro na lec. 134
		/*it('Should add existing todos ------------------------------------', ()=>
		{
			//......
			var todos = [{
				id:'111',
				text:'anything',
				completed: false,
				completedAt: undefined,
				createdAt: 33000
			}];
			//......
			var action = {
				type: 'ADD_TODOS',
				todos	
			};
			//......
			var res = reducers.todosReducer(df([]), df(action));
			//......
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);
 			//......
		});*/
		//...................DOS FILES ORIGINAIS LEC.133, mas também dá erro
		it('should add existing todos', () => {
	      var todos = [{
	        id: '111',
	        text: 'anything',
	        completed: false,
	        completedAt: undefined,
	        createdAt: 33000
	      }];
	      var action = {
	        type: 'ADD_TODOS',
	        todos
	      };
	      var res = reducers.todosReducer(df([]), df(action));

	      expect(res.length).toEqual(1);
	      expect(res[0]).toEqual(todos[0]);
	    });
	});
	//..........

	//..........
});	 
	