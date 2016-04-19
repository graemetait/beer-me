import React from 'react';
import Loader from './Loader';

const Single = React.createClass({
  getInitialState() {
    return {
      beer: { name: '' },
      loading: true
    }
  },
  componentWillMount() {
    this.loadBeer(this.props.params.beerId);
  },
  loadBeer(beerId) {
    console.log(`Loading beer ${beerId}`);

    this.setState({ loading: true });

    fetch(`http://api.react.beer/v2/beer/${beerId}`)
      .then(data => data.json())
      .then(beer => {
        this.setState({ beer: beer.data, loading: false });
      });
  },
  render() {
    if (this.state.loading) {
      return <Loader message="Pouring a cold one!" />
    }

    return (
      <div className="single-beer">
        <h2>{this.state.beer.name}</h2>
        <p>{this.state.beer.style.description}</p>
      </div>
    )
  }
});

export default Single;
