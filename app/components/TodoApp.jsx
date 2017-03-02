var React = require('react');
var {connect} = require('react-redux'); 
var actions = require('actions'); 

var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';      //Lec. 122 ~13.48
import AddTodo from 'AddTodo';        //Lec. 124 (o export OBRIGA AQUI À UTILIZAÇÃO DE import)
//var AddTodo = require('AddTodo');
//var TodoSearch = require('TodoSearch');
import TodoSearch from 'TodoSearch'; 

var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass(
{
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
     
    };
  },
  componentDidUpdate: function () 
  {
    console.log('TodoApp  COMPONENTDIDUPDATE');
    TodoAPI.setTodos(this.state.todos);
    //TodoAPI.setTodos(this.props.todos);
  },
  handleAddTodo: function (text) {
    //console.log('TodoApp  handleAddTodo text:::'+text);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function (id) 
  {
   //=============================== 
   /*
      var todosAux = this.state.todos.map(function(todo)
      {
        if(todo.id === id)
        {
          console.log("TodoApp onChangeTodo »»» todos_.id === id!!!");
          todo.completed = valor;
          todo.completedAt = todo.completed ? moment().unix() : undefined;
        } 
        return todo;
      });
      //......... 
      this.setState({todos: todosAux});
    */
    //===============================
    var todos_ = this.state.todos;
    todos_.filter(function(todo)
    {
        if(todo.id === id)
        {
          //console.log('TodoApp   handleToggle   if(todo.id === id)*********!!!!!'); 
          todo.completed = !todo.completed;
          todo.completedAt = todo.completed ? moment().unix() : undefined;
        }
    });

    this.setState({todos: todos_});
  },
  render: function () {
    //var {todos, showCompleted, searchText} = this.state;
    var {todos, showCompleted, searchText, dispatch} = this.props;
    var {searchText} = this.props;
    console.log('TodoApp  render  searchText:::'+searchText);
    console.log('TodoApp  render!!!!!!!!!!!!!!!!!!!');
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    //dispatch(actions.)
    //<TodoSearch onSearch={this.handleSearch}/>
    //<TodoList todos={filteredTodos}  onToggle={this.handleToggle} />
    //<AddTodo onAddTodo={this.handleAddTodo}/>  
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
                <TodoSearch/>
                <TodoList/>
                <AddTodo/>       
            </div>
          </div>
        </div>
      </div>
    )
  }
});
//..............
//module.exports = TodoApp;
//module.exports = connect()(TodoApp);
module.exports = connect(
  (state) => {
    return {
      todos: state.todos,
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoApp);
