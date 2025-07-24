import Gameboard from "./gameboard";

const myGameboard = new Gameboard();

test("place ship", () => {
  myGameboard.placeShip("A1");
  expect(myGameboard._grid[0][0]).toBeTruthy();
});
