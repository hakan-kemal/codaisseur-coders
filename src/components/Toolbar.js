import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Toolbar extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to='/'>Homepage</Link>
          <Link to='/developers'>Developers</Link>
        </p>
      </div>
    );
  }
}
