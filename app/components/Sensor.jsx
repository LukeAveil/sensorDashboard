var React = require('react');
var LastReported = require('LastReported');
var LatestValue = require('LatestValue');
var Graph = require('Graph');
var axios = require('axios');

var Sensor = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },

  componentDidMount: function() {
    var _this = this;
    this.serverRequest =
      axios
        .get("http://localhost:3000/data.json")
        .then(function(result) {
          _this.setState({
            data: result.data
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var {name} = this.props;

    return (
      <div>
        {name}
        {this.state.data.map(function(sensor) {
          return (
            <div key={sensor.id} className="time">
              {sensor.time}
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = Sensor;
