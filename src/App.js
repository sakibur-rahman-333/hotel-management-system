import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import MainComponent from './MainComponent';
import myStore from './redux/Store';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios
      .get('http://localhost:3001/rooms')
      .then((response) => {
        myStore.dispatch({
          type: 'DATA',
          value: response.data,
        });
        var availableRooms = 0;
        const rooms = response.data.map((item) => {
          if (item.status.booked === 'NO') {
            availableRooms++;
          }
        });
        myStore.dispatch({
          type: 'A_ROOM_IS_BOOKED',
          value: availableRooms,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <Provider store={myStore}>
        <MainComponent />
      </Provider>
    );
  }
}

export default App;
