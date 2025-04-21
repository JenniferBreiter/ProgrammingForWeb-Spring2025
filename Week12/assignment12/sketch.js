let poppingLoop;
let isPoppingPlaying = false;

let popLayers = {};
let layerLabels = ['Pop 1', 'Pop 2', 'Pop 3', 'Pop 4', 'Pop 5', 'Pop 6'];
let layerPositions = [];
let loopingLayers = {};

function preload() {
  poppingLoop = loadSound('sounds/pop-beat.mp3');
  popLayers['Pop 1'] = loadSound('sounds/pop-1.mp3');
  popLayers['Pop 2'] = loadSound('sounds/pop-2.mp3');
  popLayers['Pop 3'] = loadSound('sounds/pop-3.mp3');
  popLayers['Pop 4'] = loadSound('sounds/pop-4.mp3');
  popLayers['Pop 5'] = loadSound('sounds/pop-5.mp3');
  popLayers['Pop 6'] = loadSound('sounds/pop-6.mp3');
}

function setup() {
  createCanvas(700, 300);
  textAlign(CENTER, CENTER);
  textSize(16);
  noStroke();

  // Position loop pads in a horizontal row
  for (let i = 0; i < layerLabels.length; i++) {
    let label = layerLabels[i];
    layerPositions.push({
      label: label,
      x: 120 + i * 90, // space horizontally
      y: 200
    });
    loopingLayers[label] = false;
  }
}

function draw() {
  background(30);

  // Instructions at top
  fill(255);
  textSize(16);
  text("Create your own jam session!", width / 2, 30);
  text("Play the loop then click the pop buttons to turn sounds on/off.", width / 2, 55);

  // Loop button under text
  fill(isPoppingPlaying ? '#3DF59F' : '#999EAD');
  rect(width / 2 - 80, 80, 160, 45, 12);
  fill(0);
  textSize(16);
  text(isPoppingPlaying ? 'Stop Popping Loop' : 'Play Popping Loop', width / 2, 102);

  // Horizontal loop pads
  for (let pad of layerPositions) {
    let isLooping = loopingLayers[pad.label];
    fill(isLooping ? '#FFE700' : '#0786B2');
    rect(pad.x - 30, pad.y - 30, 60, 60, 12);

    fill(0);
    textSize(14);
    text(pad.label, pad.x, pad.y);
  }
}

function mousePressed() {
  // Loop button bounds
  if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > 80 && mouseY < 125) {
    if (!isPoppingPlaying) {
      poppingLoop.loop();
      isPoppingPlaying = true;
    } else {
      poppingLoop.stop();
      isPoppingPlaying = false;
    }
  }

  // Loop pad toggles
  for (let pad of layerPositions) {
    let withinX = mouseX > pad.x - 30 && mouseX < pad.x + 30;
    let withinY = mouseY > pad.y - 30 && mouseY < pad.y + 30;

    if (withinX && withinY) {
      let layer = popLayers[pad.label];

      if (!loopingLayers[pad.label]) {
        layer.loop();
        loopingLayers[pad.label] = true;
      } else {
        layer.stop();
        loopingLayers[pad.label] = false;
      }
    }
  }
}