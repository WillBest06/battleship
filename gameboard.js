import Ship from "./ship";

class Gameboard {
  constructor() {
    const noShip = { occupant: null, isHit: false };

    this._grid = [
      [
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
      ],
      [
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
      ],
      [
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
      ],
      [
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
      ],
      [
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
      ],
      [
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
      ],
      [
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
      ],
      [
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
      ],
      [
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
      ],
      [
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
        noShip,
      ],
    ];
  }
  placeShip(coordinate, size) {
    if (!/^[A-J](10|[1-9])$/.test(coordinate))
      throw new Error("Invalid coordinate");

    let yCoord = coordinate.substr(0, 1);
    let xCoord = coordinate.substr(1) - 1; // minus 1 for array index starting at 0

    yCoord = this.convertLetterToDigit(yCoord);

    this._grid[yCoord][xCoord] = { occupant: new Ship(size), isHit: false };
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
