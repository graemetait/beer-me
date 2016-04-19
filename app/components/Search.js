import React from 'react';

const Search = React.createClass({
  render() {
    return (
      <div className="search">
        <form>
          <input type="text" red="q" placeholder="Search a beer" />
          <input type="submit" value="Search!" />
        </form>
      </div>
    )
  }
});

export default Search;
