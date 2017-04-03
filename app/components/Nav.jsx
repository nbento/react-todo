var React = require('react');
var {Link, IndexLink} = require('react-router');
//DESTA FORMA NÃO FUNCIONA ???
//var Link 		= require('react-router');
//var IndexLink 	= require('react-router');
/*
var Nav = React.createClass(
{
	render: function()
	{ 
		return (<div>
					<h2>1Title Nav!!!</h2>
					<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>GET WEATHER</IndexLink>
					
					<Link to="/about"activeClassName="active" activeStyle={{fontWeight:'bold'}}>ABOUT</Link>
					<Link to="/examples"activeClassName="active" activeStyle={{fontWeight:'bold'}}>EXAMPLES</Link>
					
				</div>)
	}
});
*/

var Nav = () => {
	return (<div>
				<h2>1Title Nav!!!</h2>
				<IndexLink to="/" 
					activeClassName="active" 
					activeStyle={{fontWeight:'bold'}}
				>
					INDEX LINK!
				</IndexLink>
				
				<Link to="/todos" 
					activeClassName="active" 
					activeStyle={{fontWeight:'bold'}}
				>
					TODOAPP!
				</Link>
	
			</div>
			)
}


module.exports = Nav;