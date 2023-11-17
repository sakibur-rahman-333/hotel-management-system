import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SampleOne from './pages/SampleOne';
import SampleTwo from './pages/SampleTwo';
import SampleThree from './pages/SampleThree';
import SampleFour from './pages/SampleFour';
import Signin from './pages/Signin';

class MainComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path='/' render={() => <SampleOne />} />
        <Route exact path='/sample-one' render={() => <SampleOne />} />
        <Route exact path='/sample-two' render={() => <SampleTwo />} />
        <Route exact path='/sample-three' render={() => <SampleThree />} />
        <Route exact path='/sample-four' render={() => <SampleFour />} />
        <Route exact path='/signin' component={Signin} />
        <Body />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default MainComponent;
