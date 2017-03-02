//............
//Lec. 118
//............
var uuid = require('node-uuid');	//Lec. 93, após instalar a dependência com o node (npm install node-uuid --save-dev)
var moment = require('moment');
//............REDUCERS
	//............
	export	var searchTextReducer = (state = '', action) => {
		//action.someProp = "Ddddd";
		switch(action.type)
		{
			case 'SEARCH_TEXT':
				//console.log('SEARCH_TEXT   action.text:::'+action.text);
				//state = action.text;
				/*return (state)=>{
						state = action.text;
						return state;
					};
				*/	
				return action.searchText;
			default:
				return state;	
		}
	}
	//............showCompletedReducer, default false,TOGGLE_SHOW_COMPLETED
	export	var showCompletedReducer = (state = false, action) => {
		switch(action.type)
		{
			case 'TOGGLE_SHOW_COMPLETED':
				return !state;
			default:
				return state;	
		}
	}
	//............Lec. 119
	export var todosReducer = (state = [], action)=> {
		switch (action.type)
		{
			case 'ADD_TODO':
				return [
						...state,
						{
							//O ÚNICO QUE É ADICIONADO PELA ACTION 'ADD_TODO', É O text,
							//OS RESTANTES, NÃO PRECISAM DE PARAMETERS
							id: 		uuid(),
 							text: 		action.text,  		//"Walk the dog",
							completed: 	false,
							createdAt: moment().unix(),  	//Lec. 102
 							completedAt: undefined  		//Lec. 102
						}
				]
			//.........
			case 'TOGGLE_TODO':
				//========================
				return state.map((todo)=>
					{
						if(todo.id === action.id)
						{
						 	var nextCompleted = !todo.completed;
						 	//todo.completed = !todo.completed;

						 	return {
						 		...todo,
						 		completed: nextCompleted,
						 		completedAt: nextCompleted ? moment().unix():undefined
						 	}
						} else {
							return todo; //NECESSÁRIO PARA FUNCIONAR NO REDUCER,
										//NOS FILES ORIGINAIS ESTA LINHA NÃO EXISTIA,
										//FOI ADICIONADA NA LEC. 124, 06.36	 	
						}				
					});
									
			//.........		
			default: 
				return state;	
		}
	}
	//............
/*	
	//............
	export	var hobbiesReducer = (state = [], action) => {
		switch(action.type)
		{
			case 'ADD_HOBBY' :
				return  [ 			
							...state,
							{
								id: nextHobby++,
								hobby: action.hobby
							}
						]

			case 'REMOVE_HOBBY' :
				return state.filter((hobby) =>  hobby.id !== action.id  )

			default:
				return state;				
		}
	}
	//............
	export	var moviesReducer = (state = [], action) => {
		switch(action.type)
		{
			case 'ADD_MOVIE' :
				return  [ 			
							...state,
							
							{
								id: nextMovieId++,
								title: action.title,
								genre: action.genre
							}
						]

			case 'REMOVE_MOVIE' :
				return state.filter((movie) =>  movie.id !== action.id  )

			default:
				return state;				
		}
	}
	//............
	export	var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
		switch(action.type)
		{
			case 'START_LOCATION_FETCH' :
				return  {
							isFetching: true,
							url: undefined
				}

			case 'COMPLETE_LOCATION_FETCH' :
				return {
							isFetching: false,
							url: action.url
				}

			default:
				return state;				
		}
	}
*/	