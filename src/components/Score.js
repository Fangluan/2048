import React, { Component } from 'react';
import './App.css';
import bus from '../bus'

import BusTest from './Bus_Test';

class Score extends Component {
  state = {
    score: 0
  }

  componentDidMount() {
    this.scoreListener = bus.addListener('SCORE', this.onNewScore)
  }

  componentWillUnmount() {
      this.scoreListener.remove()
  }

  onNewScore = (score) => {
      this.setState({ score })
  }

  render() {
    return (
      <div className="Score">
        {this.state.score}
      </div>
    );
  }
}

export default Score;
