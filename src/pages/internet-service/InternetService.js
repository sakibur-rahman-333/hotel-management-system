import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowRooms from '../show-rooms/ShowRooms';

const mapStateToPropsInternetService = (state) => {
  return {
    data: state.data,
  };
};

class InternetService extends Component {
  render() {
    return (
      <ShowRooms
        category='internet-service'
        data={Array.from(this.props.data)}
      />
    );
  }
}

export default connect(mapStateToPropsInternetService)(InternetService);
