var React = require('react');
var Timestamp = require('react-timestamp');

var Graph = React.createClass({
  render: function() {
    var {time, value} = this.props;

    return (
      <div>
        <h4>Last Five Minutes</h4>

      </div>
    );
  }
});

module.exports = Graph;
