var container = document.querySelector(".container");
var playGame = document.querySelector(".play-game");
var selectInsect = document.querySelector(".select-insect");
var playButton = document.querySelector(".play-button");
var insect = document.querySelectorAll(".insect");
var timeCount = document.querySelector(".time-count");
var scoreCount = document.querySelector(".score-count");
var gameDisplay = document.querySelector(".game-display");

playButton.addEventListener("click", function () {
  playGame.classList.add("hide");
});

insect[0].classList.add("insect-active");

insect.forEach(function (element) {
  element.addEventListener("click", function () {
    var image = element.querySelector(".insect img");

    for (var i = 0; i < insect.length; i++) {
      insect[i].classList.remove("insect-active");
    }

    element.classList.add("insect-active");

    setTimeout(function () {
      selectInsect.classList.add("hide");
    }, 300);

    var countNumber = 0;
    var insectStart = setInterval(function () {
      var a = Math.trunc(Math.random() * 100);
      var b = Math.trunc(Math.random() * 100);
      var cloneImage = image.cloneNode(true);
      if (selectInsect.classList.contains("hide")) {
        cloneImage.style = `width: 5%;
														position: absolute;
														top: ${a}%;
														left: ${b}%;
														cursor: pointer`;
        gameDisplay.appendChild(cloneImage);
        cloneImage.addEventListener("click", function () {
          cloneImage.classList.add("hide");
          countNumber++;
          scoreCount.innerHTML = countNumber;
        });
      }
    }, 500);

    var secondCount = 0;
    var timeStart = setInterval(function () {
      secondCount++;
      if (secondCount < 10) {
        timeCount.innerHTML = `00:0${secondCount}`;
      } else {
        timeCount.innerHTML = `00:${secondCount}`;
      }
    }, 1000);

    setTimeout(function () {
      clearInterval(timeStart);
      clearInterval(insectStart);
      setTimeout(function () {
        alert("Your final score is: " + countNumber);
        for (var i = 0; i < gameDisplay.children.length; i++) {
          gameDisplay.children[i].classList.add("hide");
        }
      }, 10);
    }, 5000);
  });
});