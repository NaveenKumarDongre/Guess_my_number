"use strict";
/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.message').textContent = "Correct you won!"
document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 14;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highestScore = 0;
document.querySelector(".score").textContent = score;
document.querySelector(".max_score").textContent = highestScore;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When their is no input

  if (!guess) {
    document.querySelector(".message").textContent = "❌ No number entered !";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Number!";
    if (score > highestScore) {
      highestScore = score;
      document.querySelector(".max_score").textContent = highestScore;
    }

    const elements = document.querySelectorAll(".bg-color");
    // Loop through the selected elements and modify the classes
    console.log(elements);
    elements.forEach((element) => {
      element.classList.remove("bg-color"); // Remove the old class
      element.classList.add("bg-color-win"); // Add the new class
    });

    document.querySelector(".number").style.width = "8rem";
    document.querySelector(".number").textContent = secretNumber;
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high guess!";
      score--;
    } else {
      document.querySelector(".message").textContent = "😭 you loose the game!";
      const elements = document.querySelectorAll(".bg");
      // Loop through the selected elements and modify the classes
      console.log(elements);
      elements.forEach((element) => {
        element.classList.remove("bg-color"); // Remove the old class
        element.classList.add("bg-color-loss"); // Add the new class
      });

      score = 0;
    }
  }

  //when guess is too low
  else {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low guess!";
      score--;
    } else {
      document.querySelector(".message").textContent = "😭 you loose the game!";
      const elements = document.querySelectorAll(".bg");
      // Loop through the selected elements and modify the classes
      console.log(elements);
      elements.forEach((element) => {
        element.classList.remove("bg-color"); // Remove the old class
        element.classList.add("bg-color-loss"); // Add the new class
      });
      score = 0;
    }
  }
  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "🧠Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  const elements = document.querySelectorAll(".bg");
  // Loop through the selected elements and modify the classes
  console.log(elements);
  elements.forEach((element) => {
    element.classList.remove("bg-color-win"); // Remove the old class
    element.classList.remove("bg-color-loss"); // Remove the old class
    element.classList.add("bg-color"); // Add the new class
  });
});
