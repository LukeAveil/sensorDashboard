var React = require("react");
var Timestamp = require("react-timestamp");

var LastReported = ({time}) => {
  return (
    <div>
      <h4>Last Reported</h4>
      <h5><Timestamp time={time} format="full"/></h5>
    </div>
  );
};

module.exports = LastReported;
