import React from 'react';
import Header from './Header';
import Search from './Search';

const Main = React.createClass({
  getInitialState() {
    return {
      numBeers: 10,
      beers: [],
      loading: true
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

    this.setState({ loading: true });

    const cacheKey = `search-${searchTerm}`;
    const localStorageBeers = localStorage.getItem(cacheKey);

    if (localStorageBeers) {
      this.setState({
        beers: JSON.parse(localStorageBeers),
        loading: false
      });
      return;
    }

    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(data => data.json())
      .then((beers) => {
        const filteredBeers = beers.data.filter(beer => !!beer.labels);
        this.setState({ beers: filteredBeers, loading: false });
        // Save beers to localstorage
        localStorage.setItem(cacheKey, JSON.stringify(this.state.beers));
      });
  },
  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me! 🍻" />
        <Search />
        <button onClick={this.incrementBeers}>{this.state.numBeers} 🍻</button>
        {React.cloneElement(this.props.children, {loadBeers:this.loadBeers, ...this.state })}
      </div>
    )
  }
});

export default Main;
