import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import myStore from '../../../../redux/Store';

const mapStateToPropsSignin = (state) => {
  return {
    successMail: state.successMail,
  };
};

class Signin extends Component {
  handleLogout = (event) => {
    localStorage.clear();
    myStore.dispatch({
      type: 'LOGOUT',
    });
  };
  render() {
    const logout =
      this.props.successMail !== 'Sign In' ? (
        <button className='btn btn-secondary' onClick={this.handleLogout}>
          Log out
        </button>
      ) : null;
    return (
      <Link to='/signin'>
        <button className='btn btn-secondary'>{this.props.successMail}</button>
        {logout}
      </Link>
    );
  }
}

export default connect(mapStateToPropsSignin)(Signin);
