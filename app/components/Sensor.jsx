var React = require('react');
var LastReported = require('LastReported');
var LatestValue = require('LatestValue');
var Graph = require('Graph');

var Sensor = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Sensor Component</h2>
        <LastReported/>
        <LatestValue/>
        <Graph/>
      </div>
    );
  }
});

module.exports = Sensor;
