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
          var sensorDataToId = new Map();
          for(var i = 0; i < data.length; i++) {
            var datum = result[i];
            var sensorId = datum.sensorId;
            if (sensorDataToId.get(sensorId) === undefined) {
              sensorDataToId.set(sensorId, []);
            }

            sensorDataToId.get(sensorId).push(datum)
          }
          _this.setState({
            sensorsData: sensorDataToId
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var {sensors, sensorsData} = this.state;

    return (
      <div className="sensorList">
        <SensorList sensors={sensors} data={sensorsData}/>
      </div>
    );
  }
});

module.exports = Main;
