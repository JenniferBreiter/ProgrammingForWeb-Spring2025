let spacing = 30;

function setup() {
  createCanvas(800, 800);
  background(20);
  noStroke();
}

function draw() {
  background(20, 20, 20, 25);

  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      // Color shifts over time based on frameCount
      let r = map(sin(frameCount * 0.01 + x * 0.05), -1, 1, 100, 255);
      let g = map(sin(frameCount * 0.01 + y * 0.05), -1, 1, 100, 255);
      let b = map(sin((x + y) * 0.01 + frameCount * 0.05), -1, 1, 150, 255);
      fill(r, g, b, 180);

      // Circle size also changes over time
      let size = map(sin(frameCount * 0.02 + x * 0.02), -1, 1, 10, spacing * 0.5);
      ellipse(x, y, size, size);
    }
  }
}
