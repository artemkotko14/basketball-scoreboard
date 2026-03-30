const plusOne = document.getElementsByClassName("plus-one");
const plusTwo = document.getElementsByClassName("plus-two");
const plusThree = document.getElementsByClassName("plus-three");
const guestScore = document.getElementById("guest-score");
const homeScore = document.getElementById("home-score");
const restartBtn = document.querySelector(".restart");

function addOne() {
  for (let i = 0; i < plusOne.length; i++) {
    plusOne[i].addEventListener("click", function () {
      if (this.closest(".team-score").id === "home-half") {
        homeScore.innerText = Number(homeScore.innerText) + 1;
      } else {
        guestScore.innerText = Number(guestScore.innerText) + 1;
      }
    });
  }
}

function addTwo() {
  for (let i = 0; i < plusTwo.length; i++) {
    plusTwo[i].addEventListener("click", function () {
      if (this.closest(".team-score").id === "home-half") {
        homeScore.innerText = Number(homeScore.innerText) + 2;
      } else {
        guestScore.innerText = Number(guestScore.innerText) + 2;
      }
    });
  }
}

function addThree() {
  for (let i = 0; i < plusThree.length; i++) {
    plusThree[i].addEventListener("click", function () {
      //       if (plusThree[i].parentElement.parentElement.id === "home-half")
      if (this.closest(".team-score").id === "home-half") {
        homeScore.innerText = Number(homeScore.innerText) + 3;
      } else {
        guestScore.innerText = Number(guestScore.innerText) + 3;
      }
    });
  }
}
// Adding flash effect to buttons
document.querySelectorAll(".btn-plus").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.add("btn-flash");

    setTimeout(() => {
      this.classList.remove("btn-flash");
    }, 800);
  });
});
// Adding restart functionality
restartBtn.addEventListener("click", function () {
  homeScore.innerHTML = Number(0);
  guestScore.innerHTML = Number(0);
});

addOne();
addTwo();
addThree();
