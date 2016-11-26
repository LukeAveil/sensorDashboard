var React = require('react');

var LastReported = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.data.map((time) => {
          return (
            <div key={time.id} className="time">
              {time.time}
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = LastReported;
