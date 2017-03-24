import firebase from 'firebase';
//...... Lec. 127
//================= Código obtido ao seleccionar: Add Firebase to your web app
var config = {
			    apiKey: "AIzaSyA8Z2fMqBhcD2bo3fvluuUdajIb-WsfNsQ",
			    authDomain: "mead-todo-app-9f124.firebaseapp.com",
			    databaseURL: "https://mead-todo-app-9f124.firebaseio.com",
			    storageBucket: "mead-todo-app-9f124.appspot.com",
			    messagingSenderId: "725802521480"
			};
				
firebase.initializeApp(config);
//================= 
var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: { 
		name: 'Todo App',
		version: '1.0.0'
	},	
	isRunning: true,
	user: {
		name: 'Andrew',
		age: 25,
		locations:{
			main: 'York',
			second:'London'
		}
	}
}).then( ()=>{
	console.log("set Worked");	
}, (e)=>{
	console.log("set Failed");
});

//...... Lec. 131

//...... .on ACTIVATED EVERYTIME THE DATABASE CHANGES (Lec. 131)
	//...... 2ª FORMA, 
	//...... DENOMINANDO OS EVENTOS, E DESACTIVANDO PELO NOME, APENAS O EVENTO
	/*
		var logData_ = (snapshot) => {
			console.log('Got Value', snapshot.val());  //[object Object]
		};
		//...... 
		firebaseRef.on("value", logData_); 
		//...... DESACTIVA OS LISTENERS (TODOS) CRIADOS COM O .on
		//...... O .update ABAIXO JÁ NÃO ACTIVA O .on
		firebaseRef.off(logData_);   //----- ----- ERROR ??????????????????????
		firebaseRef.off("value", logData_);   //+++++ OK
		//...... ALTERAÇÃO PARA TESTE DO .on		
		firebaseRef.update({isRunning: false});
	*/
	
	//......
	/*var onValueChange = function(dataSnapshot) { 
		console.log('Got Value'); 
	};
	firebaseRef.on('value', onValueChange);
	//firebaseRef.child('meta-data').on('child_added', onChildAdded);
	// Sometime later....
	firebaseRef.off('value', onValueChange);
	*/
	

//......
