import React, { Component } from 'react';

import Grid from './Grid';
import Game from './Game';

class Content extends Component {

    render() {
      return (
        <div className="content">
          <Grid />
          <Game />
        </div>
      );
    }
  }
  
  export default Content;