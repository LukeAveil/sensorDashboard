var React = require('react');

var LatestValue = React.createClass({
  render: function() {
    var {data} = this.props;
    return (
      <div>
        <h3>Latest Values!</h3>
        {this.props.data.map((data) => {
          return (
            <div key={data.id} className="data">
              {data.value}
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = LatestValue;
