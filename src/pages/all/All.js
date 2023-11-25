import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowRooms from '../show-rooms/ShowRooms';
import '../show-rooms/ShowRooms.css';

const mapStateToPropsAll = (state) => {
  return {
    data: state.data,
  };
};

class All extends Component {
  render() {
    return <ShowRooms category='all' data={Array.from(this.props.data)} />;
  }
}

export default connect(mapStateToPropsAll)(All);
