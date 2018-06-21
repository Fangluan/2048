import React, { Component } from 'react';
import './Header.css';

import bus from '../Bus'


class Score extends Component {
  state = {
    increment: null,
    pop_increment:null,
    score : 0,
    Font_Color: 'Passif',
    AnnimScoreTimeout: null
  }

// INITIALISATION LISTENER UpdateScore
  UpdateScore_Ecouteur = null

  componentDidMount() {
    this.UpdateScore_Ecouteur = bus.addListener('UpdateScore', this.UpdateScore_Effet)
  }

  componentWillUnmount() {
    this.UpdateScore_Ecouteur.remove()

    if (this.Font_ColorTimeout) {
      clearTimeout(this.Font_ColorTimeout)
    }
  }
// EFFET D'UNE UPDATE DU SCORE
  UpdateScore_Effet = (new_score) => {
  if (this.state.score !== new_score)  //Ce controle devrait être dans l'objet grid et précéder l'emit de UpdateScore!
    this.setState({
      increment : "".concat('+ ', new_score - this.state.score),
      score : new_score,
      Font_Color: 'Actif'
    })
    
    if (this.AnnimScoreTimeout) {
      clearTimeout(this.AnnimScoreTimeout)
    }

    this.AnnimScoreTimeout = setTimeout(() => {
      this.setState({
        Font_Color: 'Passif',
        increment:null
       })
      
    }, 500)
  }

  render() {
    return (
      <div className="Container_Score">
        <div>Score : </div>
        <div> 
          <strong className={`Flash_UpdateScore_${this.state.Font_Color}`}>
             {this.state.score}
           </strong>
           <em className='Increment'>
            {this.state.increment}
          </em>
        </div> 
      </div>
    );
  }
}

export default Score;
