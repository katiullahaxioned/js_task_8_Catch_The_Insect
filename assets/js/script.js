var container = document.querySelector(".container");
var playGame = document.querySelector(".play-game");
var selectInsect = document.querySelector(".select-insect");
var gameMain = document.querySelector(".game-main");
var playButton = document.querySelector(".play-button");
var insect = document.querySelectorAll(".insect");
var timeCount = document.querySelector(".time-count");
var scoreCount = document.querySelector(".score-count");
var gameDisplay = document.querySelector(".game-display");
var gameAlert = document.querySelector(".game-alert");

playButton.addEventListener("click", function () {
  playGame.classList.add("viewport-inactive");
  selectInsect.classList.add("viewport-active");
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
      selectInsect.classList.remove("viewport-active");
      selectInsect.classList.add("viewport-inactive");
      gameMain.classList.add("viewport-active");
    }, 300);

    var countNumber = 0;
    var initial = 0;
    var insectStart = setInterval(function () {
      var a = Math.trunc(Math.random() * 100);
      var b = Math.trunc(Math.random() * 100);
      var cloneImage = image.cloneNode(true);
      if (selectInsect.classList.contains("viewport-inactive")) {
        if(a > 95 || b > 95) {
          a -= 5;
          b -= 5;
        }
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
        initial++;
        if(initial === 15) {
          clearInterval(insectStart);
          for(var j=0; j<gameDisplay.children.length; j++) {
            gameDisplay.children[j].classList.add('pointer-disable');
          }
        }
        setTimeout(function() {
          gameAlert.classList.add('alert-active');
          if(initial > 10) {
          gameAlert.classList.remove('alert-active');
          }
        }, 5000)
      }
    }, 1000);

    var secondCount = 0;
    var timeStart = setInterval(function () {
      secondCount++;
      if(secondCount > 15) {
        clearInterval(timeStart);
      } else if (secondCount < 10) {
        timeCount.innerHTML = `00:0${secondCount}`;
      } else {
        timeCount.innerHTML = `00:${secondCount}`;
      }
    }, 1000);
  });
});