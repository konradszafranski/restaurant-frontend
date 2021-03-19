
import { build } from "./buildBasketContent.js"
import { executeOrder } from "./basketButtonFunctions.js"

function initBasketContent() {

  let mainDivElement = document.querySelector(".main");
  let selectedDishes = getSelectedDishes(); 

  if(selectedDishes == null || selectedDishes.length == 0) {
    alert("Koszyk jest pusty");
  } else {
    build(mainDivElement, getSelectedDishes());
  }

  const orderButton = document.createElement("button");
  orderButton.classList.add("order");
  orderButton.textContent = "Zamawiam!";
  orderButton.addEventListener("click", function() { executeOrder(getSelectedDishes()) } );
  mainDivElement.appendChild(orderButton);
}

function getSelectedDishes() {

  let iterator = 0;
  let selectedDishes = [];
  let localDishContent = JSON.parse(sessionStorage.getItem("menuContent"));

  localDishContent.forEach((dish) => {
      if(dish.amount > 0) {
        selectedDishes[iterator] = dish;
        iterator++;
      }
  });

  return selectedDishes;
}

export { initBasketContent }
