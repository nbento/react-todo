var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function () 
  {
    console.log('Todo  render..............');
    var {numId, id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    
    var renderDate = () => 
    {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) 
      {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    //console.log('ID:::'+id);
    return (<div className={todoClassName}>
                <div onClick={ ()=>{
                  //this.props.onToggle(id);
                  //console.log('TODO CLICK numId:::' + numId);
                  dispatch(actions.toggleTodo(id));
                }}>
                    <div>
                      <input type="checkbox" checked={completed}/>
                    </div> 
                    <div>
                      <p>{text}</p>
                      <p className="todo__subtext">{renderDate()}</p>
                      <p className="todo__subtext">{id}</p>
                    </div>  
                </div>
            </div>      
          )
  }
});
//module.exports = Todo;
//module.exports = connect()(Todo);

export default connect()(Todo);
