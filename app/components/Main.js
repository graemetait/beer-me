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
      numBeers: 10,
      beers: []
    }
  },
  componentWillMount() {
    this.loadBeers();
  },
  incrementBeers() {
    const beerAmount = this.state.numBeers + 1;
    this.setState({ numBeers: beerAmount });
  },
  loadBeers(searchTerm = 'hops') {
    console.log('Searching for ' + searchTerm);
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(data => data.json())
      .then((beers) => {
        const filteredBeers = beers.data.filter(beer => !!beer.labels);
        this.setState({ beers: filteredBeers });
      })
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
