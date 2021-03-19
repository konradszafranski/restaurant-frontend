
import { postOrderDetailsRequest } from "../requestJS/request.js"

async function executeOrder(selectedDishes) {

  let dishBasket = [];
  let iterator = 0;

  selectedDishes.forEach((dish) => {
      dishBasket[iterator] = {dishName: dish.name}
      iterator++;
  });

  console.log("dishBasket");
  console.log(dishBasket);
  postOrderDetailsRequest(dishBasket);
}

export { executeOrder }
