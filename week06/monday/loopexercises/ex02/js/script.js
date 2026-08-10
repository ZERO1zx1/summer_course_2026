let boxSize = 45;
let startX = 60;
let gap = 70;

function setup() {
    createCanvas(800, 400);
    rectMode(CENTER);
}

function draw() {
    background("#f5f5f5");
    noStroke();

    fill("#3498db");
    for (let i = 0; i < 10; i++) {
        rect(startX + i * gap, 100, boxSize, boxSize);

    }

    fill("#e67e22");
    for (let i = 0; i < 10; i++) {
        rect(startX + i * gap, 170, boxSize, boxSize);
    }

    fill("#2ecc71");
    for (let i = 0; i < 10; i++) {
        rect(startX + i * gap, 240, boxSize, boxSize);
    }

}