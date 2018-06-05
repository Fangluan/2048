import React, { Component } from 'react';
import './Header.css';

import Score from './Score';
import Record from './Record';
class Header extends Component {

    render() {
      return (
        <div className="Header">
          <div className="Titre">2048</div>
          <div className="SousTitre">Le 2048 de la mort qui tue, le retour de la vengeance opus 42</div>
          <div className="Elements">
            <button className="Reset" onclic="callReset()">Reset</button>
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