//...... Lec. 133
import firebase from 'firebase';

//================= Código obtido ao seleccionar: Add Firebase to your web app
try {
	var config = {
				    apiKey: "AIzaSyA8Z2fMqBhcD2bo3fvluuUdajIb-WsfNsQ",
				    authDomain: "mead-todo-app-9f124.firebaseapp.com",
				    databaseURL: "https://mead-todo-app-9f124.firebaseio.com",
				    storageBucket: "mead-todo-app-9f124.appspot.com",
				    messagingSenderId: "725802521480"
				};
					
	firebase.initializeApp(config);

}catch(e){

}	
//================= 
export var firebaseRef = firebase.database().ref();
export default firebase;