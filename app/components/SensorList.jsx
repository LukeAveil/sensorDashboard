var React = require('react');
var Sensor = require('Sensor');

var SensorList = React.createClass({
  render: function() {
    var {dataList, sensors} = this.props;
    var renderSensors = () => {
      return sensors.map((sensor) => {
        return dataList.map((data) => {
          if (data.sensorId === sensor.id) {
            return (
              <Sensor key={data.sensorId} name={sensor.name} value={data.value} time={data.time}/>
            );
          }
        })
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
