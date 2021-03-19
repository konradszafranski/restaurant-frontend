
function increaseAmountVal(dishDivElement) {

  let amountButtonList = dishDivElement.getElementsByClassName("dishShowAmount");
  let dishNameList = dishDivElement.getElementsByClassName("name");

  if(amountButtonList.length != 1 || dishNameList.length != 1) {
    alert("Błąd - odśwież stronę")
  } else {
    let amountButton = amountButtonList[0];
    let dishName = dishNameList[0].textContent;
    let sessionDishList = JSON.parse(sessionStorage.getItem("menuContent"));

    if(Number(amountButton.textContent) >= 10) {
      alert("Aktualnie maksymalna ilość")
    } else {
      for (let i = 0 ; i < sessionDishList.length ; i++) {
        if(sessionDishList[i].name == dishName) {
          sessionDishList[i].amount++;
          amountButton.textContent = sessionDishList[i].amount;
        }
      }
      sessionStorage.setItem("menuContent", JSON.stringify(sessionDishList));
    }
  }
}

function decreaseAmountVal(dishDivElement) {

  let amountButtonList = dishDivElement.getElementsByClassName("dishShowAmount");
  let dishNameList = dishDivElement.getElementsByClassName("name");

  if(amountButtonList.length != 1 || dishNameList.length != 1) {
    alert("Błąd - odśwież stronę")
  } else {
    let amountButton = amountButtonList[0];
    let dishName = dishNameList[0].textContent;
    let sessionDishList = JSON.parse(sessionStorage.getItem("menuContent"));

    if(Number(amountButton.textContent) <= 0) {
      alert("Aktualnie minimalna ilość")
    } else {
      for (let i = 0 ; i < sessionDishList.length ; i++) {
        if(sessionDishList[i].name == dishName) {
          sessionDishList[i].amount--;
          amountButton.textContent = sessionDishList[i].amount;
        }
      }
      sessionStorage.setItem("menuContent", JSON.stringify(sessionDishList));
    }
  }
}

export { increaseAmountVal, decreaseAmountVal }
