"use strict";

let students = [
  { first: "Gurgot", hairColor: "black" },
  { first: "Melina", hairColor: "black" },
  { first: "Kameron", hairColor: "black" },
  { first: "Timothy", hairColor: "black" },
  { first: "Christoper", hairColor: "black" },
];


for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log(student.first, student.hairColor);
}