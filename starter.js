'use strict';

// var user;
const user; // assigning values that do not change at runtime
user = { name: "Karl", age: 39 };

if(true) {
  let dog = "Mr. Muddypaws"; // dog is scoped to block
}

const colors = ['red', 'green', 'blue']; // colors is constant

// j is scoped to the block:
for (let j = 0; j < colors.length; j++) {
  console.log(colors[j]);
}

// secret is scoped to the function; var would exhibit same
// behavior:
function secretKeeper() {
  let secret = "Tell nobody!";
}

// topsecret is not secret at all; without const, let, or var,
// `topsecret` appears in the global scope:
function theGossiper() {
  topsecret = "I promise not to tell anybody";
}

const teacher = "Karl";
const course = "COM 333/533: Application Programming Interfaces";

console.log(`${teacher} is the instructor for ${course}`);

// function expression, no variable
const sayTwelve = () => { return 12; }

// function expression, one variable
const addFour = n => { return n + 4 }

// function expression, two+ variables
const addTwoThings = (n,m) => { return n + m }

// ^ that's the short form for this:
//const sayTwelve = function () {
//  return 12;
//}
