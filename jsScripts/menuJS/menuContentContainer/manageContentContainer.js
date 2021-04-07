
import { build } from "./buildMenuContent.js"
import { sortDishResultArray } from "../menuSettings/categoryOrder.js"
import { getMenuContentRequest } from "../../requestJS/request.js"
import { getDishContentStorage, createDishContentStorage } from "../../storageJS/dishContentStorage.js"

async function initMenuContent() {

  let dishArray;
  let mainDivElement = document.querySelector(".main");
  let dishContentArray = getDishContentStorage();

  console.log("dishContentArray == undefined");
  console.log(dishContentArray == undefined);

  if(dishContentArray != undefined && dishContentArray.length > 0) {
    console.log("local data");
    dishArray = getDishContentStorage();
    console.log(dishArray);
  } else {
    console.log("external data");
    dishArray = await getContentExternal();
    console.log(dishArray);
    createDishContentStorage(dishArray);
  }
  mainDivElement.appendChild(build(dishArray));
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
