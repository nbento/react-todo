var React = require('React');

var Todo = React.createClass({
	render: function()
	{
		var {text, id} = this.props;

		return (
					<div>
						<li> ID::: {id} | TEXT:::{text}</li>)
					</div>
			)
	}
});

module.exports = Todo;