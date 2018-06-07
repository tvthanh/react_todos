var React = require('react');
import { Link } from 'react-router';

// Modules require
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

// CSS require
require('./../css/todoList.css');

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      todos: ['wake up', 'wash my face', 'praise your buddha', 'have a breakfast']
    };
  },

  render: function() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return (
        <TodoItem key={index} item={item} onDelete={this.onDelete} />
      );
    }.bind(this));

    return (
      <div id="todo-list">
        <Link to={"/about"}>About</Link>
        <h2>Todo List</h2>
        <ul>{todos}</ul>
        <AddItem onAddItem={this.onAddItem}/>
      </div>
    );
  },

  // Create onDelete function listen handleDelete event
  onDelete: function(item) {
    var updateTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });

    this.setState({
      todos: updateTodos
    });
  },

  // Create onAddItem function listen handleSubmit event
  onAddItem: function(item) {
    var updateTodos = this.state.todos;

    updateTodos.push(item);

    this.setState({
      todos: updateTodos
    });
  },

  // Lifecycle components
  componentWillMount: function() {
    console.log('componentWillMount');
  },

  componentDidMount: function() {
    console.log('componentDidMount');
  }

});

module.exports = TodoList;
