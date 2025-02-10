let rotateBy = 5;
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES)
}

function makeEllipse(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke('orange');
    strokeWeight(2);
    ellipse(150, 150 + alt, 150 - alt);
}

function makeTriangle(rotateBy) {
    let alt = Math.round(rotateBy / 90);
    stroke('blue');
    strokeWeight(5);
    triangle(150, 300, 150, 200, 350, 250);
}

function makeCenter(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(255);
    strokeWeight(3);
    ellipse(100, 100, 100);

}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeEllipse(rotateBy);
    makeTriangle(rotateBy);
    makeCenter(rotateBy);
    rotateBy += 5;

}

function mousePressed() { 
    noLoop();
}