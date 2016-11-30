var React = require("react");
import { Sparklines, SparklinesLine } from "react-sparklines";

var Graph = React.createClass({
  render: function() {
    var {time, value} = this.props;

    return (
      <div className="graph">
        <h6>Last Five Minutes</h6>
        <Sparklines data={[5, 10, 5, 20, 5]}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </div>
    );
  }
});

module.exports = Graph;
