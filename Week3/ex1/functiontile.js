function setup() {
    createCanvas(200, 200);
    noLoop();
}
function createTile(){
    translate(0, 0);
    //background
    fill('#09122C');
    rect(0, 0, 200, 200);
    //lines
    noFill();
    noStroke();
    stroke('#872341');
    strokeWeight(5);
    line(0, 100, 100, 0);
    line(100, 0, 200, 100);
    line(0, 100, 100, 200);
    line(100, 200, 200, 100);
    //circles 
    noFill();
    noStroke();
    stroke('#872341');
    strokeWeight(5);
    circle(100, 100, 105);
    circle(100, 100, 150);
    circle(100, 100, 195);
    //petals
    fill('#BE3144');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    //center circle
    fill('#E17564');
    circle(100, 100, 70);
    //corner circles
    fill('#E17564');
    circle(200, 200, 140);
    circle(0, 200, 140);
    circle(0, 0, 140);
    circle(200, 0, 140);
    //inner corner circles
    fill('#BE3144');
    circle(200, 200, 100);
    circle(0, 0, 100);
    circle(200, 0, 100);
    circle(0, 200, 100);

}

function draw(){
    createTile();
}