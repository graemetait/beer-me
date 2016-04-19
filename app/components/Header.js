import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <h1>
        <Link to="/">Beer Me!</Link>
      </h1>
    );
  }
});

export default Header;
