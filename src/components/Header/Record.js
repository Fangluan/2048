import React, { Component } from 'react';
import bus from '../Bus'


class Record extends Component {
  state = {
    increment: null,
    pop_increment:null,
    record : 30, //Pr la démo, repasser à 0 après
    REcord_Flash: 'Passif',
    AnnimScoreTimeout: null
  }

// INITIALISATION LISTENER UpdateScore
  UpdateScore_Ecouteur = null

  componentDidMount() {
    this.UpdateScore_Ecouteur = bus.addListener('UpdateScore', this.UpdateScore_Effet)
  }

  componentWillUnmount() {
    this.UpdateScore_Ecouteur.remove()

    if (this.Score_FlashTimeout) {
      clearTimeout(this.Score_FlashTimeout)
    }
  }
// EFFET D'UNE UPDATE DU record
  UpdateScore_Effet = (new_score) => {
  if (this.state.record < new_score)  //Ce controle devrait être dans l'objet grid et précéder l'emit de UpdateScore!
    this.setState({
      increment : "".concat('+ ', new_score - this.state.record),
      record : new_score,
      Score_Flash: 'Actif'
    })
    
    if (this.AnnimScoreTimeout) {
      clearTimeout(this.AnnimScoreTimeout)
    }

    this.AnnimScoreTimeout = setTimeout(() => {
      this.setState({
        Score_Flash: 'Passif',
        increment:null
       })
      
    }, 1000)
  }

  render() {
    return (
      <div className="Container_Record">
        <div>Record : </div>
        <div> 
          <strong className={`Flash_Update_Record_${this.state.Score_Flash}`}>
             {this.state.record}
           </strong>
           <em className='Increment'>
            {this.state.increment}
          </em>
        </div> 
      </div>
    );
  }
}

export default Record;
