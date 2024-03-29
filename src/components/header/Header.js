import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar/Navbar';

const mapStateToProps = (state) => {
  return {
    sample: state.sample,
  };
};

class Header extends Component {
  render() {
    return <Navbar />;
  }
}

export default connect(mapStateToProps)(Header);
