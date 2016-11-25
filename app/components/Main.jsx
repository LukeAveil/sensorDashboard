var React = require('react');
var Sensor = require('Sensor');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Main Component</h2>
        <Sensor/>
      </div>
    );
  }
});

module.exports = Main;
