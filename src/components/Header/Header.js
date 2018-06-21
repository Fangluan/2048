import React, { Component } from 'react';
import './Header.css';

import Score from './Score';
import Record from './Record';
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
          <div className="SousTitre">Le 2048 de la mort qui tue, le retour de la vengeance opus 42 <br /><h2>Edition spéciale : "Epileptic kiss"</h2></div>
          <div className="Elements">
            <button className="Reset" onclic="callReset()">Reset</button>
            {/* Ou définir la fonction callReset (qui passe au bus un event (emit) ? pas de section <script> à priori ==> faire un nouvel objet ? */}
            <div className="InfoScore">
              <Record />
              <Score />
            </div>
            <button className="Undo" onclic="callUndo()">Undo</button>
            </div>
        </div>
      );
    }
  }
  
  export default Header;