
import { getSingleDishContentStorageItem } from "./dishContentStorage.js"

function increaseSelectedDishAmount(dishName) {

  try {
    let selectedDish = getSingleSelectedDish(dishName);

    if(selectedDish == undefined) {
      return addItemToSelectedDishes(dishName);
    } else if(selectedDish.amount >= 10) {
      throw "MaxAmountExceeded";
    } else {
      selectedDish.amount++;
      return updateItemSelectedDishes(selectedDish.name, selectedDish.amount);
    }
  } catch(error) {
    console.log("error");
    console.log(error);
    throw error;
  }
}

function decreaseSelectedDishAmount(dishName) {

  try {
    let selectedDish = getSingleSelectedDish(dishName);

    if(selectedDish == undefined) {
      throw "NoSuchElementExeption";
    } else if(selectedDish.amount == 1) {
      return deleteItemFromSelectedDishes(selectedDish.name);
    } else {
      selectedDish.amount--;
      return updateItemSelectedDishes(selectedDish.name, selectedDish.amount);
    }
  } catch(error) {
    console.log("error");
    console.log(error);
    throw error;
  }
}

// returns parsed session storage array, if not exist create it first and then return

function getSelectedDishesStorage() {

  let selectedDishesArray = JSON.parse(sessionStorage.getItem("selectedDishes"));
  if(selectedDishesArray == undefined) {
    sessionStorage.setItem("selectedDishes", JSON.stringify([]));
    selectedDishesArray = JSON.parse(sessionStorage.getItem("selectedDishes"));
  }
  return selectedDishesArray;
}

function getSingleSelectedDish(dishName) {

  let dishResult;
  let dishAmount = 0;
  let selectedDishesStorage = getSelectedDishesStorage();

  selectedDishesStorage.forEach((dishStorage) => {
    if(dishStorage.name == dishName) {
      dishResult = dishStorage;
      dishAmount++;
    }
  });

  if(dishAmount > 1) {
    throw "MoreThanOneItemException";
  } else if(dishAmount == 0) {
    return undefined;
  } else {
    return dishResult;
  }
}

function addItemToSelectedDishes(dishName) {

  try {
    let selectedDishesArray = getSelectedDishesStorage();
    let selectedDishItem = swapDishItemToSelectedDish(dishName);
    selectedDishItem.amount++;
    selectedDishesArray.push(selectedDishItem);
    sessionStorage.setItem("selectedDishes", JSON.stringify(selectedDishesArray));
    return selectedDishItem.amount;
  } catch(error) {
    console.log("error");
    console.log(error);
    throw error;
  }
}

function deleteItemFromSelectedDishes(dishName) {

  try {
    let selectedDishesArray = getSelectedDishesStorage();

    for(let i = 0 ; i < selectedDishesArray.length ; i++) {
      if(selectedDishesArray[i].name == dishName) {
        selectedDishesArray.splice(i, 1);
        sessionStorage.setItem("selectedDishes", JSON.stringify(selectedDishesArray));
        return 0;
      }
    }
    throw "NotSuchElementException";
  } catch(error) {
    console.log("error");
    console.log(error);
    throw error;
  }
}

function updateItemSelectedDishes(dishName, dishAmount) {

  try {
    let selectedDishesArray = getSelectedDishesStorage();

    for(let i = 0 ; i < selectedDishesArray.length ; i++) {
      if(selectedDishesArray[i].name == dishName) {
        selectedDishesArray[i].amount = dishAmount;
        sessionStorage.setItem("selectedDishes", JSON.stringify(selectedDishesArray));
        return selectedDishesArray[i].amount;
      }
    }
    throw "NotSuchElementException";
  } catch(error) {
    console.log("error");
    console.log(error);
    throw error;
  }
}

function swapDishItemToSelectedDish(dishName) {

  try {
    let dishItem = getSingleDishContentStorageItem(dishName);
    let selectedDishItem = { name: dishItem.name, amount: 0, price: dishItem.price};
    return selectedDishItem;
  } catch(error) {
    console.log("error");
    console.log(error);
    throw error;
  }
}

export { getSelectedDishesStorage, increaseSelectedDishAmount, decreaseSelectedDishAmount }
