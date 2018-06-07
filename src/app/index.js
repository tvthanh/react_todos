var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, browserHistory, Link } from 'react-router';

// Modules require
var TodoList = require('./components/todoList');
var About = require('./components/about');

// CSS require
require('./css/index.css');

var App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={TodoList}></Route>
        <Route path={"/about"} component={About}></Route>
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
