"use strict";

const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;

btnCheck.addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else {
  }
});
