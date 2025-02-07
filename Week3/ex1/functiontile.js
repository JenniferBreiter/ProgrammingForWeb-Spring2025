function setup() {
    createCanvas(200, 200);

}
function createTile(){
    translate(0, 0);
    fill('#09122C');
    rect(0, 0, 200, 200);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    line(0, 100, 100, 0);
    line(0, 100, 200, 100);
    line(200, 100, 100, 200);
    line(0, 100, 100, 200);
    line(100, 0, 200, 100);
    noFill();
    noStroke();
    stroke('#872341');
    strokeWeight(5);
    circle(100, 100, 100);
    circle(100, 100, 150);
    fill('#BE3144');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    fill('#E17564');
    circle(100, 100, 80);
    noFill();
    circle(100, 100, 200);
    fill('#E17564');
    circle(200, 200, 140);
    circle(0, 200, 140);
    circle(0, 0, 140);
    circle(200, 0, 140);
    fill('#BE3144');
    circle(200, 200, 100);
    circle(0, 0, 100);
    circle(200, 0, 100);
    circle(0, 200, 100);

}

function draw(){
    createTile();
}