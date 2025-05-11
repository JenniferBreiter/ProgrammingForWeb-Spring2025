let drawing = false;

// UI elements
let shapeSelector, symmetrySlider, hueSlider, sizeSlider, radiusSlider;
let bgColorPicker, fillToggle, rotationSlider, speedSlider;

function setup() {
  // Create canvas and attach it to container
  let canvas = createCanvas(windowWidth - 300, windowHeight);
  canvas.parent('canvas-container');

  angleMode(DEGREES);
  colorMode(HSL, 360, 100, 100);
  noFill();

  // Get all UI controls
  shapeSelector = select('#shapeSelector');
  symmetrySlider = select('#symmetrySlider');
  hueSlider = select('#hueSlider');
  sizeSlider = select('#sizeSlider');
  radiusSlider = select('#radiusSlider');
  bgColorPicker = select('#bgColorPicker');
  fillToggle = select('#fillToggle');
  rotationSlider = select('#rotationSlider');
  speedSlider = select('#speedSlider');

  // Dynamically update max radius based on canvas width
  radiusSlider.elt.max = width / 2;

  // Event listener for real-time background color change
  bgColorPicker.input(clearCanvas);

  select('#toggleButton').mousePressed(() => {
    drawing = !drawing;
    select('#toggleButton').html(drawing ? 'Stop Drawing' : 'Start Drawing');
  });

  clearCanvas();
}

function draw() {
  if (!drawing) return;

  frameRate(speedSlider.value());
  translate(width / 2, height / 2); // Center of canvas

  let symmetry = symmetrySlider.value();
  let shape = shapeSelector.value();
  let radius = radiusSlider.value();
  let size = sizeSlider.value();
  let rotation = rotationSlider.value();
  let baseHue = hueSlider.value();

  if (fillToggle.elt.checked) {
    fill(baseHue, 80, 60, 0.6);
  } else {
    noFill();
  }

  for (let i = 0; i < symmetry; i++) {
    rotate(360 / symmetry);
    push();
    translate(radius + random(-2, 2), 0);
    rotate(rotation);
    let h = (baseHue + random(-20, 20)) % 360;
    stroke(h, 80, 50, 0.6);
    drawShape(0, 0, size, shape);
    pop();
  }

  resetMatrix();
}

// Draw shape based on selection or randomly
function drawShape(x, y, size, shapeType) {
  let options = ['circle', 'triangle', 'square', 'line'];
  let s = shapeType === 'all' ? random(options) : shapeType;

  switch (s) {
    case 'circle':
      ellipse(x, y, size);
      break;
    case 'triangle':
      triangle(
        x, y - size / 2,
        x - size / 2, y + size / 2,
        x + size / 2, y + size / 2
      );
      break;
    case 'square':
      rectMode(CENTER);
      rect(x, y, size, size);
      break;
    case 'line':
      line(x - size / 2, y - size / 2, x + size / 2, y + size / 2);
      break;
  }
}

// Clear and reset canvas with selected background color
function clearCanvas() {
  background(bgColorPicker.value());
}

// 🖱️ Mouse drag (left/right) to adjust radius
function mouseDragged() {
  let deltaX = mouseX - pmouseX;
  // Adjust radius only if mouse is inside the canvas area and not near the slider
  if (mouseX >= 0 && mouseX <= width) {
    let newRadius = radiusSlider.value() + deltaX;
    radiusSlider.value(constrain(newRadius, 0, width / 2));
  }
}

// Save the canvas as an image file
function saveCanvasAsImage() {
  saveCanvas('mandala', 'png');
}

// ⌨️ Arrow keys to shift hue/speed
function keyPressed() {
  let hue = int(hueSlider.value());
  let symmetry = int(symmetrySlider.value());

  if (keyCode === RIGHT_ARROW) {
    hueSlider.value((hue + 10) % 360);
  } else if (keyCode === LEFT_ARROW) {
    hueSlider.value((hue - 10 + 360) % 360);
  } else if (keyCode === UP_ARROW) {
    symmetrySlider.value(constrain(symmetry + 1, 1, 60));
  } else if (keyCode === DOWN_ARROW) {
    symmetrySlider.value(constrain(symmetry - 1, 1, 60));
  }
}
