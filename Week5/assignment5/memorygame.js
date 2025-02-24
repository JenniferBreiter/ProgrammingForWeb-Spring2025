const DOWN = 'down';
const UP = 'up';
let cards = [];
const gameState = {
  totalPairs: 6,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false
};

let cardfaceArray = [
  "images/doramar.jpeg",
  "images/lasmeninas.jpeg",
  "images/monalisa.jpg",
  "images/starrynight.jpg",
  "images/thekiss.jpeg",
  "images/thesonofman.jpg"
];
let cardBack;

function preload() {
  cardBack = loadImage("images/cardback.jpg");
  for (let i = 0; i < cardfaceArray.length; i++) {
    cardfaceArray[i] = loadImage(cardfaceArray[i]);
  }
}

function setup() {
  createCanvas(800, 800);
  let selectedFaces = shuffleArray([...cardfaceArray, ...cardfaceArray]);
  let startingX = 50;
  let startingY = 150;

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 4; i++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 150;
    }
    startingY += 170;
    startingX = 50;
  }
}

function draw() {
  background('lightblue');

  if (gameState.numMatched === gameState.totalPairs) {
    fill('navy');
    textSize(60);
    textAlign(CENTER, CENTER);
    text('YOU WON!', 400, 350);
    textSize(25);
    textAlign(CENTER, CENTER);
    text('Refresh To Replay', 400, 400);
    noLoop();
    return;
  }

  for (let k = 0; k < cards.length; k++) {
    cards[k].show();
  }
  
  fill(255);
  rect(495, 65, 115, 60, 10);
  fill('navy');
  textSize(20);
  text('Matches  ' + gameState.numMatched, 500, 90);
  text('Attempts  ' + gameState.attempts, 500, 115);
  textSize(43);
  text('Famous Art Matching', 50, 105);
}

function mousePressed() {
  if (gameState.waiting) {
    return;
  }
  for (let k = 0; k < cards.length; k++) {
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      gameState.flippedCards.push(cards[k]);
      cards[k].flip();
    }
  }

  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      gameState.flippedCards = [];
      gameState.numMatched++;
    } else {
      gameState.waiting = true;
      setTimeout(() => {
        gameState.flippedCards[0].flip();
        gameState.flippedCards[1].flip();
        gameState.flippedCards = [];
        gameState.waiting = false;
      }, 1000);
    }
  }
}

class Card {
  constructor(x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 110;
    this.height = 152;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
  }

  show() {
    if (this.face === UP || this.isMatch) {
      image(this.cardFaceImg, this.x, this.y, this.width, this.height);
    } else {
      image(cardBack, this.x, this.y, this.width, this.height);
    }
  }

  didHit(mouseX, mouseY) {
    return mouseX >= this.x && mouseX <= this.x + this.width &&
           mouseY >= this.y && mouseY <= this.y + this.height;
  }

  flip() {
    this.face = this.face === DOWN ? UP : DOWN;
  }
}

function shuffleArray(array) {
  let counter = array.length;
  while (counter > 0) {
    const idx = Math.floor(Math.random() * counter);
    counter--;
    [array[counter], array[idx]] = [array[idx], array[counter]];
  }
  return array;
}
