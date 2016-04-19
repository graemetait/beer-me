import React from 'react';

const Search = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    const searchTerm = this.refs.q.value;
    console.log(`Searching for ${searchTerm}`);
    this.context.router.push(`/search/${searchTerm}`);
  },
  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="q" placeholder="Search a beer" />
          <input type="submit" value="Search!" />
        </form>
      </div>
    )
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  }
});

export default Search;
