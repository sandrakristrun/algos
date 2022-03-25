function arrayOfArrayProducts(arr) {
  // your code goes here
  let products = [];

  for(let i = 0; i < arr.length; i++){
    let currentProduct = 1;
    for(let j = 0; j < arr.length; j++){
      if(i !== j){
        currentProduct *= arr[j];
      }
    }
    products.push(currentProduct)
  }
  return products;
}

function arrayOfArrayProducts(arr) {
  // your code goes here
  let products = [];

  let currentProduct = 1;
  for(let i = 0; i < arr.length; i++){
    products[i] = currentProduct;
    currentProduct *= arr[i]
  }

  currentProduct = 1;
  for(let i = arr.length - 1; i >= 0; i--){
    products[i] *= currentProduct;
    currentProduct *= arr[i]
  }
  return products;
}

console.log(arrayOfArrayProducts([8, 10, 2]))
