
import { build } from "./buildMenuContent.js"
import { sortDishResultArray } from "./categoryOrder.js"
import { getMenuContentRequest } from "../requestJS/request.js"

async function initMenuContent() {

  let dishArray;
  let mainDivElement = document.querySelector(".main");
  let localDishContent = JSON.parse(sessionStorage.getItem("menuContent"));

  if(localDishContent == null || localDishContent.length == 0) {
    dishArray = await getContentExternal();
    sessionStorage.setItem("menuContent", JSON.stringify(dishArray));
    console.log("external data");
    console.log(dishArray);
  } else {
    dishArray = JSON.parse(sessionStorage.getItem("menuContent"));
    console.log("local data");
    console.log(dishArray);
  }

  build(mainDivElement, dishArray);
}

async function getContentExternal() {

  let externalContentResult = await getMenuContentRequest();
  let dishResult = [];

  for(let i = 0 ; i < externalContentResult.length ; i++) {

    dishResult[i] = {name: externalContentResult[i].dishName,
                    price: externalContentResult[i].price,
                    description: externalContentResult[i].description,
                    category: externalContentResult[i].category,
                    position: null,
                    amount: 0};
  }

  sortDishResultArray(dishResult);
  return dishResult;
}

export { initMenuContent }
