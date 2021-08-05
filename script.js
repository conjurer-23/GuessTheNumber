"use strict";

const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";

    // When the player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    // When the guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "👆 Guess is high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢 You lost game!";
      document.querySelector(".score").textContent = 0;
    }

    // When the guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "👇 Guess is low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢 You lost game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Pressing the again button
btnAgain.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Starts guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
