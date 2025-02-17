const cards = [];
let startingX = 75;
let startingY = 200;
let cardHeight = 400;
let cardWidth = 250;
let startingId = 0;

function setup (){
    createCanvas(1500, 1500);
    background('lightblue');
}
function draw (){
    noLoop();
    // cards
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
       let cardX = cards[j].x;
       let cardY = cards[j].y;
       if (mouseX > cardX && mouseX < cardX + cardWidth && mouseY > cardY && mouseY < cardY + cardWidth) {
            console.log('Card', cards[j].id + ' has been clicked');
        }
    }
}
