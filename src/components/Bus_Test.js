import React, { Component } from 'react';
import bus from '../bus'

class BusTest extends Component {
    onTestCall = ({message}) => {
        bus.emit('Test_call', message)
    }

    render() {
        return <button onClick={this.onTestCall}>Test</button>
    }
}

export default BusTest