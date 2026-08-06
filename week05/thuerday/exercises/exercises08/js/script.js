let buttonX = 200;
let buttonY = 150;
let buttonWidth = 200;
let buttonHeight = 80;

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    textSize(24);
}

function draw() {
    background(240);

    let isMouseInside = (
        mouseX > buttonX && 
        mouseX < buttonX + buttonWidth && 
        mouseY > buttonY && 
        mouseY < buttonY + buttonHeight
    );

    let buttonColor;

    if (isMouseInside && mouseIsPressed) {
        buttonColor = "#1e8449"; 
    } else if (isMouseInside) {
        buttonColor = "#2ecc71"; 
    } else {
        buttonColor = "#3498db";
    }

    fill(buttonColor);
    noStroke();
    rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);

    fill(255);
    text("START", width / 2, height / 2);
}