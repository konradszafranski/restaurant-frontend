
function build(mainElement, selectedDishes) {

  selectedDishes.forEach((dish) => {
    mainElement.appendChild(buildBasketElement(dish));
  });
}

function buildBasketElement(dishElement) {

  const basketElement = document.createElement("div");
  basketElement.classList.add("content");

  basketElement.appendChild(buildBasketImgElement(dishElement.name));
  basketElement.appendChild(buildBasketDescriptionElement(dishElement.description));
  basketElement.appendChild(buildAmountPriceElement(dishElement.amount, dishElement.price));

  return basketElement;
}

function buildBasketImgElement(name) {

  const dishImgElement = document.createElement("div");
  dishImgElement.classList.add("basketImg");

  const image = document.createElement("img");
  image.setAttribute("alt", "Nie znalezniono obrazka");
  image.setAttribute("src", "images/images_menu/" + name + ".jpg");
  image.setAttribute("height", "220");
  image.setAttribute("width", "360");

  dishImgElement.appendChild(image);

  return dishImgElement;
}

function buildBasketDescriptionElement(description) {

  const dishDescriptionElement = document.createElement("div");
  dishDescriptionElement.classList.add("basketDescription");
  dishDescriptionElement.innerHTML = "Opis: " + description;

  return dishDescriptionElement;
}

function buildAmountPriceElement(amount, price) {

  const dishAmountPriceElement = document.createElement("div");
  dishAmountPriceElement.classList.add("basketImg");
  dishAmountPriceElement.innerHTML = "Ilość: " + amount + " && Cena: " + price * amount;

  return dishAmountPriceElement;
}

export { build }
