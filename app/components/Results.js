import React from 'react';
import Beer from './Beer';
import Loader from './Loader';

const Results = React.createClass({
  render() {
    if (this.props.loading) {
      return <Loader message="Who's round is it?!" />
    }

    return (
      <div className="results">
        <div className="beers">
          {this.props.beers.map((details, i) => <Beer details={details} key={i} />)}
        </div>
      </div>
    )
  }
});

export default Results;
