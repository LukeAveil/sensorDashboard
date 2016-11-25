var React = require('react');
var SensorList = require('SensorList');

var Main = React.createClass({
  getInitialState: function() {
    return {
      sensors: [
        {
            "id": "46c634d04cc2fb4a4ee0f1596c5330328130ff80",
            "name": "external"
        },
        {
            "id": "d823cb4204c9715f5c811feaabeea45ce06736a0",
            "name": "office"
        },
        {
            "id": "437b3687100bcb77959a5fb6d0351b41972b1173",
            "name": "common room"
        }
      ]
    };
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
