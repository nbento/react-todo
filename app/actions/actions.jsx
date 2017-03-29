//............
//Lec. 133
import moment from 'moment';
import firebase, {firebaseRef} from 'app/firebase/index'; //ou só 'app/firebase/'
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
			searchText 		
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
	export	var addTodo = (todo)=>
	{
		return {
			type: 'ADD_TODO',
			todo		
		}
	}
	//............Lec. 133 04.55 (RETURN AN FUNCTION, NOT AN OBJECT)
	//USADA EM ADDTODO.JSX
	export var startAddTodo = (text)=>{
		console.log('STARTADDTODO!!!!!!!!!!!!!!!!!!!');
		return (dispatch, getState)=>{
			var todo = {
				//id: 		uuid(), 		//É DADO PELO FIREBASE
				text, 						//action.text,  		
				completed: 	false,
				createdAt: moment().unix(),  	
				completedAt: null 			//ALT. PARA FIREBASE   //undefined  		
			}
			var todoRef = firebaseRef.child('todos').push(todo);

			return todoRef.then(()=>{
					console.log('THEN OK  todoRef.key:::'+todoRef.key);
					dispatch(addTodo({
						...todo,
						id: todoRef.key
					}))
				
			})//....then
		}//...return (dispatch, getState)
	}
	//............Lec. 126
	export var addTodos = (todos)=>
	{
		//console.log('addTodos func.    todos:::' + todos);
		return {
			type: 'ADD_TODOS',
			todos 		
		}
	}
	//............Lec. 137, FETCH TODOS custom code
	/*export var addTodosInit = ()=>{
			return (dispatch, getState)=>{

				var todoRef = firebaseRef.child('todos').once('value');
				return todoRef.then((snapshot)=>{
						//......
						var elem;
						var todosArrayTemp = [];
						var todos = snapshot.val();
						var objKeys = Object.keys(todos);
						//console.log("objKeys TOTAL:::" + objKeys.length);
						//...... 	
						objKeys.forEach( function(key, index) 
						{
							//console.log(" | prop index:::" + index + " | key:::" + key + " | value:::" +todos[key]);
							elem = {	id:key,
										...todos[key]
									}
							todosArrayTemp.push(elem);
						});
						//......
						dispatch(addTodos(todosArrayTemp));
				})
			}		
	}*/
	//............Lec. 137, FETCH TODOS COMO ESTÁ NO VIDEO
	export var startAddTodos = ()=>{
		return (dispatch, getState)=>{
			var todoRef = firebaseRef.child('todos');
			
			return todoRef.once('value').then((snapshot)=>{
				//......
				var todos = snapshot.val()  ||  {};
				//OS DADOS DO FIREBASE PARA OS TODOS, ESTÃO NO FORMATO:
					//KsfwedsFrt: {
					//	completed: false,
					//	createAt: 1235422323,
					//	text: "some text..."
					//},
					//FrjkaWeds: ...
				//......	
				var parsedTodos = [];
				
				//......
				Object.keys(todos).forEach( (todoId) =>{
						//......
						//console.log("text:::"+todos[todoId].text);
 						parsedTodos.push({ 	id:todoId,
											...todos[todoId]
										});
				});
				//......
				dispatch(addTodos(parsedTodos));	
			})
		}
	}
	//............Lec. 117; DESACTIVADA NA LEC. 135
	/*export	var toggleTodo = (id)=>
	{
		return {
			type: 'TOGGLE_TODO',
			id 		
		}
	}*/
	//............ACTIVADA NA LEC. 135
	export	var updateTodo = (id, updates)=>
	{
		return {
			type: 'UPDATE_TODO',
			id,
			updates 		
		}
	}
	//............Lec. 135
	export	var startToggleTodo = (id, completed)=>{
		console.log('TOGGLETODO!!!!!!!!!!!!!!!!!!!');
		return (dispatch, getState)=>{
			
			//var todoRef = firebaseRef.child('todos').child(id).update({'completed':!completed});
			//var todoRef = firebaseRef.child('todos/'+id).update({'completed':!completed});
			var todoRef = firebaseRef.child(`todos/${id}`); //.update({'completed':!completed});
			var updates = {
				completed: completed,
				completedAt: completed  ?  moment().unix()  :  null
			}
			
			return todoRef.update(updates).then(()=>{
					console.log('THEN OK  toggleTodoFirebase id:::' + id);
					//dispatch(toggleTodo(id));
					dispatch(updateTodo(id, updates));
				
			})//....then
		}//...return (dispatch, getState)
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