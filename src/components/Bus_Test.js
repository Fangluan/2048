import React, { Component } from 'react';
import bus from '../bus'

class BusTest extends Component {
    emitTestCall = () => {
        bus.emit('SCORE', 10000)
    }

    render() {
         return (
            //Tentative d'affichage d'une div simple sans Event
            <div> 
                <div>Ici séquence de div de bus_Test</div>
                <button onClick={this.emitTestCall}>Lancer un emit 'score' avec l'argument 10000</button>
                <div></div>
            </div>
        )
    }
}

export default BusTest