var React = require('react');
var Sensor = require('Sensor');

var SensorList = React.createClass({
  render: function() {
    var {data, sensors} = this.props;

    var renderSensors = () => {
      return sensors.map((sensor) => {
        return <Sensor key={sensor.id} name={sensor.name} value={data.get(sensor.id)}/>
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
