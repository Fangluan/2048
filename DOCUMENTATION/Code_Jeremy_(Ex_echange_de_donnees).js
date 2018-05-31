// bus.js
// ------
import EventEmiter from 'fbemitter'

class Bus extends EventEmitter {

}

export default new Bus()

// Score.js
// ------
import bus from './bus'

class Score extends Components {
  state = {
    score: 0,
    bgColor: 'none'
  }

  scoreChangeListener = null

  componentDidMount() {
    this.scoreChangeListener = bus.addListener('scoreChange', this.onScoreChange)
  }

  componentWillUnmount() {
    this.scoreChangeListener.remove()

    if (this.bgColorTimeout) {
      clearTimeout(this.bgColorTimeout)
    }
  }

  onScoreChange = (score) => {
    this.setState({ score, bgColor: 'red' })
    
    if (this.bgColorTimeout) {
      clearTimeout(this.bgColorTimeout)
    }

    this.bgColorTimeout = setTimeout(() => {
      this.setState({ bgColor: 'none' })
    }, 1000)
  }
  // ...

  render() {
    return <strong className={`score-color-${this.state.bgColor}`}>{this.state.score}</strong>
  }
}

// Grid.js
// -------
import bus from './bus'
import Game from './Game'

class Grid extends Component {
  constructor() {
    super()

    this.game = new Game()

    this.state = {
      matrix: this.game.matrix
    }
  }

  componentDidMount() {
    this.matrixListener = this.game.addListener('matrixChanged', this.onMatrixUpdate)
  }

  componentWillUnmount() {
    this.matrixListener.remove()
  }

  onMatrixUpdate (matrix) {
    this.setState({ matrix })
  }

  render() {
    return <div>
      {this.state.matrix.map((row) => row.map((val) => <Cell value={val} />))}
    </div>
  }
}

// game.js
// -------

class Game extends EventEmitter {
  constructor(size = 10) {
    this.matrix = [
      [null, null, 28],
      [2, 4, 5],
      [4, 5, 6],
    ]
  }

  onLeft () {
    this.emit('matrixChanged', this.matrix)
  }

  onRight () {

  }

  // ...
  compute() {
    // ...
    bus.emit('scoreChange', 5000)
    // ...
  }
  // ...
}

export default Game