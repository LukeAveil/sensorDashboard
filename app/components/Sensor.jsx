var React = require('react');
var LastReported = require('LastReported');
var LatestValue = require('LatestValue');
var Graph = require('Graph');

var Sensor = React.createClass({
  render: function() {
    var {name} = this.props;

    return (
      <div>
        {name}
      </div>
    );
  }
});

module.exports = Sensor;
