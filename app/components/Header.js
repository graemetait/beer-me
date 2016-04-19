import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <h1>
        <Link to="/">{this.props.siteName}</Link>
      </h1>
    );
  },
  propTypes: {
    siteName: React.PropTypes.string.isRequired
  }
});

export default Header;
