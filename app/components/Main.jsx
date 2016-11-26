var React = require('react');
var SensorList = require('SensorList');
var axios = require('axios');

var Main = React.createClass({
  getInitialState: function() {
    return {
      sensors: []
    };
  },

  componentDidMount: function() {
    var _this = this;
    this.serverRequest =
      axios
        .get("http://localhost:3000/sensors.json")
        .then(function(result) {
          _this.setState({
            sensors: result.data
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var {sensors} = this.state;

    return (
      <div>
        <SensorList sensors={sensors}/>
      </div>
    );
  }
});

module.exports = Main;
