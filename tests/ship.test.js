import Ship from "./ship";

const myShip = new Ship(3);
beforeEach(() => {
  myShip._hits = 0;
});

test("ship hit", () => {
  myShip.hit();
  expect(myShip._hits).toBe(1);
});

test("size 3 ship hit 3 times is sunk", () => {
  myShip.hit();
  myShip.hit();
  myShip.hit();
  expect(myShip.isSunk()).toBeTruthy();
});

test("size 3 ship hit 4 times throws error", () => {
  myShip.hit();
  myShip.hit();
  myShip.hit();

  expect(() => myShip.hit()).toThrow("Ship is already sunk!");
  expect(myShip._hits).toBe(3);
});
