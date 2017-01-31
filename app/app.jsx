var React 		= require('react');
var ReactDOM 	= require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp 	= require('TodoApp');
//.......... 

//Load foundation (CARREGA UM FILE CSS DIRECTA/ NUM FILE JSX(!!!))  (Lec.51 ~10:00)
//css! »»» 'by default the require doesn't know how to load a css file'; FORMA QUE PERMITE AO REQUIRE LOADAR UM CSS  
//style! »»» FORMA QUE injectar o css file no HTML
//require('style!css!foundation-sites/dist/foundation.min.css'); //Retirar: Lec.83 Alt. para SASS Foundation
$(document).foundation();

//alias em webpack.config.js
require('style!css!sass!applicationStyles');
//<Route path="countdown" component={Countdown} />
//<IndexRoute path="timer" component={Timer} />

//<TodoApp/>,  <p>Boilerplate 3</p>
ReactDOM.render( 
			
			<TodoApp/>,


  			document.getElementById('app')
);
