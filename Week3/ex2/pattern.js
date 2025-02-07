function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, backgroundColor, primaryColor, secondaryColor, thirdColorChoice) {
    translate(originX, originY);

    //background
    fill(backgroundColor);
    rect(0, 0, 200, 200);
    //lines
    noFill();
    noStroke();
    stroke(primaryColor);
    strokeWeight(5);
    line(0, 100, 100, 0);
    line(100, 0, 200, 100);
    line(0, 100, 100, 200);
    line(100, 200, 200, 100);
    //circles 
    noFill();
    noStroke();
    stroke(primaryColor);
    strokeWeight(5);
    circle(100, 100, 105);
    circle(100, 100, 150);
    circle(100, 100, 200);
    //petals
    fill(secondaryColor);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    //center circle
    fill(thirdColorChoice);
    circle(100, 100, 70);
    //corner circles
    fill(thirdColorChoice);
    circle(200, 200, 140);
    circle(0, 200, 140);
    circle(0, 0, 140);
    circle(200, 0, 140);
    //inner corner circles
    fill(secondaryColor);
    circle(200, 200, 100);
    circle(0, 0, 100);
    circle(200, 0, 100);
    circle(0, 200, 100);

}

function draw() {
    createTile(0, 0, '#84B082', '#872341', '#BE3144', '#E17564');
    createTile(0, 200, '#C5EBC3', '#872341', '#BE3144', '#E17564');
    createTile(0, 200, '#EAF2D7', '#872341', '#BE3144', '#E17564');
    createTile(200, -400, '#BFCDE0', '#872341', '#BE3144', '#E17564');
    createTile(0, 200, '#F8E5EE', '#872341', '#BE3144', '#E17564');
    createTile(0, 200, '#FFD791', '#872341', '#BE3144', '#E17564');
    createTile(200, -400, '#CAD178', '#872341', '#BE3144', '#E17564');
    createTile(0, 200, '#B4EDD2', '#872341', '#BE3144', '#E17564');
    createTile(0, 200, '#98B06F', '#872341', '#BE3144', '#E17564');
    
}