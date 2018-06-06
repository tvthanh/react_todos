var React = require('react');

// CSS require
require('./../css/todoItem.css');

var TodoItem = React.createClass({
  render: function() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-remove" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  },

  // Create delete item event
  handleDelete: function() {
    this.props.onDelete(this.props.item);
  }
});

module.exports = TodoItem;
