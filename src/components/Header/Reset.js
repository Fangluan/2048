import React, { Component } from 'react';
import bus from '../Bus'


class Bouton_Reset extends Component {
    state = {
        Nb_Reset : 0
    }
    
    Clic_Reset = () => {
        bus.emit('ResetGrid'),
        this.setState({
            Nb_Reset : this.state.Nb_Reset+1
        })
    }
  

  render() {
    return (
        <button className="Bouton Reset" onClick={this.Clic_Reset}>
            <strong>
                Reset <em>({this.state.Nb_Reset})</em> 
            </strong>
        </button>
    );
  }
}

export default Bouton_Reset;