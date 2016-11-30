var React = require("react");
var Timestamp = require("react-timestamp");

var LastReported = React.createClass({
  render: function() {
    var {time} = this.props;

    return (
      <div>
        <h4>Last Reported</h4>
        <h5><Timestamp time={time} format="full"/></h5>
      </div>
    );
  }
});

module.exports = LastReported;
