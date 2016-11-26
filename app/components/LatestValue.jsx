var React = require('react');

var LatestValue = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.data.map((value) => {
          return (
            <div key={value.id} className="value">
              {value.value}
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = LatestValue;
