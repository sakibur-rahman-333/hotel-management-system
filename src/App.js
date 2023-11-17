import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import MainComponent from './MainComponent';
import myStore from './redux/Store';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <MainComponent />
      </Provider>
    );
  }
}

export default App;
