var React = require('react');
var { Divider, Tab } = require('semantic-ui-react');
var component = require('react');
var _ = require('lodash');

// import _ from 'lodash'
// import React, { Component } from 'react'
// import { Divider, Tab } from 'semantic-ui-react'

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey',
]

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

var Nav1 = React.createClass({
  this.setState({color: colors[0]});

  var handleColorChange = e => this.setState({ color: e.target.value });

  render() {
    const { color } = this.state

    return (
      <div>
        <select onChange={this.handleColorChange}>
          {_.map(colors, c => <option key={c} value={c}>{_.startCase(c)}</option>)}
        </select>

        <Divider hidden />

        <Tab
          menu={{ color, inverted: true, attached: false, tabular: false }}
          panes={panes}
        />
      </div>
    )
  }
});

module.exports = Nav1;
