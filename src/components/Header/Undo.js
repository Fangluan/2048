import React, { Component } from 'react';
import bus from '../Bus'


class Bouton_Undo extends Component {
    state = {
        Nb_Undo : 3
    }
    
    Clic_Undo = () => {
        if(this.state.Nb_Undo>0){
            bus.emit('UndoMove'),
            this.setState({
                Nb_Undo : this.state.Nb_Undo-1
            })
        }
        //Ajouter un else : si l'user continu de cliquer ss token, on popup un message
    }

    //Ajouter un OnEvent sur le reset : réinitialiser cet objet ou faire un setState pr remettre le compteur à 3, si non la porté du compteur est "jusqu'à ce que recharge la page"
  

  render() {
    return (
        <button className="Bouton Undo" onClick={this.Clic_Undo}>
            <strong>
                Undo <em>({this.state.Nb_Undo})</em> 
            </strong>
        </button>
    );
  }
}

export default Bouton_Undo;