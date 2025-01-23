let emoji = window.prompt("What emoji would you like?")


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("blue");
  textSize(80)
  text("" + emoji, mouseX, mouseY);
  if (mouseIsPressed) {
    background("255");
  }
}