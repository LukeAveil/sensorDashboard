var React = require('react');

var LastReported = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Latest Time!</h3>
        {this.props.data.map((data) => {
          return (
            <div key={data.id} className="data">
              {data.time}
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = LastReported;
