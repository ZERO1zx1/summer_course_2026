let targetX = 100;
let targetY = 200;
let targetSize = 70;
let targetSpeed = 4;
let score = 0;
let lives = 3;
let gameState = "playing";

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(240);

    if (gameState === "playing") {
        targetX += targetSpeed;

        if (targetX < targetSize / 2 || targetX > width - targetSize / 2) {
            targetSpeed *= -1;
        }

        fill("#e74c3c");
        noStroke();
        circle(targetX, targetY, targetSize);
    } else {
        background(30);
        fill("#e74c3c");
        textSize(48);
        text("GAME OVER", width / 2, height / 2);
    }

    fill(0);
    text("Score: " + score + " | Lives: " + lives, 20, 30);
}

function mousePressed() {
    if (gameState !== "playing") return;

    let d = dist(mouseX, mouseY, targetX, targetY);

    if (d < targetSize / 2) {
        score++;
        targetSpeed *= 1.1;
        targetY = random(targetSize / 2, height - targetSize / 2);
    } else {
        lives--;
        if (lives <= 0) {
            gameState = "gameOver";
        }
    }
}

function doubleClicked() {
    targetX = 100;
    targetY = 200;
    targetSpeed = 4;
    score = 0;
    lives = 3;
    gameState = "playing";
}