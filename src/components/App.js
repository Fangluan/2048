import React, { Component } from 'react';
import './App.css';
import bus from '../bus'

import BusTest from './Bus_Test';
import Score from './Score';

class App extends Component {

  render() {
    return (
      <div className="App">
        Ici div de App
        <BusTest />
        <Score />
      </div>
    );
  }
}

export default App;
