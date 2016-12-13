var React = require("react");
var LastReported = require("LastReported");
var LatestValue = require("LatestValue");
var Graph = require("Graph");

var Sensor = ({name, time, value, spread}) => {
  return (
    <div>
      <ul className="sensor">
        <li>
          <h4>Sensor Name</h4>
          <h5>{name}</h5>
        </li>
        <li>
          <LatestValue value={value}/>
        </li>
        <li>
          <LastReported time={time}/>
        </li>
        <li>
          <Graph data={spread}/>
        </li>
      </ul>
    </div>
  );
};

module.exports = Sensor;
