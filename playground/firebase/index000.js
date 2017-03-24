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
	//console.log("set Worked");	
}, (e)=>{
	//console.log("set Failed");
});

//...... Lec. 131
//.once  OBTÉM TODOS OS DADOS DA DATABASE, A PARTIR DA POSIÇÃO/HIERARQUIA
//EM QUE SE ENCONTRA, APENAS 1 VEZ;
//.once returns a promise
//...... .once   DESTA FORMA DEVOLVE TODOS OS DADOS
/*
	firebaseRef.once('value').then( (snapshot)=>
	{
		console.log(".once SUCCESS  database:::", snapshot.val());  //[object Object]
		//snapshot.val()
		//RETURNS A OBJECT, QUE SÃO OS DADOS	
	}, (e)=>{
		console.log(".once Failed", e);
	});
*/	
//...... .once   DESTA FORMA DEVOLVE TODOS OS DADOS
/*	firebaseRef.child('app').once('value').then( (snapshot)=>
	{
		console.log(".once SUCCESS  database:::", snapshot.key, snapshot.val());  //[object Object]
		//snapshot.val() //RETURNS A OBJECT, QUE SÃO OS DADOS	
		//snapshot.key //NOME DA VAR INICIAL (Neste caso, app)
		
	}, (e)=>{
		console.log(".once Failed", e);
	});
*/	
//...... .on ACTIVATED EVERYTIME THE DATABASE CHANGES (Lec. 131)
/*	//...... 1ª FORMA
		firebaseRef.on('value', (snapshot)=>
		{
			console.log(".on  1ª FORMA  Got Value  database:::", snapshot.val());  //[object Object]
		});
		//...... DESACTIVA OS LISTENERS (TODOS) CRIADOS COM O .on
		//...... O .update ABAIXO JÁ NÃO ACTIVA O .on
		 firebaseRef.off();
		//...... ALTERAÇÃO PARA TESTE DO .on		
		firebaseRef.update({isRunning: false});
*/
//...... .on ACTIVATED EVERYTIME THE DATABASE CHANGES (Lec. 131)
	//...... 2ª FORMA, 
	//...... DENOMINANDO OS EVENTOS, E DESACTIVANDO PELO NOME, APENAS O EVENTO
		var logData = (snapshot)=> {
			console.log('2 FORMA Got Value', snapshot.val());  //[object Object]
		};
		//...... 
		firebaseRef.on('value', logData); 
		//...... DESACTIVA OS LISTENERS (TODOS) CRIADOS COM O .on
		//...... O .update ABAIXO JÁ NÃO ACTIVA O .on
		 firebaseRef.off(logData);   //----- ----- ERROR ??????????????????????
		//...... ALTERAÇÃO PARA TESTE DO .on		
		firebaseRef.update({isRunning: false});

//......

//...... Lec. 128
//.child »»» forma de alterar uma prop, sem eliminar as outras, apenas a prop é actualizada
/*firebaseRef.child('user').set({
			name: 'Mike'
		});	
*/
//ALTERA A PROP app, sem ELIMINAR AS OUTRAS PROPS, 
//APENAS A PROP app.version É ELIMINADA;
/*firebaseRef.child('app').set({
			name: 'Todo App'
		});	
*/
//........... Lec. 129
//.remove() 	//ELIMINA TODOS OS DADOS
//firebaseRef.remove();	

//ELIMINAR UMA PROP
//1ª forma
//firebaseRef.child('app/name').remove();	

//2ª forma
//ELIMINAR isRunning
//firebaseRef.update({isRunning:null});
//ELIMINAR app.name
//firebaseRef.child('app').update({name:null});
	
//firebaseRef.child('user/locations').update({main:null});	
//firebaseRef.child('user/locations/main').remove();	

//firebaseRef.child('isRunning').remove();
//firebaseRef.child('user/age').remove();