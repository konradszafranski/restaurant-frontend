
import { increaseAmountVal, decreaseAmountVal } from "./menuButtonFunctions.js"

function build(mainElement, dishArray) {

  let dishContentDiv;
  let iterator = 0;
  let dishCurrentPosition;

  while(iterator < dishArray.length) {

    dishCurrentPosition = dishArray[iterator].position;
    dishContentDiv = document.createElement("div");
    dishContentDiv.classList.add("content");
    dishContentDiv.appendChild(buildCategoryElement(dishArray[iterator].category));

    while (dishCurrentPosition == dishArray[iterator].position) {
      dishContentDiv.appendChild(buildDishElement(dishArray[iterator]));
      iterator++;
      if(iterator >= dishArray.length) break;
    }

    mainElement.appendChild(dishContentDiv);
  }
}

function buildCategoryElement(categoryName) {

  const categoryElement = document.createElement("div");
  categoryElement.classList.add("category");
  categoryElement.innerHTML = categoryName;

  return categoryElement;
}

function buildDishElement(dishObject) {

  const dishElement = document.createElement("div");
  dishElement.classList.add("dish");

  dishElement.appendChild(buildDishNameElement(dishObject.name, dishObject.price));
  dishElement.appendChild(buildDishImgElement(dishObject.name));
  dishElement.appendChild(buildDishSetAmountElement(dishObject.amount));

  return dishElement;
}

function buildDishNameElement(name, price) {

  const dishNameElement = document.createElement("div");
  dishNameElement.classList.add("dishName");
  dishNameElement.innerHTML = "<span class='name'>" + name + "</span>" + " " +
                              "<span class='price'>" + price + "</span>";
  return dishNameElement;
}

function buildDishImgElement(nazwa) {

  const dishImgElement = document.createElement("div");
  dishImgElement.classList.add("dishImg");

  const image = document.createElement("img");
  image.setAttribute("alt", "Nie znalezniono obrazka");
  image.setAttribute("src", "images/images_menu/" + nazwa + ".jpg");
  image.setAttribute("height", "220");
  image.setAttribute("width", "360");

  dishImgElement.appendChild(image);

  return dishImgElement;
}

function buildDishSetAmountElement(amount) {

  const dishSetAmountElement = document.createElement("div");
  dishSetAmountElement.classList.add("dishSetAmount");

  const addButton = document.createElement("button");
  addButton.classList.add("dishAddDelete");
  addButton.textContent = "+";
  addButton.addEventListener("click", function() { increaseAmountVal(this.parentElement.parentElement) });
  dishSetAmountElement.appendChild(addButton);

  const showButton = document.createElement("button");
  showButton.classList.add("dishShowAmount");
  showButton.textContent = amount;
  showButton.disabled = "true";
  dishSetAmountElement.appendChild(showButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("dishAddDelete");
  deleteButton.textContent = "-";
  deleteButton.addEventListener("click", function() { decreaseAmountVal(this.parentElement.parentElement) });
  dishSetAmountElement.appendChild(deleteButton);

  return dishSetAmountElement;
}

export { build }
