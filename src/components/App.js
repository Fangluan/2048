import React, { Component } from 'react';
import './App.css';
import bus from '../bus'

import BusTest from './Bus_Test';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BusTest />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
