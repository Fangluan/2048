import React, { Component } from 'react';
import './Header.css';

import Score from './Score';
import Record from './Record';
import Bouton_Undo from './Undo';
import Bouton_Reset from './Reset'
import bus from '../Bus'


  

class Header extends Component {
  // Ajout des listeners

  //Update_Score
  componentDidMount() {
    this.Update_Score = bus.addListener('Update_Score', this.Update_Score)
  }
  componentWillUnmount() {
    this.Update_Score.remove()

    if (this.bgColorTimeout) {
      clearTimeout(this.bgColorTimeout)
    }
  }

    render() {
      return (
        // Changer className en id
        <div className="Header">
          <div className="Titre"><h1>2048 et des brouettes</h1></div>
          <div className="SousTitre">Le 2048 de la mort qui tue, le retour de la vengeance, opus 42 <br /><h2>Edition spéciale : "Epileptic kiss"</h2></div>
          <div className="Elements">
            <Bouton_Reset />
           
            <div className="InfoScore">
              <Record />
              <Score />
            </div>

            <Bouton_Undo />
          </div>
        </div>
      );
    }
  }
  
  export default Header;