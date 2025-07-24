class Ship {
  constructor(size) {
    this._size = size;
    this._hits = 0;
  }

  hit() {
    if (this._hits === this._size) throw new Error("Ship is already sunk!");

    this._hits++;
  }

  isSunk() {
    return this._size === this._hits;
  }
}

export default Ship;
