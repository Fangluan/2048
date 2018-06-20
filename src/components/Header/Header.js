import React, { Component } from 'react';
import './Header.css';

import Score from './Score';
import Record from './Record';
// Renomer bus.js en Bus.js et déplacer ds le meme dossier que App.js ?

class Header extends Component {

    render() {
      return (
        // Changer className en id
        <div className="Header">
          <div className="Titre">2048</div>
          <div className="SousTitre">Le 2048 de la mort qui tue, le retour de la vengeance opus 42 <br />Edition spéciale : "Epileptic kiss"</div>
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