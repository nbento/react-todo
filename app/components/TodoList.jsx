var React = require('react');
var {connect} = require('react-redux');
//var Todo = require('Todo');
import Todo from 'Todo';  //...Lec. 123 
var TodoAPI =  require('TodoAPI');  //...Lec. 125 

export var TodoList = React.createClass(
{
  render: function () 
  {
        //console.log('TodoList  render********************');
        //todos já não são enviados do parent,   //são obtidos do Redux;
        var {todos, showCompleted, searchText} = this.props;
        //console.log('TODOS:::'+ todos);
        
        var renderTodos = () => 
        {
          //console.log('TODOS.LENGTH:::'+ todos.length);
          if (todos.length === 0) 
          {
            return (
              <p className="container__message">Nothing To Do</p>
            );
          }

          return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
            //console.log('TODO.ID:::'+todo.id);
            return (
              //<Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
              <Todo numId={todo.id} key={todo.id} {...todo} />
            )
          })
        }//...renderTodos END!

        return (
          <div>
            {renderTodos()}
          </div>
        )
  }
});
//........... 
//module.exports = TodoList;
//........... 
/*//Lec.122 ~11.41, DESACTIVADA PARA OS TESTES, SUBSTITUIDA PELO CODIGO ABAIXO,
//QUE DÁ PROBLEMAS EM 2017.02, VER NOTAS EM udemyReactNotas.txt, LEC. 122
  module.exports = connect(
    (state) => {
      return {
        todos: state.todos
      };
    }
  )(TodoList);
*/
//........... 
export default connect(
  (state) => {
    return state;
  }
)(TodoList);
/*
module.exports = connect(
  (state) => {
    return {
      todos: state.todos,
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoList);
*/