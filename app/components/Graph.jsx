var React = require("react");
import { Sparklines, SparklinesLine } from "react-sparklines";

var Graph = ({time, value}) => {
  return (
    <div className="graph">
      <h6>Last Five Minutes</h6>
      <Sparklines data={[5, 10, 5, 20, 5]}>
        <SparklinesLine color="blue" />
      </Sparklines>
    </div>
  );
}

module.exports = Graph;
