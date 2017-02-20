//lEC. 114, Action Generators
//Actions passam a ser dadas por functions
console.log('START REDUX!');
//............
var redux = require('redux');
//var axios = require('axios');
//............
var actions = require('./actions/index');
var store   = require('./store/configureStore').configure();

//var store = require('./store/configureStore');

//............
//REDUCER
//PURE FUNCTION  //AUTOMATICALLY CALLED BY REDUX  //MUST HAVE 2 ARGUMENTS:
	//state »»» EXISTING STATE, BEFORE THE ACTION GETS TRIGGER
	//action
//............
/* 
var stateDefault = {
	name: '',
	hobbies: [],
	movies: []	
}*/
//............ Lec. 111 Vars Externas usadas no reducer (??? Pure Functions Problem???)
//var nextHobby   = 1;
//var nextMovieId = 1;

//............ REDUCERS
//............ REDUCERS
/*	
	var reducerOld = (state = stateDefault, action) => {	

		//console.log('New Action', action); 
		switch (action.type)
		{
			case 'CHANGE_NAME' :
				return { 			//Tem de ser nesta forma, porque tem de ser uma 'PURE FUNCTION'
					...state,
					name: action.name
				};
			case 'ADD_HOBBY' :

				return {
						...state,
						hobbies: [ 			
							...state.hobbies,
							{
								id: nextHobby++,
								hobby: action.hobby
							}
						]
					}

			case 'REMOVE_HOBBY' :
				return {
						...state,
						hobbies: state.hobbies.filter((item) =>  item.id !== action.id  ) 		
				}			
			case 'ADD_MOVIE' :
				return {
						...state,
						movies: [ 			
							...state.movies,
							{
								id: nextMovieId++,
								title: action.title,
								genre: action.genre
							}
						]
					}		
			case 'REMOVE_MOVIE' :
				return {
						...state,
						movies: state.movies.filter((item) =>  item.id !== action.id ) 		
				}		
			default:
				return state;	
		}

		//return state; //Na Lec. 109, passou para o switch
	}
	//............Lec. 113 
	var nameReducer = (state = 'Anonymous', action) => {
		switch(action.type)
		{
			case 'CHANGE_NAME':
				return action.name;
			default:
				return state;	
		}
	}
	//............Lec. 113 
	var hobbiesReducer = (state = [], action) => {
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
	//............Lec. 113 
	var moviesReducer = (state = [], action) => {
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
	//............Lec. 115  
	var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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
	//............ COMBINEREDUCERS  Lec. 113 
	var reducer = redux.combineReducers({
		name : nameReducer,
		hobbies: hobbiesReducer,
		movies: moviesReducer,
		map: mapReducer 		//............Lec. 115  
	});	
*/	
//............ REDUCERS
//............ REDUCERS   END!


//............ DEBUGG

var unsubscribe = store.subscribe(()=>{
	var state = store.getState();

	//console.log('Name is', state.name);
	//document.getElementById('app').innerHTML = state.name;

	//console.log('New state', store.getState());
	//.............. Lec. 115
	/*
	if(state.map.isFetching)
	{
		document.getElementById('app').innerHTML = 'loading...';
	}else if (state.map.url){
		document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Location</a>';
	}
	*/
	console.log('========================');
});

//............
//unsubscribe();
//............ 



//............ ACTIONS
//............ ACTIONS
/*	//............ ACTION GENERATORS
	
	//............ ACTION GENERATORS Lec. 115
		var startLocationFetch = () => 	//Lec. 115
		{
			return {
				type: 'START_LOCATION_FETCH'
			}
		}
		var completeLocationFetch = (url) => 	//Lec. 115
		{
			return {
				type: 'COMPLETE_LOCATION_FETCH',
				url 
			}
		}
		var fetchLocation = () => 	//Lec. 115
		{
			store.dispatch( startLocationFetch() );

			axios.get('http://ipinfo.io').then(function(res)
			{
				//dados do site, mas em 2017.02 está diferente;
				//http://ipinfo.io/developers
				//
				//	{
				//	  "ip": "203.205.28.14",
				//	  "hostname": "static.cmcti.vn",
				//	  "city": "Ho Chi Minh City",
				//	  "region": "Ho Chi Minh City",
				//	  "country": "VN",
				//	  "loc": "10.8142,106.6438",
				//	  "org": "AS45903 CMC Telecom Infrastructure Company"
				//	}
				
				var loc = res.data.loc;   //loc  »  UMA DAS PROPS DO OBJ. ENVIADO DO SITE;
				var baseUrl = 'http://maps.google.com?q=';

				store.dispatch( completeLocationFetch( baseUrl+loc ) );
			})
		}

	//............ ACTION GENERATORS	
	//..............
	var changeName = function(name)
	{
		return {
			type: 'CHANGE_NAME',
			name 		//Isto é igual a ter name : name
		}
	}
	var addHobby = function(hobby)
	{
		return {
			type: 'ADD_HOBBY',
			hobby 		
		}
	}
	var removeHobby = function(numero)
	{
		return {
			type: 'REMOVE_HOBBY',
			id: numero 		
		}
	}
	var addMovie = function(title, genre)
	{
		return {
			type: 'ADD_MOVIE',
			title,
			genre 		
		}
	}
	var removeMovie = function(numero)
	{
		return {
			type: 'REMOVE_MOVIE',
			id: numero 		
		}
	}
*/	
	//............ STORE.DISPATCH
	console.log('REDUX-EXAMPLE.JSX....................');
		
		//antes da Lec. 116
			//actions.fetchLocation();  //DÁ ERRO PORQUE UTILIZAVA UM 'store' e não devolve um obj
										//Solução: instalar 'thunk' e adaptar a func. fetchLocation
		//depois da Lec. 116
			//store.dispatch(actions.fetchLocation()); 	//com 	'thunk'

	//console.log('....................changeName(Andrew)');
//		store.dispatch(actions.changeName('Andrew')); //Lec. 114
/*	console.log('....................addHobby(Running)');
		store.dispatch(actions.addHobby('Running'));
	console.log('....................addHobby(Walking)');
		store.dispatch(actions.addHobby('Walking'));
	console.log('....................removeHobby(2)');
		store.dispatch(actions.removeHobby(2));
	console.log('....................changeName(Emily)');
		store.dispatch(actions.changeName('Emily')); //Lec. 114
	console.log('....................addMovie(Mad Max,Action)');
		store.dispatch(actions.addMovie('Mad Max',"Action"));
	console.log('....................addMovie(Star Wars,Science Fiction)');
		store.dispatch(actions.addMovie('Star Wars',"Science Fiction"));
	console.log('....................removeMovie(1)');
		store.dispatch(actions.removeMovie(1)); 
*/		
	//............ ACTION Lec. 109 //Lec. 114 passou para uma Action Generator Func.
	//............ ACTIONS OLD, BEFORE ACTION GENERATORS
		/*var action = {
			type: 'CHANGE_NAME', 		//action Name; by convention, written in uppercase with underscores
			name: 'mice'
		}*/
		//............ Lec. 109
		//store.dispatch(action);
	 	//............
		/*store.dispatch({
			type: 'ADD_HOBBY', 		
			hobby: 'Running'
		});*/
	 	//............
		/*store.dispatch({
			type: 'CHANGE_NAME', 		//action Name; by convention, written in uppercase with underscores
			name: 'Rato'
		});*/
	 	//............
		/*store.dispatch({
			type: 'ADD_HOBBY', 		
			hobby: 'Walking'
		});*/
	 	//............
		/*store.dispatch({
			type: 'REMOVE_HOBBY', 		
			id: 2
		});*/
	 	//............
		/*store.dispatch({
			type: 'ADD_MOVIE', 		
			title: 'Mad Max',
			genre: "Action"
		});*/ 
	 	//............
		/*store.dispatch({
			type: 'ADD_MOVIE', 		
			title: 'Star Wars',
			genre: "Science Fiction"
		});*/
	 	//............
		/*store.dispatch({
			type: 'REMOVE_MOVIE',  		
			id: 1
		});*/
 	//............
//............ ACTIONS
//............ ACTIONS   END!