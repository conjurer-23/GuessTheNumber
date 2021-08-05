"use strict";

const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";

    // When the player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";

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
