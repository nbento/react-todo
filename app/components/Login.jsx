//...... Lec. 142
import React from 'react';
import * as Redux from 'react-redux';
//var {connect} = require('react-redux');  //...... Lec. 143
var actions = require('actions');        //...... Lec. 143
//........... 



export var Login = React.createClass(
{  
  //......render com ES6
  /*
    render(){...}

  */
  //......
  onLogin: function()
  {
    console.log("onLOGIN.JSX  BUTTON LOGIN!!!!");
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
  //......
  render: function () 
  {
    return (
      <div>
          <div className="row">
              <div className="columns small-centered small-10 medium-6 large-4">
                  <div className="callout callout-auth">
                      <h3>Login</h3>
                      <p>
                          Login with GitHub account bellow.
                      </p>
                      <button className="button" onClick={this.onLogin}>
                        Login with GitHub
                      </button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
});
//..............
//module.exports = Login;
export default Redux.connect()(Login);