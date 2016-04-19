import React from 'react';
import Header from './Header';
import Loader from './Loader';
import Beer from './Beer';
import Results from './Results';
import Search from './Search';
import Single from './Single';

const Main = React.createClass({
  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me! 🍻" />
        {React.cloneElement(this.props.children, {loadBeers:this.loadBeers, ...this.state })}
      </div>
    )
  }
});

export default Main;
