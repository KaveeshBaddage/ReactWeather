var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
        <Footer/>
      </div>

    );
  }
});

module.exports = Main;

// {this.props.children} render child components here which under Main component
