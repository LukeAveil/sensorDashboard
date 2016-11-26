var React = require('react');

var LastReported = React.createClass({
  render: function() {
    var {data} = this.props;
    return (
      <div>
        <h3>Latest Time!</h3>
        {data.map((data) => {
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
