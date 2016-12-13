var React = require("react");
var SensorList = require("SensorList");
var apiCall = require("apiCall");

var Main = React.createClass({
  getInitialState: function() {
    return {
      sensors: [],
      sensorsData: []
    };
  },

  componentDidMount: function() {
    var _this = this;

    apiCall.getSensors().then(function(sensors) {
      apiCall.getData().then(function(data) {
        _this.setState({
          sensorsData: data,
          sensors: sensors
        });
      })
    })
  },

  componentWillUnmount: function() {
    apiCall.getSensors.abort();
    apiCall.getData.abort();
  },

  render: function() {
    var {sensors, sensorsData} = this.state;

    return (
      <div className="sensorList">
        <SensorList sensors={sensors} dataList={sensorsData}/>
      </div>
    );
  }
});

module.exports = Main;
