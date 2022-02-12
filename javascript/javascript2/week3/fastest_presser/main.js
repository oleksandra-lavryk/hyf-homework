let gameDuration;
const inputDuration = document.querySelector("input");
const startBtn = document.querySelector(".start-game");
const resetBtn = document.querySelector(".reset-game");
const sSpan = document.getElementById("s-amount");
const jSpan = document.getElementById("j-amount");
const sBlock = document.getElementById("s-block");
const jBlock = document.getElementById("j-block");
const gameMessage = document.querySelector(".game-message");
const gameTimer = document.getElementById("game-timer");

let sCounter = 0;
let jCounter = 0;

function countKeyDown(key) {
  if (key.code === "KeyS") {
    sCounter += 1;
    sSpan.innerText = sCounter;
  }
  if (key.code === "KeyJ") {
    jCounter += 1;
    jSpan.innerText = jCounter;
  }
}
function setCountDown(time) {
  gameTimer.innerText = time;
  let timeleft = time - 1;
  const downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
    }
    gameTimer.innerText = timeleft;
    timeleft -= 1;
  }, 1000);
}
startBtn.addEventListener("click", () => {
  gameDuration = parseInt(inputDuration.value);
  if (!isNaN(gameDuration)) {
    setCountDown(gameDuration);
    startBtn.disabled = true;
    setTimeout(() => {
      window.removeEventListener("keyup", countKeyDown);
      if (sCounter === 0 && jCounter === 0) {
        gameDraw("keydowns not detected!");
      } else if (sCounter > jCounter) {
        drawConfetti(sBlock);
        sBlock.classList.add("winner");
      } else if (sCounter < jCounter) {
        drawConfetti(jBlock);
        jBlock.classList.add("winner");
      } else {
        gameDraw("Draw!");
      }
    }, gameDuration * 1000);
    window.addEventListener("keyup", countKeyDown);
  } else {
    alert("Enter game duration in seconds!");
  }
});

resetBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  if (document.getElementById("winner-canvas")) {
    document.getElementById("winner-canvas").remove();
  }
  sCounter = 0;
  jCounter = 0;
  gameMessage.innerText = "";
  sSpan.innerText = "";
  jSpan.innerText = "";
  inputDuration.value = "";
  gameTimer.innerText = "--";
  sBlock.className = "";
  jBlock.className = "";
});

function gameDraw(message) {
  gameMessage.innerText = `Game result:  ${message}`;
  sBlock.classList.add("draw");
  jBlock.classList.add("draw");
}

function drawConfetti(block) {
  const confettiCanvas = document.createElement("canvas");
  confettiCanvas.setAttribute("id", "winner-canvas");
  block.prepend(confettiCanvas);
  const confettiSettings = { target: "winner-canvas", size: 2.5, clock: 35 };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}
