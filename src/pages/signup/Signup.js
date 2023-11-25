import React, { Component } from 'react';
import '../signin/Signin.css';
import axios from 'axios';
import myStore from '../../redux/Store';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    // console.log('Signup: ', this.state);
    const url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzwBcVbzCHwJXlwWiiZMyL_rQbNXz-9CI';
    await axios
      .post(url, {
        email: this.state.email,
        password: this.state.password,
        returnSecureToken: true,
      })
      .then((response) => {
        myStore.dispatch({
          type: 'AUTH_SUCCESS',
          value: response.data.email,
        });
        localStorage.setItem('email', response.data.email);
      })
      .catch((error) => console.log(error));
      this.setState({
        email: '',
        password: ''
      })
  };
  render() {
    return (
      <div className='sign-in'>
        <form onSubmit={this.handleSubmit}>
          <input
            className='form-control'
            name='email'
            onChange={this.handleChange}
            placeholder='Email...'
            required
            type='email'
            value={this.state.email}
          />
          <br />
          <input
            className='form-control'
            name='password'
            onChange={this.handleChange}
            placeholder='Password...'
            required
            type='password'
            value={this.state.password}
          />
          <br />
          <button className='btn btn-success' style={{ width: '100%' }}>
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
