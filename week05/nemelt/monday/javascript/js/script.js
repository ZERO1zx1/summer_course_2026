function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {
    fill(255, 220, 0);
    circle(200, 200, 250);
    fill(0);
    circle(150, 150, 50);
    circle(250, 150, 50);
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(200, 220, 130, 120, 0, PI);
}