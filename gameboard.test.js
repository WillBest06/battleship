import Gameboard from "./gameboard";
import Ship from "./ship";

const myGameboard = new Gameboard();

test("place ship vertically", () => {
  myGameboard.placeShip("A1", 2, "y");

  expect(myGameboard._grid[0][0]).toEqual({
    occupant: { _size: 2, _hits: 0 },
    isHit: false,
  });
  expect(myGameboard._grid[0][0]["occupant"]).toBeInstanceOf(Ship);

  expect(myGameboard._grid[1][0]).toEqual({
    occupant: { _size: 2, _hits: 0 },
    isHit: false,
  });
  expect(myGameboard._grid[1][0]["occupant"]).toBeInstanceOf(Ship);
});

test("place ship horizontally", () => {
  myGameboard.placeShip("A1", 2, "x");

  expect(myGameboard._grid[0][0]).toEqual({
    occupant: { _size: 2, _hits: 0 },
    isHit: false,
  });
  expect(myGameboard._grid[0][0]["occupant"]).toBeInstanceOf(Ship);

  expect(myGameboard._grid[0][1]).toEqual({
    occupant: { _size: 2, _hits: 0 },
    isHit: false,
  });
  expect(myGameboard._grid[0][1]["occupant"]).toBeInstanceOf(Ship);
});

test("place ship at invalid coordinate", () => {
  expect(() => myGameboard.placeShip("A100", 1, "y")).toThrow(
    "Invalid coordinate"
  );
});

test("convert letter coordinate to grid index", () => {
  expect(myGameboard.convertLetterToDigit("B")).toBe(1);
});

test("receive attack on empty square", () => {
  let squareCoordinate = "C2";
  myGameboard.receiveAttack(squareCoordinate);
  let [yIndex, xIndex] = myGameboard.getCoordinateIndeces(squareCoordinate);
  expect(myGameboard._grid[yIndex][xIndex]).toEqual({
    occupant: null,
    isHit: true,
  });
});

test("receive attack on ship square", () => {
  let squareCoordinate = "A1";
  myGameboard.receiveAttack(squareCoordinate);
  let [yIndex, xIndex] = myGameboard.getCoordinateIndeces(squareCoordinate);
  expect(myGameboard._grid[yIndex][xIndex]).toEqual({
    occupant: { _hits: 1, _size: 2 },
    isHit: true,
  });

  expect(myGameboard._grid[yIndex][xIndex]["occupant"].isSunk()).toBeFalsy();
});

test("keep track of ships on board", () => {
  expect(myGameboard._ships.length).toBe(2);
  expect(myGameboard._ships[0]).toBeInstanceOf(Ship);
  expect(myGameboard._ships[0].isSunk()).toBeFalsy();
});

test("all ships not sunk", () => {
  expect(myGameboard.allShipsSunk()).toBeFalsy();
});
