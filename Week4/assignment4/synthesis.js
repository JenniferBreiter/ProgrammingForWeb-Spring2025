const cards = [];
let startingX = 75;
let startingY = 200;
let cardHeight = 400;
let cardWidth = 250;
let startingId = 0;

function setup (){
    createCanvas(1500, 1500);
    background('lightblue');

    // rectangle cards
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 5; i++){
            rect(startingX, startingY, cardWidth, cardHeight);
            cards.push({ x: startingX, y: startingY, id: startingId });
            startingX += 275;
            startingId++;
        }
        startingX = 75;
        startingY += 425; 
    }
    
    console.log(cards);
}

function mousePressed (){
    for (let j = 0; j < cards.length; j++) {
       let distance = dist(mouseX, mouseY, cards[j].x, cards[j].y);
       if (distance < cardWidth / 2, distance < cardHeight / 2) {
            console.log('Card has been clicked', cards[j].id);
        }
    }
}
