//............
//Lec. 117
//............
//var axios = require('axios');

//............ ACTIONS
//............ ACTIONS
	//............ ACTION GENERATORS
	//.............. Lec. 117
	export	var searchText = (searchText)=>
	{
		return {
			type: 'SEARCH_TEXT',
			text: searchText 		
		}
	}
	//............
	export	var toggleShowCompleted = ()=>
	{
		return {
			type: 'TOGGLE_SHOW_COMPLETED'		
		}
	}
	//............Lec. 117
	export	var addTodo = (text)=>
	{
		return {
			type: 'ADD_TODO',
			text 		
		}
	}
	//............Lec. 117
	export	var toggleTodo = (id)=>
	{
		return {
			type: 'TOGGLE_TODO',
			id 		
		}
	}
	//............ ACTION GENERATORS Lec. 115
	//............ 
	/*//antes Lec. 116
	export	var fetchLocation = () => 	//Lec. 115
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
	*/
	//............DEPOIS DA Lec. 116, APÓS INSTALAR 'thunk' EM configureStore.jsx
	//UTILIZADA EM redux-example.jsx, store.dispatch(actions.fetchLocation());	
/*	export	var fetchLocation = () => 	
		{
			console.log('actions fetchLocation!!!!!!!!!');
			//FUNCIONA SEM O getState
			return ( dispatch, getState ) => 
			{

				dispatch( startLocationFetch() );

				axios.get('http://ipinfo.io').then(function(res)
				{
					//dados do site http://ipinfo.io/developers;
					//	{	  ...
					//	  "loc": "10.8142,106.6438",
					//	  ...
					//	}
					
					var loc = res.data.loc;   //loc  »  UMA DAS PROPS DO OBJ. ENVIADO DO SITE;
					var baseUrl = 'http://maps.google.com?q=';
					console.log('actions fetchLocation!!!!!!!!!');
					dispatch( completeLocationFetch( baseUrl+loc ) );
				})

			}	
		}
	//............ 

	//............ 	
	export	var startLocationFetch = () => 	//Lec. 115
		{
			return {
				type: 'START_LOCATION_FETCH'
			}
		}
	export	var completeLocationFetch = (url) => 	//Lec. 115
		{
			return {
				type: 'COMPLETE_LOCATION_FETCH',
				url 
			}
		}
	

	//............ ACTION GENERATORS	
	//..............
	export	var changeName = function(name)
	{
		return {
			type: 'CHANGE_NAME',
			name 		//Isto é igual a ter name : name
		}
	}
	export	var addHobby = function(hobby)
	{
		return {
			type: 'ADD_HOBBY',
			hobby 		
		}
	}
	export	var removeHobby = function(numero)
	{
		return {
			type: 'REMOVE_HOBBY',
			id: numero 		
		}
	}
	export	var addMovie = function(title, genre)
	{
		return {
			type: 'ADD_MOVIE',
			title,
			genre 		
		}
	}
	export	var removeMovie = function(numero)
	{
		return {
			type: 'REMOVE_MOVIE',
			id: numero 		
		}
	}
*/
//............
//module.exports = ;	