var React = require("react");

var LatestValue = ({value}) => {
  return (
    <div>
      <h4>Latest Value</h4>
      <h5>{value}</h5>
    </div>
  );
};

module.exports = LatestValue;
