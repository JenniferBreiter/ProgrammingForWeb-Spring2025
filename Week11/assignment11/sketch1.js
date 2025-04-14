function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(250);
  let spacing = 60;
  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      push();
      translate(x, y);
      rotate((frameCount + x + y) * 0.3);
      noFill();
      stroke(7, 134, 178); 
      rect(0, 0, 30, 30);
      pop();
    }
  }
}
