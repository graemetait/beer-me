import React from 'react';
import Loader from './Loader';

const Single = React.createClass({
  getInitialState() {
    return {
      beer: {},
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
    const { beer } = this.state;

    return (
      <div className="single-beer">

        <div className="desc">
          <h3>{beer.name}</h3>
          <p>{beer.description}</p>
        </div>

        <img className="label" src={beer.labels.large} />

        <div className="deets">
          {this.renderGlass(beer)}

          <p>ABV: {beer.abv}%</p>
          <p>{beer.style.description}</p>
        </div>
      </div>
    )
  },
  renderGlass(beer) {
    if (!beer.glass) return;

    return (
      <div className="glass">
        <img src={`/images/glass-${beer.glass.id}.jpg`} />
        <h3>{beer.glass.name} Glass</h3>
      </div>
    )
  }
});

export default Single;
