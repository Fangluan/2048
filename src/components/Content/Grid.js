import React, { Component } from "react";
import "./Grid.css";
// import Game from 'Game' A intégrer quand déplacement des fonctions dans cet objet;


class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: null,
      score: 0,
      gameOver: false,
      message: null
    };
  }

  // Création d'une matrice 5x5 (à adapter dans le cas où l'on souhaiterait une matrice modifiable en fonction de la volonté du joueur)
  initGrid() {
    let grid = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    grid = this.arbitraryPosition(this.arbitraryPosition(grid));
    this.setState({ grid });
  }

  // Récupérer les coordonnées des cellules vides. r = row ; c = column
  getEmptyCells(grid) {
    const emptyCells = [];

    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c] === 0) {
          // push => ajout de valeurs à notre grille
          emptyCells.push([r, c]);
        }
      }
    }
    // Retourne les coordonnées des cellules vides
    return emptyCells;
  }

  // Initier deux valeurs au lancement du jeu (modifiable entre les 2 ou 4)
  initialNumbers() {
    const startingNumbers = [2]//, 4];// r1 Propose d'initialisé à 1 seulle valeur
    const randomNumber =
      startingNumbers[Math.floor(Math.random() * startingNumbers.length)];
    return randomNumber;
  }

  // Permet de placer de nouvelles valeurs dans des cases vides
  arbitraryPosition(grid) {
    const emptyCells = this.getEmptyCells(grid);
    const randomCoordinate =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const randomNumber = this.initialNumbers();
    grid[randomCoordinate[0]][randomCoordinate[1]] = randomNumber;
    return grid;
  }

  // La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON. Va permettre de comparer deux grilles pour vérifier les mouvements
  // (déplacements). Original = stockée. Updated = mise à jour.
  // r1 Le bouton undo doit call une fonction qui : transforme grid en l'état de sortie de JSON.stringify(original) ? C'est bien un state de contenu ? Il est stocké en dur ce json ?
  restingMovements(original, updated) {
    return JSON.stringify(updated) !== JSON.stringify(original) ? true : false;
  }

  // Déplace le contenu de la grille en fonction des déplacements demandés (par clavier ou boutons) et vérifie si gameOver (plus de mouvements possibles).
  // Chacun des 4 mouvements possibles est vérifié. Si mouvement encore possible, une nouvelle cellule apparaît d'où rappel arbitraryPosition.
  // Je ne pense pas que l'ajout du bouton UNDO ait un impact sur le code.
  move(direction) {
    // ! => pas égal
    if (!this.state.gameOver) {
      if (direction === "up") {
        const movedUp = this.moveUp(this.state.grid); 
        if (this.restingMovements(this.state.grid, movedUp.grid)) {
          const upWithRandom = this.arbitraryPosition(movedUp.grid);

          if (this.checkForGameOver(upWithRandom)) {
            this.setState({
              grid: upWithRandom,
              gameOver: true,
              message: "Game over!"
            });
          } else {
            this.setState({
              grid: upWithRandom,
              score: this.state.score + movedUp.score
            });
          }
        }
      } else if (direction === "right") {
        const movedRight = this.moveRight(this.state.grid);
        if (this.restingMovements(this.state.grid, movedRight.grid)) {
          const rightWithRandom = this.arbitraryPosition(movedRight.grid);

          if (this.checkForGameOver(rightWithRandom)) {
            this.setState({
              grid: rightWithRandom,
              gameOver: true,
              message: "Game over!"
            });
          } else {
            this.setState({
              grid: rightWithRandom,
              score: this.state.score + movedRight.score
            });
          }
        }
      } else if (direction === "down") {
        const movedDown = this.moveDown(this.state.grid);
        if (this.restingMovements(this.state.grid, movedDown.grid)) {
          const downWithRandom = this.arbitraryPosition(movedDown.grid);

          if (this.checkForGameOver(downWithRandom)) {
            this.setState({
              grid: downWithRandom,
              gameOver: true,
              message: "Game over!"
            });
          } else {
            this.setState({
              grid: downWithRandom,
              score: this.state.score + movedDown.score
            });
          }
        }
      } else if (direction === "left") {
        const movedLeft = this.moveLeft(this.state.grid);
        if (this.restingMovements(this.state.grid, movedLeft.grid)) {
          const leftWithRandom = this.arbitraryPosition(movedLeft.grid);

          if (this.checkForGameOver(leftWithRandom)) {
            this.setState({
              grid: leftWithRandom,
              gameOver: true,
              message: "Game over!"
            });
          } else {
            this.setState({
              grid: leftWithRandom,
              score: this.state.score + movedLeft.score
            });
          }
        }
      }
    } else {
      this.setState({
        message: "Game over. Veuillez appuyer sur le bouton reset."
      });
    }
  }

  // Codage des différentes actions, notamment de fusion à éventuellement mener, suivant les mouvements demandés au préalable.

  // Pour mouvements vers la droite
  moveUp(inputGrid) {
    let displacedRight = this.displaceRight(inputGrid);
    let grid = [];
    let score = 0;

    // Décale tous les chiffres vers la droite
    for (let r = 0; r < displacedRight.length; r++) {
      let row = [];
      for (let c = 0; c < displacedRight[r].length; c++) {
        let current = displacedRight[r][c];
        // unshift => méthode qui ajoute un ou plusieurs éléments au début de notre grille et renvoie la nouvelle longueur (length) du tableau.
        // push => ajout de valeurs à notre grille
        current === 0 ? row.unshift(current) : row.push(current);
      }
      grid.push(row);
    }

    // Fusionne tous les chiffres le cas échéant et décale le nouveau chiffre vers la droite.
    for (let r = 0; r < grid.length; r++) {
      // -- => Décrémente
      for (let c = grid[r].length - 1; c >= 0; c--) {
        if (grid[r][c] > 0 && grid[r][c] === grid[r][c - 1]) {
          grid[r][c] = grid[r][c] * 2;
          grid[r][c - 1] = 0;
          score += grid[r][c];
        } else if (grid[r][c] === 0 && grid[r][c - 1] > 0) {
          grid[r][c] = grid[r][c - 1];
          grid[r][c - 1] = 0;
        }
      }
    }

    grid = this.displaceLeft(grid);

    return { grid, score };
  }

  moveRight(inputGrid) {
    let grid = [];
    let score = 0;

    for (let r = 0; r < inputGrid.length; r++) {
      let row = [];
      for (let c = 0; c < inputGrid[r].length; c++) {
        let current = inputGrid[r][c];
        current === 0 ? row.unshift(current) : row.push(current);
      }
      grid.push(row);
    }

    for (let r = 0; r < grid.length; r++) {
      for (let c = grid[r].length - 1; c >= 0; c--) {
        if (grid[r][c] > 0 && grid[r][c] === grid[r][c - 1]) {
          grid[r][c] = grid[r][c] * 2;
          grid[r][c - 1] = 0;
          score += grid[r][c];
        } else if (grid[r][c] === 0 && grid[r][c - 1] > 0) {
          grid[r][c] = grid[r][c - 1];
          grid[r][c - 1] = 0;
        }
      }
    }

    return { grid, score };
  }

  moveDown(inputGrid) {
    let displacedRight = this.displaceRight(inputGrid);
    let grid = [];
    let score = 0;

    for (let r = 0; r < displacedRight.length; r++) {
      let row = [];
      for (let c = displacedRight[r].length - 1; c >= 0; c--) {
        let current = displacedRight[r][c];
        current === 0 ? row.push(current) : row.unshift(current);
      }
      grid.push(row);
    }

    // Combine les nombres et déplace vers la gauche
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid.length; c++) {
        if (grid[r][c] > 0 && grid[r][c] === grid[r][c + 1]) {
          grid[r][c] = grid[r][c] * 2;
          grid[r][c + 1] = 0;
          score += grid[r][c];
        } else if (grid[r][c] === 0 && grid[r][c + 1] > 0) {
          grid[r][c] = grid[r][c + 1];
          grid[r][c + 1] = 0;
        }
      }
    }

    grid = this.displaceLeft(grid);

    return { grid, score };
  }

  moveLeft(inputGrid) {
    let grid = [];
    let score = 0;

    // Décale tous les chiffres vers la gauche
    for (let r = 0; r < inputGrid.length; r++) {
      let row = [];
      for (let c = inputGrid[r].length - 1; c >= 0; c--) {
        let current = inputGrid[r][c];
        current === 0 ? row.push(current) : row.unshift(current);
      }
      grid.push(row);
    }

    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid.length; c++) {
        if (grid[r][c] > 0 && grid[r][c] === grid[r][c + 1]) {
          grid[r][c] = grid[r][c] * 2;
          grid[r][c + 1] = 0;
          score += grid[r][c];
        } else if (grid[r][c] === 0 && grid[r][c + 1] > 0) {
          grid[r][c] = grid[r][c + 1];
          grid[r][c + 1] = 0;
        }
      }
    }

    return { grid, score };
  }

  displaceRight(matrix) {
    let result = [];

    for (let c = 0; c < matrix.length; c++) {
      let row = [];
      for (let r = matrix.length - 1; r >= 0; r--) {
        row.push(matrix[r][c]);
      }
      result.push(row);
    }

    return result;
  }

  displaceLeft(matrix) {
    let result = [];

    for (let c = matrix.length - 1; c >= 0; c--) {
      let row = [];
      for (let r = matrix.length - 1; r >= 0; r--) {
        row.unshift(matrix[r][c]);
      }
      result.push(row);
    }

    return result;
  }

  // Vérifie s'il reste des mouvements possibles
  checkForGameOver(grid) {
    let moves = [
      this.restingMovements(grid, this.moveUp(grid).grid),
      this.restingMovements(grid, this.moveRight(grid).grid),
      this.restingMovements(grid, this.moveDown(grid).grid),
      this.restingMovements(grid, this.moveLeft(grid).grid)
    ];

    return moves.includes(true) ? false : true;
  }

  // Permet de donner "vie" aux boutons latéraux
  componentWillMount() {
    this.initGrid();
    const body = document.querySelector("body");
    body.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e) {
    const up = 38;
    const right = 39;
    const down = 40;
    const left = 37;
    const z = 90;

    if (e.keyCode === up) {
      this.move("up");
    } else if (e.keyCode === right) {
      this.move("right");
    } else if (e.keyCode === down) {
      this.move("down");
    } else if (e.keyCode === left) {
      this.move("left");
    } else if (e.keyCode === z) {
      this.move();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  // Instanciation des boutons fléchés (modifier le css pour les transformer en flèches et ajuster les margin pour clean).
  // J'ai un petit souci avec le CSS concernant notamment l'alignement interne des textes (seul "right" est centré)
  //r1 Si on a le temps, je vais tacher d'ajouter un petite effet de "flash" sur le bouton correspondant lorsque on clic ou qu'on utilise une feche du clavier
  render() {
    return (
      <div className="grid">
        <div className="buttons">
          <div
            className="buttonup"
            onClick={() => {
              this.move("up");
            }}
          >
            Up
          </div>
        </div>
        <div className="buttons">
          <div className="buttonsize">
            <div className="buttonleft" 
              onClick={() => {
                this.move("left");
              }}
            >
              Left
              <img src="./baseline-keyboard_arrow_left-24px.svg" alt="Flèche gauche">  
              </img>
            </div>
          </div>
          <table>
            {this.state.grid.map((row, i) => <Row key={i} row={row} />)}
          </table>
          <div className="buttonsize">
            <div
              className="buttonright"
              onClick={() => {
                this.move("right");
              }}
            >
              Right
            </div>
          </div>
        </div>
        <div className="buttons">
          <div
            className="buttondown"
            onClick={() => {
              this.move("down");
            }}
          >
            Down
          </div>
        </div>

        <p>{this.state.message}</p>
      </div>
    );
  }
}

// Permet de bloquer la fonction intiale de déplacement de la page avec les touches
window.addEventListener(
  "keydown",
  function(e) {
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);

// Permet de modifier la "class" d'une nouvelle cellule issue de la fusion de "nombres". Vous pouvez modifier le spectre de couleurs dans le CSS.
const Row = ({ row }) => {
  return <tr>{row.map((cell, i) => <Cell key={i} cellValue={cell} />)}</tr>;
};

const Cell = ({ cellValue }) => {
  let color = "cell";
  let value = cellValue === 0 ? "" : cellValue;
  if (value) {
    color += ` color-${value}`;
  }

  return (
    <td>
      <div className={color}>
        <div className="number">{value}</div>
      </div>
    </td>
  );
};

export default Grid;
