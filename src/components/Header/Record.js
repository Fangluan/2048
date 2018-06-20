import React, { Component } from 'react';
import '../App.css';
import bus from '../../bus'

//import BusTest from '../Bus_Test';

class Record extends Component {
  state = {
    record: 0
  }

  componentDidMount() {
    this.recordListener = bus.addListener('RECORD', this.onNewRecord)
  }

  componentWillUnmount() {
      this.recordListener.remove()
  }

  onNewRecord = (record) => {
      this.setState({ record })
  }

  render() {
    return (
      <div className="Record">
        <div>Record :</div>
        <div> {this.state.record}</div> 
      </div>
    );
  }
}

export default Record;
