import { getSelectedDishesStorage } from "../../storageJS/selectedDishesStorage.js"
import { buildDishBoardContainer } from "./buildDishBoardElement.js"
import { setItemDishBoardValue } from "./modifyBoardContainer.js"

function initMenuDishBoard() {

  let mainDivElement = document.querySelector(".main");
  let selectedDishes = getSelectedDishesStorage();

  mainDivElement.appendChild(buildDishBoardContainer(selectedDishes));
}

function modifyItemValue(dishName, dishPrice, dishAmount) {

  let dishBoardElementsList = document.querySelector(".dishBoardElementsList");
  setItemDishBoardValue(dishName, dishPrice, dishAmount, dishBoardElementsList);
}

export { initMenuDishBoard, modifyItemValue }
