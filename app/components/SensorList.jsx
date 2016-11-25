var React = require('react');
var Sensor = require('Sensor');

var SensorList = React.createClass({
  render: function() {
    var {sensors} = this.props;
    var renderSensors = () => {
      return sensors.map((sensor) => {
        return (
          <Sensor key={sensor.id} {...sensor}/>
        );
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
