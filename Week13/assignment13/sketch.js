let raindrops = [];
let speedSlider;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('canvas-container'); // attach canvas to a div
  
  // slider
  speedSlider = createSlider(0.5, 3, 1, 0.1);
  speedSlider.parent('slider-container'); // attach slider to a div
  speedSlider.style('width', '200px');
  
  // raindrops
  for (let i = 0; i < 250; i++) {
    raindrops.push(new Raindrop());
  }
}

function draw() {
  background(20, 30, 60);

  let speedMultiplier = speedSlider.value();

  for (let drop of raindrops) {
    drop.update(speedMultiplier);
    drop.display();
  }
}

// raindrop behavior
class Raindrop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.length = random(10, 20);
    this.baseSpeed = random(4, 10); // initial speed
    this.gravity = random(0.05, 0.2);
  }

  update(multiplier) {
    this.y += this.baseSpeed * multiplier;
    this.baseSpeed += this.gravity * multiplier; // apply gravity effect to make raindrops accelerate

    // raindrop falls below the canvas, reset to top
    if (this.y > height) {
      this.y = random(-200, -100);
      this.baseSpeed = random(4, 10);
    }
  }

  display() {
    stroke(173, 216, 230);
    line(this.x, this.y, this.x, this.y + this.length);
  }
}
