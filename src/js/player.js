import Gameboard from "./gameboard";
class Player {
  constructor(type) {
    this._type = type;
    this._gameboard = new Gameboard();
  }
}

export default Player;
