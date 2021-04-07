
function buildDishBoardContainer(selectedDishes) {

  let dishBoard = document.createElement("div");
  dishBoard.classList.add("dishBoardContainer")

  dishBoard.appendChild(buildDishBoardElementsList(selectedDishes));
  dishBoard.appendChild(buildDishBoardButtonsDiv());

  return dishBoard;
}

function buildDishBoardElementsList(selectedDishes) {

  let dishListElement = document.createElement("div");
  dishListElement.classList.add("dishBoardElementsList");

  return dishListElement;
}

function buildDishBoardButtonsDiv() {

  let dishBoardButtons = document.createElement("div");
  dishBoardButtons.classList.add("dishBoardButtonsDiv");

  return dishBoardButtons; 
}

export { buildDishBoardContainer }
