import React, { Component } from 'react';

import Score from './Score';

class Header extends Component {

    render() {
      return (
        <div className="header">
          <Score />
        </div>
      );
    }
  }
  
  export default Header;