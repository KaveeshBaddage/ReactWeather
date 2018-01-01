var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');
var Nav1 = require('Nav1');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Nav1/>
        <h2>Main Component</h2>
        {this.props.children}
        <Footer/>
      </div>

    );
  }
});

module.exports = Main;

// {this.props.children} render child components here which under Main component
