var React = require('react');
// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp,location} = this.props;
//     return(
//       <div>
//         <p>It's it {temp} &#8451; in {location}.</p>
//       </div>
//     )
//   }
// });

var WeatherMessage = ({temp,location}) => {
  return(
    <div>
      <p>It's it {temp} &#8451; in {location}.</p>
    </div>
  )
};

module.exports = WeatherMessage;
