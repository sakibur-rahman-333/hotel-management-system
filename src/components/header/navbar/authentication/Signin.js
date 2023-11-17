import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Signin extends Component {
  render() {
    return (
      <Link to='/signin'>
        <button className='btn btn-secondary'>Sign In</button>;
      </Link>
    );
  }
}

export default Signin;
