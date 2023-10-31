const player = document.getElementById("player");
let xPos = 375;
let yPos = 275;

document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
  switch(event.key) {
    case "ArrowUp":
      yPos -= 10;
      break;
    case "ArrowDown":
      yPos += 10;
      break;
    case "ArrowLeft":
      xPos -= 10;
      break;
    case "ArrowRight":
      xPos += 10;
      break;
  }

  player.style.top = `${yPos}px`;
  player.style.left = `${xPos}px`;
}