var React = require('react');
import { Link } from 'react-router';

var About = React.createClass({
  render: function() {
    return (
      <div id="about">
        <Link to={"/"}>Home</Link>
        <h2>About page</h2>
        <p>This is about page that you know some thing the auther.</p>
      </div>
    );
  }
});

module.exports = About;
