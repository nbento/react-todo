//............
//Lec. 118
//............

//............REDUCERS
	export	var searchTextReducer = (state = '', action) => {
		//action.someProp = "Ddddd";
		switch(action.type)
		{
			case 'SET_SEARCH_TEXT':
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