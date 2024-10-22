// let student = {}; //object, single thing
let students = ["Gurgot", "Melina", "Kameron", "Timothy", "Christopher"]; //array, list, many things

// console.log(students[4]);

for (let index = 0; index < 5; index = index + 1) {
  console.log(students[index]);
}
console.log("--------------");

for (let i = 0; i < students.length; i++) {
    let studentName = students[1];
    console.log(students[i]);
  }