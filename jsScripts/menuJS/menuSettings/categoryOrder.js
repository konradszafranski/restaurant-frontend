
function sortDishResultArray(dishResult) {

  for(let i = 0 ; i < dishResult.length ; i++) {
    setPosition(dishResult[i]);
  }
  dishResult.sort(compare);
}

function setPosition(dish) {

  switch(dish.category) {
    case "Dania_Główne":
      dish.position = 0;
      break;
    case "Przystawki":
      dish.position = 1;
      break;
    case "Zupy":
      dish.position = 2;
      break;
    case "Desery":
      dish.position = 3;
      break;  
  }
}

function compare(a, b) {
  if(a.position < b.position) return -1;
  if(a.position > b.position) return 1;
  return 0;
}

export { sortDishResultArray }
