import React, { Component } from 'react';

class Grid extends Component {

    // Create grid with two random coordinate numbers
    initGrid() {
        let grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        // let grid = [];
        // for (let i = 0; i < n; i++) {
        //   const row = [];
        //   for (let j = 0; j < n; j++) {
        //     row.push(0);
        //   }
        //   grid.push(row);
        // }
        grid = this.placeRandom(this.placeRandom(grid));
        this.setState({grid});
    }

    move(direction) {
    }

    render() {
        return (
            <div>        
                {/* <div className="button" onClick={() => {this.initBoard()}}>New Game</div> */}
                
                <div className="buttons">
                    <button onClick={() => {this.move('up')}}>Up</button>
                    <button onClick={() => {this.move('down')}}>Down</button>
                    <button onClick={() => {this.move('right')}}>Right</button>
                    <button onClick={() => {this.move('left')}}>Left</button>
                </div>
            </div>
        );
    }

  }
  
  export default Grid;