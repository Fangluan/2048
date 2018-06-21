import React, { Component } from 'react';
import './App.css';
import bus from '../components/Bus'

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Grid from './Content/Grid';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
