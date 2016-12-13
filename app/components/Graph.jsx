var React = require("react");
import { Sparklines, SparklinesLine } from "react-sparklines";

var Graph = ({time, value, data}) => {
  return (
    <div className="graph">
      <h6>Last Five Minutes</h6>
      <Sparklines data={data}>
        <SparklinesLine color="blue" />
      </Sparklines>
    </div>
  );
}

module.exports = Graph;
