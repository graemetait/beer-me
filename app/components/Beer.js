import React from 'react';

const Beer = React.createClass({
  render() {
    return <div className="beer">{this.props.details.name}</div>
  }
});

export default Beer;
