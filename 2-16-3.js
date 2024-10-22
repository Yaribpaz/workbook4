"use strict"

let lunch = [
    {item: "Steak Fajitas", price: 9.95 },
    {item: "Chips and Guacmole", price: 5.25},
    {item: "Sweet Tea", price: 2.79},
];

function calculateSubtotal(foods) {
    let subtotal = 0;
    for (let i =0; i < foods.length; i++){
        subtotal += foods[i].price
    }
    return subtotal;
}

function calculateTotal(subtotal) {
    let tax = subtotal * 0.08;
    let tip = subtotal * 0.18;
    let total = subtotal + tax + tip; 
    return { tax, tip, total};
    
}

let subtotal = calculateSubtotal(lunch);
let totals = calculateTotal(subtotal);

console.log("Subtotal: $" + subtotal);
console.log("Tax (8%): $" + totals.tax.toFixed(2));
console.log("Tip (18%): $" + totals.tip.toFixed(2));
console.log("Total: $" + totals.total.toFixed(2))


