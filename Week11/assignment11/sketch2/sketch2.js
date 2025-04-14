function setup() {
    createCanvas(600, 600);
    strokeWeight(2);
  }
  
  function draw() {
    background(250);
    noFill();
    stroke(209, 0, 157);
    beginShape();
    for (let x = 0; x < width; x += 10) {
      let angle = (x * 0.05) + (frameCount * 0.05);
      let y = height/2 + sin(angle) * 100;
      vertex(x, y);
    }
    endShape();
  }
  