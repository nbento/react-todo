//...... Lec. 133 a
import firebase from 'firebase'; 
//...... 
/*	apiKey: 		process.env.API_KEY,
	authDomain: 	process.env.AUTH_DOMAIN,
	databaseURL: 	process.env.DATABASE_URL,
	storageBucket: 	process.env.STORAGE_BUCKET
*/	
    //...... DATABASE DEV
/*    apiKey: 		"AIzaSyA7gyAZVW1pyPnE7A2doXC_-BFjjCTlZIY", 				
    authDomain: 	"todo-app-b62bb.firebaseapp.com",				
    databaseURL: 	"https://todo-app-b62bb.firebaseio.com",			
    storageBucket: 	"todo-app-b62bb.appspot.com"			
    //messagingSenderId: "725802521480"   no vídeo não existe, mas em 2017.03 está na database
*/	
	//...... DATABASE TEST
/*  apiKey: 		"AIzaSyCZTMqcEFasgE4hkApCZoEhKljXTulqbGU", 				
    authDomain: 	"todo-app-test-b0379.firebaseapp.com",				
    databaseURL: 	"https://todo-app-test-b0379.firebaseio.com",			
    storageBucket: 	"todo-app-test-b0379.appspot.com"
*/    		
	//...... ANTIGA DATABASE ELIMINADA
/*	apiKey: 		"AIzaSyA8Z2fMqBhcD2bo3fvluuUdajIb-WsfNsQ",
    authDomain: 	"mead-todo-app-9f124.firebaseapp.com",
    databaseURL: 	"https:mead-todo-app-9f124.firebaseio.com",
    storageBucket: 	"mead-todo-app-9f124.appspot.com"
*/
//...... 
//================= Código obtido ao seleccionar: Add Firebase to your web app
try {
	/*var config = {
				    apiKey: 		process.env.API_KEY, 
					authDomain: 	process.env.AUTH_DOMAIN, 
					databaseURL: 	process.env.DATABASE_URL,
					storageBucket: 	process.env.STORAGE_BUCKET
				};*/
	console.log("....................FIREBASE INDEX   process.env.NODE_ENV:::"+process.env.NODE_ENV);			
	//console.log("FIREBASE INDEX   process.env.API_KEY:::"+process.env.API_KEY);
	var config = {
				    apiKey: 		process.env.API_KEY, 		//"AIzaSyCZTMqcEFasgE4hkApCZoEhKljXTulqbGU", 				
				    authDomain: 	process.env.AUTH_DOMAIN, 	//"todo-app-test-b0379.firebaseapp.com",				
				    databaseURL: 	process.env.DATABASE_URL,  //"https://todo-app-test-b0379.firebaseio.com",			
				    storageBucket: 	process.env.STORAGE_BUCKET //"todo-app-test-b0379.appspot.com"
				};			
					
	firebase.initializeApp(config);

}catch(e){

}	
//================= 
export var firebaseRef = firebase.database().ref();
export default firebase;