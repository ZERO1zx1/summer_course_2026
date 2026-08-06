let targetX;
let targetY;
let targetSize = 80;
let score = 0;

function setup() {
    createCanvas(600, 400);
    targetX = random(targetSize/2, width - targetSize/2);
    targetY = random(targetSize/2, height - targetSize/2);
}

function draw() {
    background(240);

    fill("#e74c3c");
    noStroke();
    circle(targetX, targetY, targetSize);

    fill(0);
    text("Score: " + score, 20, 30);
}

function mousePressed() {
    let d = dist(mouseX, mouseY, targetX, targetY);

    if (d < targetSize / 2) {
        score++;
        targetX = random(targetSize/2, width - targetSize/2);
        targetY = random(targetSize/2, height - targetSize/2);
    } else {
        score--;
    }
}