import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowRooms from '../show-rooms/ShowRooms';

const mapStateToPropsSwimmingPool = (state) => {
  return {
    data: state.data,
  };
};

class SwimmingPool extends Component {
  render() {
    return (
      <ShowRooms category='swimming-pool' data={Array.from(this.props.data)} />
    );
  }
}

export default connect(mapStateToPropsSwimmingPool)(SwimmingPool);
