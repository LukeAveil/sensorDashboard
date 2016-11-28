var React = require('react');
var LastReported = require('LastReported');
var LatestValue = require('LatestValue');
var Graph = require('Graph');

var Sensor = React.createClass({
  render: function() {
    var {name, time, value} = this.props;

    return (
      <div>
        {name}
        <LatestValue value={value}/>
        <LastReported time={time}/>
      </div>
    );
  }
});

module.exports = Sensor;
