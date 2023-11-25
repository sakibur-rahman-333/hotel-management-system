import { BrowserRouter, Route } from 'react-router-dom';
import AllTimeService from './pages/all-time-servie/AllTimeService';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import InternetService from './pages/internet-service/InternetService';
import React, { Component } from 'react';
import Signin from './pages/signin/Signin';
import SwimmingPool from './pages/swimming-pool/SwimmingPool';
import All from './pages/all/All';
import Signup from './pages/signup/Signup';
import myStore from './redux/Store';

class MainComponent extends Component {
  componentDidMount() {
    const successMail = localStorage.getItem('email');
    if (successMail !== null) {
      myStore.dispatch({
        type: 'AUTH_SUCCESS',
        value: successMail,
      });
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path='/' render={() => <All />} />
        <Route
          exact
          path='/all-time-service'
          render={() => <AllTimeService />}
        />
        <Route
          exact
          path='/internet-service'
          render={() => <InternetService />}
        />
        <Route exact path='/swimming-pool' render={() => <SwimmingPool />} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Body />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default MainComponent;
