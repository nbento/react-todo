//NR  -  'express' » NAME OF THE DEPENDENCIE
var express = require('express');

//Create app
var app = express();
const PORT = process.env.PORT || 3000;

//NOTA: ESTE CÓDIGO ESTÁ RELACIONADO COM EXPRESS E NÃO
//É FUNDAMENTAL PARA ESTE CURSO DE REACT;
//É UTILIZADO NO CONTEXTO DA PLATAFORMA HEROKU;
//Lec. 47 (Changes to use Heroku, from https to http),
//TEM DE ESTAR ANTES DOS RESTANTES ELEMENTOS ABAIXO;
app.use(function(req, res, next) {
	if(req.headers['x-forwarded-proto'] === 'http') {

		next();
		

	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});

//.use() » ADD FUNCTIONALITY TO THE APPLICATION
//'public' » FOLDER TO BE EXPOSED TO THE SERVER
app.use(express.static('public'));

//START SERVER
app.listen(PORT, function () 
{
	console.log('Express server is on port ' + PORT);
});