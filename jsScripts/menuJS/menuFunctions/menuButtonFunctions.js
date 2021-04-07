
import { increaseSelectedDishAmount, decreaseSelectedDishAmount } from "../../storageJS/selectedDishesStorage.js"
import { modifyItemValue } from "../menuBoardContainer/manageBoardContainer.js"

function increaseAmountVal(dishDivElement) {

  let amountButtonList = dishDivElement.getElementsByClassName("dishShowAmount");
  let dishNameList = dishDivElement.getElementsByClassName("name");

  if(amountButtonList.length != 1 || dishNameList.length != 1) {
    alert("Błąd - odśwież stronę")
  } else {
    let dishAmount = amountButtonList[0];
    let dishName = dishNameList[0].textContent;
    try {
      let newAmount = increaseSelectedDishAmount(dishName);
      console.log("newAmount");
      console.log(newAmount);
      dishAmount.textContent = newAmount;
    } catch(error) {
      console.log("error");
      console.log(error);
    }
  }
}

function decreaseAmountVal(dishDivElement) {

  let amountButtonList = dishDivElement.getElementsByClassName("dishShowAmount");
  let dishNameList = dishDivElement.getElementsByClassName("name");

  if(amountButtonList.length != 1 || dishNameList.length != 1) {
    alert("Błąd - odśwież stronę")
  } else {
    let dishAmount = amountButtonList[0];
    let dishName = dishNameList[0].textContent;
    try {
      let newAmount = decreaseSelectedDishAmount(dishName);
      console.log("newAmount");
      console.log(newAmount);
      dishAmount.textContent = newAmount;
    } catch(error) {
      console.log("error");
      console.log(error);
    }
  }
}

export { increaseAmountVal, decreaseAmountVal }
