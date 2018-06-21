import React, { Component } from 'react';
import bus from '../Bus'


class Score extends Component {
  state = {
    increment: null,
    pop_increment:null,
    score : 0,
    Score_Flash: 'Passif',
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
// EFFET D'UNE UPDATE DU SCORE
  UpdateScore_Effet = (new_score) => {
  if (this.state.score !== new_score)  //Ce controle devrait être dans l'objet grid et précéder l'emit de UpdateScore!
    this.setState({
      increment : "".concat('+ ', new_score - this.state.score),
      score : new_score,
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
      
    }, 500)
  }

  render() {
    return (
      <div className="Container_Score">
        <div>Score : </div>
        <div> 
          <strong className={`Flash_Update_Score_${this.state.Score_Flash}`}>
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
