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

        // const latestFive = dataForSensor.slice(1, 6);
        const latestValue = dataForSensor[dataForSensor.length - 1];
        // console.log(latestFive);
        return (
          <Sensor key={sensor.id} name={sensor.name} value={latestValue.value} time={latestValue.time}/>
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
