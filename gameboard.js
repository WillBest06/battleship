class Gameboard {
  constructor() {
    this._grid = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
  }
  placeShip(coordinate) {
    const coordinates = coordinate.split("");

    let yCoord = coordinates.slice(0, 1)[0]; // [0] converts array to string
    let xCoord = coordinates.slice(1)[0] - 1; // minus 1 for 0 indexing

    yCoord = this.convertLetterToDigit(yCoord);

    this._grid[yCoord][xCoord] = true;
  }

  convertLetterToDigit(letter) {
    switch (letter) {
      case "A":
        letter = 0;
        break;
      case "B":
        letter = 1;
        break;
      case "C":
        letter = 2;
        break;
      case "D":
        letter = 3;
        break;
      case "E":
        letter = 4;
        break;
      case "F":
        letter = 5;
        break;
      case "G":
        letter = 6;
        break;
      case "H":
        letter = 7;
        break;
      case "I":
        letter = 8;
        break;
      case "J":
        letter = 9;
        break;

      default:
        break;
    }

    return letter;
  }
}

export default Gameboard;
