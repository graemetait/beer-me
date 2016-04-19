import React from 'react';
import Beer from './Beer';

const Results = React.createClass({
  render() {
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
