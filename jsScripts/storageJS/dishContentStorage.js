
function createDishContentStorage(dishArray) {

  sessionStorage.setItem("dishContent", JSON.stringify(dishArray));
}

function getDishContentStorage() {

  return JSON.parse(sessionStorage.getItem("dishContent"));
}

function getSingleDishContentStorageItem(dishName) {

  let dishResult;
  let dishAmount = 0;
  let dishContentStorage = getDishContentStorage();

  dishContentStorage.forEach((dishStorage) => {
    if(dishStorage.name == dishName) {
      dishResult = dishStorage;
      dishAmount++;
    }
  });

  if(dishAmount == 0) {
    throw "NotSuchItemException";
  } else if(dishAmount > 1) {
    throw "MoreThanOneItemException";
  } else {
    return dishResult;
  }
}

export { getDishContentStorage, createDishContentStorage, getSingleDishContentStorageItem }
