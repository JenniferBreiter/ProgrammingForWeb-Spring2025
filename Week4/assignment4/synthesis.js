let myCard = [];
let startingX = 25;
let startingY = 50;
let cardHeight = 400;
let cardWidth = 250;
let startingId = 0;

function setup (){
    createCanvas(1500, 1000);
    background(150);
    // rectangle cards
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 5; i++){
            rect(startingX, startingY, cardWidth, cardHeight);
            myCard.push({ x: startingX, y: startingY, id: startingId });
            startingX += 275;
            startingId++;
        }
        startingX = 25;
        startingY += 425; 
    }
    
    console.log(myCard);
}

function mousePressed (){
    for (let j = 0; j < myCard.length; j++) {
        let distance = dist(mouseX, mouseY, myCard[j].x, myCard[j].y);
        if (distance < cardWidth, distance < cardHeight) {
            console.log('Card has been clicked');
        }
    }
}
