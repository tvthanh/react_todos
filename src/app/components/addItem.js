var React = require('react');

var AddItem = React.createClass({
  render: function() {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Add New" />
      </form>
    );
  },

  // Create add new item event
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onAddItem(this.refs.newItem.value);
  }
});

module.exports = AddItem;
