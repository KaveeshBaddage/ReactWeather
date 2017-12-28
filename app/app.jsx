var React =require('react');
var ReactDOM =require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="about" component={About} />
    <Route path="examples" component={Examples} /> //child components of Main component
    <IndexRoute component={Weather}/>  
  </Route>
</Router>,
  document.getElementById('app')
);

  // If you want a child route to be used as the default when no other child matches, you use a special route called <IndexRoute>.
