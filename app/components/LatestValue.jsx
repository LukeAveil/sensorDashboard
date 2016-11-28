var React = require('react');

var LatestValue = React.createClass({
  render: function() {
    var {value} = this.props;
    return (
      <div>
        {value}
      </div>
    );
  }
});

module.exports = LatestValue;
