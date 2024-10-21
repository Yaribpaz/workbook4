"use strict"
let myInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Benbrook",
    state: "Texas",
    zip: 76126
};
function printContract(myInfo) {
    console.log(myInfo.name);
    console.log(myInfo.address);
    console.log(myInfo.city + "," + myInfo.state + " " + myInfo.zip)
    
  }
  
  printContract(myInfo)