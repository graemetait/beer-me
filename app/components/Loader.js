import React from 'react';

const Loader = React.createClass({
  render() {
    return (
      <div className="loader">
        <img src="/images/ball.svg" />
         <h2>{this.props.message}</h2>
      </div>
    )
  }
});

export default Loader;
