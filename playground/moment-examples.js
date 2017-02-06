//............ Lec 101
/*
	Moment API
		moment()  »»» new moment
		.unix() »»»   current time  (Ex: 1486407945)
		.format()		formata o nº unix (ex: moment.unix(1486407945))		

	//Jan 1st 1970 @ 12.00am »»» 0 (time 0)	

*/
//............ 
var moment = require('moment');

//............ 
//console.log(':::' + );
console.log(':::' + moment().format());
	//prints: 
	//	:::2017-02-06T18:58:30+00:00

//............ 
var now = moment();
console.log('Current timestamp:::' + now.unix());
	//Current timestamp:::1486407945

var timestamp = 1486407945;	
var currentMoment = moment.unix(timestamp);
	//console.log('Current moment:::' + currentMoment.format());
	//Current moment:::2017-02-06T19:05:45+00:00

	//console.log('Current moment:::' + currentMoment.format('MMM'));
	//Current moment:::Feb (formato do mês)

	//console.log('Current moment:::' + currentMoment.format('MMM D, YY @ h:mm a'));
	//Current moment:::Feb 6, 17 @ 7:05 pm

	//Fevereiro 6th, 2017 @ 07.05 PM
	console.log('Current moment:::' + currentMoment.format('MMMM Do, YYYY @ hh:mm A'));