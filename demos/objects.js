"use strict";

//object
let person = {
  //propertyName: propertyValue
  first: "Shawn",
  middle: "Corey",
  last: "Carter",
  age: 54,
  stageName: "Jay-Z",
  netWorthInBillions: 2.5,
};

//dot notation
console.log(person.netWorthInBillions);

//pass an object as a function parameter
function printPerson(person) {
  console.log(person);
}

printPerson(person);

//return an object from a function
function createPerson() {
  let person = {
    first: "Beyonce",
    last: "Knowles",
  };

  return person;
}

//catch the return valule in a variable
let spouse = createPerson();
console.log(spouse);
