var webpack = require('webpack'); 	//alteração para Foundation
//var Lec. 83, alt. para Foundation SASS
var path = require('path'); 		//path »»» built in to node, no adtional instalation required

module.exports = {
	//entry: './app/app.jsx',
	entry:  [ 	//alteração para Foundation: several entries
				//script! »»» SÃO FILES JS COMUNS E NÃO WEBPACK MODULES;
				'script!jquery/dist/jquery.min.js', 				//alteração para Foundation
				'script!foundation-sites/dist/js/foundation.min.js', //alteração para Foundation
				//'css!foundation-sites/dist/foundation.min.css', //NR DESTA FORMA NÃO FUNCIONA
				'./app/app.jsx'
	],
	externals: {			//alteração para Foundation
		jquery: 'jQuery'    //útil para o module Foundation
	},		
	plugins: [ 				//alteração para Foundation
		//
		//Serve para para numa componente (Ex: About.jsx), ao utilizar o $(...)
		//não ter de importar com require('...');
		//Obriga a ter no topo a var webpack = require('webpack');
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],	
	output: {
		path: __dirname,
		filename: './public/bundle.js' 	//final output; o file index.html deve indicar este nome
	},
	resolve: {
		root: __dirname, 		//var fornecida pelo node js
		modulesDirectories: [ 	//Lec. 86 - Nova forma de criar os 'alias'
			'node_modules',
			'./app/components',
			'./app/api'

		],
		alias: { 				//path das components a criar; ao indicar o path aqui, basta indicar o nome da component, sem path

				applicationStyles:'app/styles/app.scss', 		//Lec.58
				actions: 'app/actions/actions.jsx' 				//Lec. 117
				
		},
		extensions: ['', '.js', '.jsx']  //Deixa de ser necessário indicar a extensão no require
	},
	module: { 							//Elementos extra necessários para utilizar ES6, babel em React
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader: { ////var Lec. 83, alt. para Foundation SASS
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]	
	},	
	devtool: 'cheap-module-eval-source-map'  //Source Maps (debugging)
};	