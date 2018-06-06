var React = require('react');
var ReactDOM = require('react-dom');

var TodoItem = require('./components/todoItem');
var AddItem = require('./components/addItem');

// CSS require
require('./css/index.css');

var App = React.createClass({
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
        <h1>Todo List {this.props.author}</h1>
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
  }

});

ReactDOM.render(<App author="thanhtv" />, document.getElementById('app'));
