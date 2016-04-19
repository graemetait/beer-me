import React from 'react';
import Header from './Header';
import Loader from './Loader';
import Beer from './Beer';
import Results from './Results';
import Search from './Search';
import Single from './Single';

const Main = React.createClass({
  getInitialState() {
    return {
      numBeers: 10
    }
  },
  incrementBeers() {
    const beerAmount = this.state.numBeers + 1;
    this.setState({ numBeers: beerAmount });
  },
  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me! 🍻" />
        <button onClick={this.incrementBeers}>{this.state.numBeers} 🍻</button>
        {React.cloneElement(this.props.children, {loadBeers:this.loadBeers, ...this.state })}
      </div>
    )
  }
});

export default Main;
