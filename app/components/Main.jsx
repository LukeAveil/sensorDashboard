var React = require('react');
var SensorList = require('SensorList');
var axios = require('axios');

var Main = React.createClass({
  getInitialState: function() {
    return {
      sensors: [],
      sensorsData: []
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
      axios
        .get("http://localhost:3000/data.json")
        .then(function(result) {
          _this.setState({
            sensorsData: result.data
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var {sensors, sensorsData} = this.state;

    return (
      <div>
        <SensorList sensors={sensors} dataList={sensorsData}/>
      </div>
    );
  }
});

module.exports = Main;
