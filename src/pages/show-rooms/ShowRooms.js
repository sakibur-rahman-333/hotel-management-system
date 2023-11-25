import React, { Component } from 'react';
import './ShowRooms.css';
import {
  Button,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  CloseButton,
} from 'reactstrap';
import BookingForm from '../booking-form/BookingForm';

class ShowRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: '',
      modalOpen: false,
    };
  }

  selectRoom = (item) => {
    this.setState({
      room: item,
      modalOpen: true,
    });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    const rooms = this.props.data.map((item) => {
      if (
        item.category === this.props.category ||
        this.props.category === 'all'
      ) {
        // console.log(item);
        return (
          <div key={item.id} style={{ margin: '20px' }}>
            <Card style={{ width: '18rem' }}>
              <img
                src={item.path}
                alt='image'
                className='image'
                title={item.name}
              />
              <CardBody>
                <Button
                  disabled={item.status.booked === 'NO' ? false : true}
                  onClick={() => this.selectRoom(item)}>
                  {item.status.booked === 'YES' ? 'Booked' : 'View'}
                </Button>
              </CardBody>
            </Card>
          </div>
        );
      }
    });
    return (
      <div>
        <div className='showRooms'>{rooms}</div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader
            style={{
              position: 'absolute',
              right: '4px',
              top: '4px',
            }}>
            <CloseButton id='close-button' onClick={this.toggleModal} />
          </ModalHeader>
          <ModalHeader style={{ textTransform: 'capitalize' }}>
            {this.state.room.name}
          </ModalHeader>
          <ModalBody>
            <Card style={{ width: '100%' }}>
              <img src={this.state.room.path} alt='image' className='image' />
            </Card>

            <p style={{ fontWeight: 'bold' }}>Fill up to reserve this room.</p>
            <BookingForm room={this.state.room} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ShowRooms;
