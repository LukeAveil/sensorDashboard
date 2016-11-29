var React = require('react');

var LatestValue = React.createClass({
  render: function() {
    var {value} = this.props;

    return (
      <div>
        <h4>Latest Value</h4>
        {value}
      </div>
    );
  }
});

module.exports = LatestValue;
