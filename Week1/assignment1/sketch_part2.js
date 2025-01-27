let grid = undefined;
let stroke1 = prompt("enter a basic color", "white");
let stroke2 = prompt("enter another basic color", "black");
let stroke3 = prompt("pick your favorite color", "brown");

function setup() {
  createCanvas(1000, 800);
  background("#add8e6");
  grid = loadImage("images/100px_grid.png");
}

function draw() {
 // background(grid);
  //background
  noStroke();
  quad(0, 500, 1000, 500, 1000, 800, 0, 800);
  // snow
  stroke(255);
  strokeWeight(20);
  point(150, 50);
  point(641, 156);
  point(89, 300);
  point(716, 461);
  point(841, 216);
  point(318, 249);
  point(943, 64);
  point(843, 378);
  point(129, 436);
  point(193, 148);
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
  fill(stroke2);
  quad(400, 50, 600, 50, 580, 200, 420, 200);
  // eyes
  stroke(0);
  strokeWeight(40);
  point(450, 250);
  point(550, 250);
  // pupil
  stroke(255);
  strokeWeight(15);
  point(460, 240);
  point(560, 240);
  // mouth
  noFill();
  stroke(0);
  strokeWeight(10);
  arc(500, 280, 60, 60, 0, PI);
  // arm
  stroke(stroke3);
  strokeWeight(15);
  line(300, 320, 420, 400);
  line(580, 400, 700, 320);
  // hands
  line(650, 300, 700, 380);
  line(350, 300, 300, 380);
  // buttons
  stroke(0);
  strokeWeight(15);
  point(500, 380);
  point(500, 420);
  point(500, 460);
  // nose
  stroke("orange");
  strokeWeight(15);
  triangle(500, 260, 502, 265, 498, 265);
  // tree
  textSize(300);
  text("🎄", 0, 550);
  // penguins
  textSize(100);
  text("🐧", 100, 740);
  text("🐧", 846, 550);
  text("🐧", 741, 615);
}