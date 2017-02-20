//............
//Lec. 117
//............
//var nextHobby   = 1;
//var nextMovieId = 1;
//............REDUCERS
	export	var searchTextReducer = (state = '', action) => {
		switch(action.type)
		{
			case 'CHANGE_TEXT':
				return action.texto;
			default:
				return state;	
		}
	}

	export	var showCompletedReducer = (state = '', action) => {
		switch(action.type)
		{
			case 'GET_SHOW_COMPLETED':
				return action.completada;
			default:
				return state;	
		}
	}
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