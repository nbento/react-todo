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

});	 
	