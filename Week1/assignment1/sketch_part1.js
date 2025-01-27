let grid = undefined;
let stroke1 = prompt("enter a basic color", "teal");
let stroke2 = prompt("enter another basic color", "purple");

function setup() {
  createCanvas(1000, 800);
  background("#add8e6");
  grid = loadImage("images/100px_grid.png");
}

function draw() {
  // background(grid);
  // snowman
  fill("#f1f1f1");
  strokeWeight(10);
  stroke(stroke1);
  // base
  ellipse(500, 600, 350);
  // body
  ellipse(500, 400, 250);
  // head
  ellipse(500, 250, 180);
  // hat brim
  stroke(stroke2);
  strokeWeight(25);
  line(390, 200, 610, 200);
  // hat
  quad(400, 50, 600, 50, 580, 200, 420, 200);
  // eyes
  stroke(0);
  strokeWeight(40);
  point(450, 250);
  point(550, 250);
  // mouth
  noFill();
  strokeWeight(10);
  arc(500, 280, 60, 60, 0, PI);
  // arm
  stroke("brown");
  strokeWeight(15);
  line(300, 320, 420, 400);
  line(580, 400, 700, 320);
}
