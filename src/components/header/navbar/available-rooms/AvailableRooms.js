import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToPropsAvailableRooms = (state) => {
  return {
    availableRooms: state.availableRooms,
  };
};

class AvailableRooms extends Component {
  render() {
    return (
      <h5
        style={{
          fontSize: '1rem',
          color: '#fff',
          fontWeight: '400',
          marginTop: '10px',
        }}>
        Available rooms: {this.props.availableRooms}
      </h5>
    );
  }
}

export default connect(mapStateToPropsAvailableRooms)(AvailableRooms);
