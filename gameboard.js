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
    this._ships = [];
  }
  placeShip(coordinate, size, direction) {
    if (!/^[A-J](10|[1-9])$/.test(coordinate))
      throw new Error("Invalid coordinate");

    let [yIndex, xIndex] = this.getCoordinateIndeces(coordinate);

    const newShip = new Ship(size);

    for (let i = 0; i < size; i++) {
      this._grid[yIndex][xIndex] = { occupant: newShip, isHit: false };

      if (direction === "y") {
        yIndex++;
      } else if ((direction = "x")) {
        xIndex++;
      }
    }

    this._ships.push(newShip);
  }

  receiveAttack(coordinate) {
    let [yIndex, xIndex] = this.getCoordinateIndeces(coordinate);

    this._grid[yIndex][xIndex]["isHit"] = true;
    if (this._grid[yIndex][xIndex]["occupant"] !== null) {
      this._grid[yIndex][xIndex]["occupant"].hit();
    }
  }

  getCoordinateIndeces(coordinate) {
    let yIndex = coordinate.substr(0, 1);
    yIndex = this.convertLetterToDigit(yIndex);
    let xIndex = coordinate.substr(1) - 1; // minus 1 for array index starting at 0

    return [yIndex, xIndex];
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

  allShipsSunk() {
    let shipsSunk = true;

    this._ships.forEach((ship) => {
      if (!ship.isSunk()) shipsSunk = false;
    });

    return shipsSunk;
  }
}

export default Gameboard;
