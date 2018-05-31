import React, { Component } from 'react';
import bus from '../bus'

class BusTest extends Component {
    emitTestCall = ({message}) => {
        bus.emit('Test_call', message)
    }
    onTestCall = ({message}) => {
        bus.on('Test_call', message)
    }
    render() {
         return //(
            //Tentative d'affichage d'une div simple sans Event
            <div>Div qui traine</div>//,
            // <button onClick={this.emitTestCall("toto")}>Test</button>,
            // <div>{this.onTestCall}</div>
            
        // )
    }
}

export default BusTest