import Player from "./player";
import Gameboard from "./gameboard";

const myPlayer = new Player("human");
const myComputer = new Player("computer");

test("create human player", () => {
  expect(myPlayer._type).toBe("human");
  expect(myPlayer._gameboard).toBeInstanceOf(Gameboard);
});

test("create computer player", () => {
  expect(myComputer._type).toBe("computer");
  expect(myComputer._gameboard).toBeInstanceOf(Gameboard);
});
