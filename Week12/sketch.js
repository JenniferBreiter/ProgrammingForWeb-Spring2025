let sound1, sound2, sound3;

function preload() {
  sound1 = loadSound('Crackling_Fire.mp3');
  sound2 = loadSound('rain_start.mp3');
  sound3 = loadSound('water-swamp.mp3');
}

function setup() {
  createCanvas(600, 400);
  background(240);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Press F, R, or W to play the sounds of nature...", width / 2, height / 2);
}

function stopAllSounds() {
  if (sound1.isPlaying()) sound1.stop();
  if (sound2.isPlaying()) sound2.stop();
  if (sound3.isPlaying()) sound3.stop();
}

function keyPressed() {
  stopAllSounds(); // stop any currently playing sound

  if (key === 'F' || key === 'f') {
    sound1.play();
    stopAfterDelay(sound1);
  } else if (key === 'R' || key === 'r') {
    sound2.play();
    stopAfterDelay(sound2);
  } else if (key === 'W' || key === 'w') {
    sound3.play();
    stopAfterDelay(sound3);
  }
}

function stopAfterDelay(sound) {
  setTimeout(() => {
    if (sound.isPlaying()) {
      sound.stop();
    }
  }, 4000); // 4000 ms = 4 seconds
}
