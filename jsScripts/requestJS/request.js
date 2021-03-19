
async function getMenuContentRequest() {

  let response;
  let jsonValue;

  try {
    let response = await fetch("http://localhost:8080/getMenuContent");
    let jsonValue = response.json();
    console.log("jsonValue");
    console.log(jsonValue);
    return jsonValue;
  } catch(e) {
    console.log("error");
    console.log(e.toString());
  }
}

async function postOrderDetailsRequest(dishBasketArray) {

  console.log("dishBasketArray");
  console.log(dishBasketArray);

  dishBasketArray.forEach((dish) => {
    console.log("dish");
    console.log(dish);
    console.log(typeof dish.name);
  });


  const response = await fetch("http://localhost:8080/saveOrder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dishBasketArray)
  });
}

export { getMenuContentRequest, postOrderDetailsRequest }
