"use strict";

//1. code that executes before the loop begins
//2. a condition that must be true for the loop to keep executing
//3. code that runs at the bottom of each iteration

//while loop
//1. code that executes before the loop begins
let count = 0;

while (count <= 100) {
  //2. a condition that must be true for the loop to keep executing
  console.log("hi " + count);
  count = count + 1; //3. code that runs at the bottom of each iteration
}

//for loop
//1.--------;2.----------;3.------
for (let count = 0; count <= 100; count = count + 1) {
  console.log("hi " + count);
}
