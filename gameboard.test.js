import Gameboard from "./gameboard";
import Ship from "./ship";

const myGameboard = new Gameboard();

test("place ship", () => {
  myGameboard.placeShip("A1", 1);
  const size1Ship = new Ship(1);

  expect(myGameboard._grid[0][0]).toEqual({
    occupant: size1Ship,
    isHit: false,
  });
});

test("place ship at invalid coordinate", () => {
  expect(() => myGameboard.placeShip("A100", 1)).toThrow("Invalid coordinate");
});

test("convert letter coordinate to grid index", () => {
  expect(myGameboard.convertLetterToDigit("B")).toBe(1);
});

test("receive attack on empty square", () => {
  myGameboard.receiveAttack("A2");
  expect(myGameboard[0][1]).toBe();
});
