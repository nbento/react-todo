//Lec. 97
var $ = require('jquery');

module.exports = {
	setTodos: function(todos)
	{
		//if it is a array, set value
		if($.isArray(todos))
		{
			//JSON.stringify(array) //takes an array, converts to string,
			//Utilizado neste caso, porque o 2º param. tem de ser também string;
			localStorage.setItem('todos', JSON.stringify(todos));

			return todos;
		}
		//if it is not an array, do nothing
	},
	//..........
	getTodos: function()
	{
		//Fetch values
		//if it is an array
		//case true, get values
		//..........
		var stringTodos = localStorage.getItem('todos');
		var todos = [];
		//.....
		// JSON.parse, convert string to array (reverso do JSON.stringify),
		//mas pode dar erros, por isso usa-se try/catch
		try {
			//ERROR    todos.JSON.parse(stringTodos);
			todos = JSON.parse(stringTodos);
		} catch (e) {

		}
		//.....
		/*if($.isArray(todos))
			{
				return todos;
			}else{
				return [];
			}
		*/
		//..... ou:
		return $.isArray(todos)  ?  todos  :  [];
	},
	//..........Usada na TodoApp.jsx, render
	filterTodos: function(todos, showCompleted, searchText)
	{
		var filteredTodos = todos;
		
		//......... Filter by showCompleted
		/*	filteredTodos = filteredTodos.filter( (todo) => {
				//se  a prop completed == false, o elemento é mantido no array
				return !todo.completed || showCompleted;
			});
		*/
		//......... Filter by searchText (Lec. 100)
			/*
				updatedList = updatedList.filter(
                  function(item)
                  {
                      return item.toLowerCase().search(
                                event.target.value.toLowerCase()) !== -1;    
                  }
              );
              this.setState({items: updatedList});
			*/
			filteredTodos = filteredTodos.filter( (todo) => {
				//console.log("TodoAPI.jsx  searchText::::::::::::::::::" + searchText);
				var text = todo.text.toLowerCase();
				return searchText.length === 0 || text.indexOf(searchText) > -1;
 				//return text.search(searchText) !== -1;
			});

		//......... Sort todos with non-completed first (Lec. 100)
			//method .sort: doesn't return new array, mo
			//......... Objectivo: se prop completed = false, devem aparecer 1º;
		/*	filteredTodos.sort( (a, b) => {
				//......... se a for false e b for true, deve ser 1º
				if(!a.completed && b.completed)
				{
					return -1
				//......... se a for true e b for false, deve ser 2º	
				}if(a.completed && !b.completed)
					return 1
				else {
					return 0 
				}
			}); 
		*/	
		

		return filteredTodos;
	}
	//..........
};