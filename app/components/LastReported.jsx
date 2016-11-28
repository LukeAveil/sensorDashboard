var React = require('react');

var LastReported = React.createClass({
  render: function() {
    var {time} = this.props;
    return (
      <div>
        {time}
      </div>
    );
  }
});

module.exports = LastReported;
