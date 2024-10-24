"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
];

console.log("Candies costing less than $4.00:");
for (let i = 0; i < products.length; i++) {
  if (products[i].price < 4.0) {
    console.log(products[i].product);
  }
}

console.log('Candies with "M&M" in the name:');
for (let i = 0; i < products.length; i++) {
  if (products[i].product.indexOf("M&M") !== -1) {
    console.log(products[i].product);
  }
}

let foundSwedishFish = false;
for (let i = 0; i < products.length; i++) {
  if (products[i].product === "Swedish Fish") {
    foundSwedishFish = true;

  }
}
console.log("Do we carry Swedish Fish?", foundSwedishFish);