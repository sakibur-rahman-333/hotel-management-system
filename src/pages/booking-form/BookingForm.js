import axios from 'axios';
import React, { Component } from 'react';
import myStore from '../../redux/Store';
import { connect } from 'react-redux';

const mapStateToPropsBookingForm = (state) => {
  return {
    successMail: state.successMail,
    availableRooms: state.availableRooms,
  };
};

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
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
    const room = this.props.room;
    const url = 'http://localhost:3001/rooms/' + room.id;
    console.log(url);
    room.status = {
      booked: 'YES',
      reservererName: this.state.name,
      reserverPhone: this.state.phone,
    };
    await axios
      .put(url, room)
      .then(() => {
        axios.get('http://localhost:3001/rooms').then((response) => {
          myStore.dispatch({
            type: 'DATA',
            value: response.data,
          });
          var availableRooms = 0;
          response.data.map((item) => {
            if (item.status.booked === 'NO') {
              availableRooms++;
            }
          });
          myStore.dispatch({
            type: 'A_ROOM_IS_BOOKED',
            value: availableRooms,
          });
        });
      })
      .catch((error) => console.log(error));
    this.setState({
      name: '',
      phone: '',
    });
  };
  render() {
    return (
      <div className='booking-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            className='form-control'
            name='name'
            onChange={this.handleChange}
            placeholder='Your full name...'
            required
            type='text'
            value={this.state.name}
          />
          <br />
          <input
            className='form-control'
            name='phone'
            onChange={this.handleChange}
            placeholder='Your phone number...'
            required
            value={this.state.phone}
          />
          <br />
          <button
            disabled={this.props.successMail !== 'Sign In' ? false : true}
            className='btn btn-success'>
            Reserve
          </button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToPropsBookingForm)(BookingForm);
