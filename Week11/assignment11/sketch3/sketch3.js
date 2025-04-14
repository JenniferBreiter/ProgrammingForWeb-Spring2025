let t = 0;
let sides = 6; // Fixed number of sides

function setup() {
  createCanvas(600, 600);
  angleMode(RADIANS);
  noFill();
}

function draw() {
  background(245, 243, 255, 40); // translucent background for trailing effect

  translate(width / 2, height / 2);
  rotate(t * 0.05); // slow rotation

  let radius = 100 + sin(t * 0.1) * 50; // pulsing radius

  stroke(76, 29, 149);
  strokeWeight(2);

  beginShape();
  for (let i = 0; i < TWO_PI; i += TWO_PI / sides) {
    let x = cos(i + t * 0.05) * radius;
    let y = sin(i + t * 0.05) * radius;
    vertex(x, y);
  }
  endShape(CLOSE);

  t++;
}
