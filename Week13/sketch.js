let fireflies = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
  for (let i = 0; i < 30; i++) {
    fireflies.push(new Firefly()); // create 30 fireflies
  }
}

function draw() {
  background(10, 10, 30);
  for (let f of fireflies) {
    f.update();
    f.display();
  }
}

class Firefly {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(4, 8);
    this.phase = random(TWO_PI); // random phase so they don't all pulse at the same time
    this.speed = random(0.005, 0.02);
    this.drift = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
  }

  update() {
    this.x += this.drift.x;
    this.y += this.drift.y;

    // if the firefly goes off the edge, wrap it to the other side
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  display() {
    let glow = sin(frameCount * this.speed + this.phase); // smooth pulsing
    let alpha = map(glow, -1, 1, 50, 255);
    fill(255, 255, 100, alpha); // yellow glow
    ellipse(this.x, this.y, this.size);
  }
}