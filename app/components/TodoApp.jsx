var React = require('react');
//........... DESACTIVADA NA Lec. 126, 
//var {connect} = require('react-redux'); //........... DESACTIVADA NA Lec. 126
//var actions = require('actions'); //........... DESACTIVADA NA Lec. 126
//MAS
//NO VIDEO, ESTAS 2 NÃO SÃO DESACTIVADAS
//var uuid = require('node-uuid');//........... DESACTIVADA NA Lec. 126
//var moment = require('moment');//........... DESACTIVADA NA Lec. 126

import TodoList from 'TodoList';      //Lec. 122 ~13.48
import AddTodo from 'AddTodo';        //Lec. 124 (o export OBRIGA AQUI À UTILIZAÇÃO DE import)
//var AddTodo = require('AddTodo');
//var TodoSearch = require('TodoSearch');
import TodoSearch from 'TodoSearch'; 

//var TodoAPI = require('TodoAPI'); //........... DESACTIVADA NA Lec. 126

var TodoApp = React.createClass(
{
  //........... DESACTIVADA NA Lec. 126
  //O STATE É MANTIDO/ACTUALIZADO COM REDUX,
  //ISTO ERA ÚTIL QUANDO ESTA COMP. ENVIAVA DADOS ÀS COMP. CHILDREN
  /*getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
     
    };
  },*/
  //........... DESACTIVADA NA Lec. 126
  /*componentDidUpdate: function () 
  {
    console.log('TodoApp  COMPONENTDIDUPDATE');
    TodoAPI.setTodos(this.state.todos);
    //TodoAPI.setTodos(this.props.todos);
  },*/
  //........... DESACTIVADA NA Lec. 126
  /*handleAddTodo: function (text) {
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
  },*/
  //........... DESACTIVADA NA Lec. 126
  /*handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },*/
  //........... DESACTIVADA NA Lec. 126
  /*handleToggle: function (id) 
  {
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
  },*/
  render: function () 
  {
    //........... DESACTIVADA NA Lec. 126
    //var {todos, showCompleted, searchText, dispatch} = this.props;
    //var {searchText} = this.props;
    //var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    //ISTO ESTAVA ANTES DE REDUX;
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
module.exports = TodoApp;
//module.exports = connect()(TodoApp);
/*module.exports = connect(
  (state) => {
    return {
      todos: state.todos,
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoApp);*/
