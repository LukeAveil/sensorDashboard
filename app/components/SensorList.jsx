var React = require("react");
var Sensor = require("Sensor");

var SensorList = React.createClass({
  render: function() {
    var {dataList, sensors} = this.props;

    var renderSensors = () => {
      return sensors.map((sensor) => {
        const dataForSensor = dataList.filter((data) => {
          return data.sensorId === sensor.id;
        }).sort((a, b) => {
          return b.time - a.time;
        });

        const latestValue = dataForSensor[dataForSensor.length - 1];
        const latestFive = dataForSensor.slice(-5);

        const latestFiveValues = latestFive.map((data) => {
          return data.value;
        });

        return (
          <Sensor key={sensor.id} name={sensor.name} value={latestValue.value} time={latestValue.time} spread={latestFiveValues}/>
        )
      });
    };

    return (
      <div>
        {renderSensors()}
      </div>
    );
  }
});

module.exports = SensorList;
