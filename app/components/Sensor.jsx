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
    var {data} = this.state;

    return (
      <div>
        {name}
        <LatestValue data={data}/>
        <LastReported data={data}/>
      </div>
    );
  }
});

module.exports = Sensor;
