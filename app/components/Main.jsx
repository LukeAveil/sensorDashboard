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

    apiCall.getSensors().then(function(result) {
      _this.setState({
        sensors: result
      });
    })

    apiCall.getData().then(function(result) {
      _this.setState({
        sensorsData: result
      });
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
