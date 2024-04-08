// COIN FLIP SIMULATOR

//between 0 - 1
// let rand = Math.random();
// console.log(rand);

// 50% heads 50% tails

// if(rand < 0.5) {
//     console.log("Heads");
// } else {
//     console.log("Tails");
// }

// // 25% heads 75% tails
// if (rand < 0.25) {
//     console.log("heads");
// } else {
//     console.log("tails");
// }

// 25% heads 25% feet 50% tails
// if (rand < 0.25) {
//     console.log("Heads");
// } else if (rand < 0.50) {
//     console.log("Feet");
// } else {
//     console.log("tails");
// }

// 10% heads 60% feet 30% tails
// if (rand < 0.10) {
//     console.log("Heads");
// } else if (rand < 0.70) {
//     console.log("feet");
// } else {
//     console.log("tails");
// }

// COIN FLIP SIMULATOR

// HTML Variables
// let outputE1 = document.getElementById("output");
// let headsE1 = document.getElementById("heads-out");
// let tailsE1 = document.getElementById("tails-out");

// // Count Variables
// let numHeads = 0;
// let numTails = 0;

// // button event listener
// document.getElementById("btn").addEventListener("click", btnClicked);

// function btnClicked() {
//   //Generate a Random Number
//   let randNum = Math.random();
//   console.log(randNum);

//   // simulate the coin flip
//   if (randNum < 0.5) {
//     outputE1.innerHTML = "<img src='img/heads.png' />";
//     numHeads = numHeads + 1;
//     headsE1.innerHTML = numHeads;
//   } else {
//     outputE1.innerHTML = "<img src='img/tails.png' />";
//     numTails = numTails + 1;
//     tailsE1.innerHTML = numTails;
//   }
// }

// Dice Flip Simulator

// HTML Variables
let outputE2 = document.getElementById("output2");
let rollOutE1 = document.getElementById("rollOut1");
let rollOutE2 = document.getElementById("rollOut2");
let rollOutE3 = document.getElementById("rollOut3");
let rollOutE4 = document.getElementById("rollOut4");
let rollOutE5 = document.getElementById("rollOut5");
let rollOutE6 = document.getElementById("rollOut6");

// Count Variables
let numDice1 = 0;
let numDice2 = 0;
let numDice3 = 0;
let numDice4 = 0;
let numDice5 = 0;
let numDice6 = 0;

// button event listener
document.getElementById("btn2").addEventListener("click", btnClicked2);

function btnClicked2() {
  // Generate a Random Number
  let randNum2 = Math.random();
  console.log(randNum2);

  // simulate dice roll
  if (randNum2 < 0.45) {
    outputE2.innerHTML = "<img src='img/1.png' />";
    numDice1 = numDice1 + 1;
    rollOutE1.innerHTML = numDice1;
    // rollOut2.innerHTML = numDice;
  } else if (randNum2 < 0.5) {
    outputE2.innerHTML = "<img src = 'img/2.png' />";
    numDice2 = numDice2 + 1;
    rollOutE2.innerHTML = numDice2;
  } else if (randNum2 < 0.55) {
    outputE2.innerHTML = "<img src = 'img/3.png' />";
    numDice3 = numDice3 + 1;
    rollOutE3.innerHTML = numDice3;
  } else if (randNum2 < 0.75) {
    outputE2.innerHTML = "<img src = 'img/4.png' />";
    numDice4 = numDice4 + 1;
    rollOutE4.innerHTML = numDice4;
  } else if (randNum2 < 0.9) {
    outputE2.innerHTML = "<img src = 'img/5.png' />";
    numDice5 = numDice5 + 1;
    rollOutE5.innerHTML = numDice5;
  } else {
    outputE2.innerHTML = "<img src = 'img/6.png' />";
    numDice6 = numDice6 + 1;
    rollOutE6.innerHTML = numDice6;
  }
}
