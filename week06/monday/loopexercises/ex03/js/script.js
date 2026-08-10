let barWidth = 50;
let startX = 70;
let gap = 70;

function setup() {
    createCanvas(800, 450);
}

function draw() {
    background("#f5f5f5");
    fill("#9b59b6");
    noStroke();

    for (let i = 0; i < 10; i++) {
        let barHeight = 50 + (i * 30);
        rect(startX + i * gap, height - barHeight, barWidth, barHeight);
    }

    noLoop();
}