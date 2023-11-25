import { connect } from 'react-redux';
import React, { Component } from 'react';
import ShowRooms from '../show-rooms/ShowRooms';

const mapStateToPropsAllTimeService = (state) => {
  return {
    data: state.data,
  };
};

class AllTimeService extends Component {
  render() {
    return (
      <ShowRooms
        category='all-time-service'
        data={Array.from(this.props.data)}
      />
    );
  }
}

export default connect(mapStateToPropsAllTimeService)(AllTimeService);
