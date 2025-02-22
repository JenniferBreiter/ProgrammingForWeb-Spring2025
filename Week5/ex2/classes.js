let bubble = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 30; i++) {
    bubble.push(new Bubble());
  }
  
}

function draw() {
  background(0);
  for (let i = 0; i < bubble.length; i++) {
      bubble[i].move();
      bubble[i].show();
  }
}

class Bubble {
  constructor() {
    this.x = 275;
    this.y = 175;
  }
  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
  show() {
    stroke('pink');
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 50, 50);
  }
}