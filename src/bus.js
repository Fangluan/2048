// bus.js
// ------
import { EventEmitter } from 'fbemitter'

// LISTE DES EVENTS
//     Direction({U, R, D, L})
//         Emit: Index (keyboard ou button fleche)
//         On: Game.js
//     Update_Score(int)
//         Emit: Game.js
//         On: Record.js, Score.js
//     Update_Grille()
//         Emit: Game.js
//         On: Grille.js
//     Win()
//         Emit: Game.js
//         On: Index   
//     Losse()
//         Emit: Game.js
//         On: Index
//     Reset()
//         Emit: Index(bouton Reset)
//         On: Game.js, Score.js
//     Undo()
//         Emit: Index(bouton Undo)
//         On: Game.js, Score.js, Record.js

export class Bus extends EventEmitter {

}

export default new Bus()