import Gameboard from "./gameboard.js";

class UI {
  static renderBoard(gameboard, container) {
    for (let i = 0; i < gameboard._grid.length; i++) {
      const currentRow = gameboard._grid[i];
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");

      for (let j = 0; j < currentRow.length; j++) {
        const squareElement = this.squareStyler(currentRow[j]);
        squareElement.setAttribute("data-row", i);
        squareElement.setAttribute("data-col", j);
        rowElement.appendChild(squareElement);
      }

      container.appendChild(rowElement);
    }
  }

  static shipPlaceHover(gameboardElement, startingSquare, axis, length) {
    // clear gameboard of any previous ship hovers
    const rowElements = gameboardElement.querySelectorAll(".row");
    rowElements.forEach((row) => {
      const squareElements = row.querySelectorAll(".square");
      squareElements.forEach((square) => square.classList.remove("ship-hover"));
    });

    let currentSquare = startingSquare;

    if (axis === "x") {
      for (let i = 0; i < length; i++) {
        if (currentSquare === null) break;
        currentSquare.classList.add("ship-hover");
        currentSquare = currentSquare.nextElementSibling;
      }
    }

    if (axis === "y") {
      for (let i = 0; i < length; i++) {
        currentSquare.classList.add("ship-hover");
        const nextRow = currentSquare.parentElement.nextElementSibling;
        currentSquare = nextRow.querySelector(
          `div[data-col= "${currentSquare.getAttribute("data-col")}"]`
        );
      }
    }
  }

  static squareStyler(squareInfo) {
    const squareElement = document.createElement("div");
    squareElement.classList.add("square");

    if (squareInfo.occupant !== null && squareInfo.isHit) {
      squareElement.classList.remove("occupied");
      squareElement.classList.add("hit");
    }

    if (squareInfo.occupant !== null) {
      squareElement.classList.add("occupied");
    }
    return squareElement;
  }

  static updateAxis(axis) {
    const axisHeader = document.querySelector("h2");
    axisHeader.textContent = `Current axis: ${axis}`;
  }
}

const myGameboard = new Gameboard();

const myContainer = document.querySelector(".gameboard");
UI.renderBoard(myGameboard, myContainer);

myContainer.addEventListener("mouseover", (e) => {
  UI.shipPlaceHover(
    myContainer,
    e.target,
    toggleAxis.getAttribute("current-axis"),
    3
  );
});

const toggleAxis = document.querySelector(".toggle");
toggleAxis.addEventListener("click", () => {
  if (toggleAxis.getAttribute("current-axis") === "y") {
    toggleAxis.setAttribute("current-axis", "x");
  } else {
    toggleAxis.setAttribute("current-axis", "y");
  }
  UI.updateAxis(toggleAxis.getAttribute("current-axis"));
});
