let rotateBy = 10;
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
    let alt = Math.round(rotateBy / 360);
    stroke('blue');
    strokeWeight(5);
    triangle(150, 300, 150, 200, 350 , 250);
}

function makeCenter(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(255);
    strokeWeight(3);
    ellipse(100 + alt, 100 + alt, 100 + alt);

}

function makeLine(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    stroke('purple');
    strokeWeight(5);
    line(10, 10, 300 + alt, 300 - alt);
}


function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeEllipse(rotateBy);
    makeTriangle(rotateBy);
    makeCenter(rotateBy);
    makeLine(rotateBy);
    rotateBy += 10;
}

function mousePressed() { 
    noLoop();
}