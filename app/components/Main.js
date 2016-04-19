import React from 'react';
import Header from './Header';

const Main = React.createClass({
  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me! 🍻" />
      </div>
    )
  }
});

export default Main;