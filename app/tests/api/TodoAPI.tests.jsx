//Lec. 98
var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe("TodoAPI", () => {
	//............. 
	//ESTE METHOD É UTILIZADO POR CAUSA DO LOCALSTORAGE;
	//SERVE PARA FAZER UM RESET PARA CADA TESTE;
	beforeEach( () => {
		localStorage.removeItem('todos');
	});
	//.............
	it("***************TodoAPI it should exist", () => {
		expect(TodoAPI).toExist();
	});	
	//.............DESACTIVADA NA LEC. 137 
	/*describe("++++++++++++++++setTodos", () => {
			//.............
			it('should set valid todos array', () => {
				var todos = [{
					id: 23,
					test: 'test all files',
					completed: false
				}];
				TodoAPI.setTodos(todos);
				var actualTodos = JSON.parse(localStorage.getItem('todos'));

				expect(actualTodos).toEqual(todos);
			});
			//.............
			it("should not set invalid todos array", () => {
				var badTodos = {a: 'b'};
				TodoAPI.setTodos(badTodos);
				expect(localStorage.getItem('todos')).toBe(null);
			});
			//.............		
	});
	//.............
	describe("++++++++++++++++getTodos", () => {
		//.............
		it('should return empty array for bad localStorage data', () => {
			var actualTodos = TodoAPI.getTodos();  //mas não existem 'todos' em memória
			//... e por isso devolve um array vazio
			expect(actualTodos).toEqual([]);
		});
		//.............
		it('should return todo if valid array in localStorage', () => {
			var todos = [{
					id: 23,
					test: 'test all files',
					completed: false
				}];
			localStorage.setItem('todos', JSON.stringify(todos));
			var actualTodos	= TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);	
		});
		//.............	
	});
	*/	
	//.............Lec. 99
	describe("filterTodos", () => {
		//.............
		var todos = [{
				id: 1,
				text: 'Some text here',
				completed: true
			},{
				id: 2,
				text: 'Other text here',
				completed: false
			},{
				id: 3,
				text: 'Some text here',
				completed: true		
			}];
		//.............	Lec. 99
		/*it("should return all items if showCompleted is true-----------------", () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});
		*/	
		//.............	Lec. 99
		/*it("should return non-completed todos when showCompleted is false-----------------", () => {
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		});*/	
		//.............	Lec. 100
		/*it("should sort by completed status", () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			//......... expect 1º element to have completed === true
			expect(filteredTodos[0].completed).toBe(false);
		});*/	
		//================
		//.............	Lec. 100 (~09.20)
		it("should filter todos by searchText*********************************", () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
			expect(filteredTodos.length).toBe(2);
		});	
		//.............	Lec. 100 (~09.20)
		it("should return all todos if searchText is empty", () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});	
		//.............	
	});//.............describe("filterTodos" END!		
});//.............describe("TodoAPI" END!