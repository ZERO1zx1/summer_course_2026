let doorX = 250;
let doorY = 200;
let doorWidth = 100;
let doorHeight = 150;
let doorColor = "#8b4513";

function setup() {
  createCanvas(700, 450);
  textAlign(CENTER, CENTER);
  textSize(24);
  textStyle(BOLD);
}

function draw() {
  background("#87ceeb");

  fill(220);
  rect(150, 100, 300, 250);
  fill("#c0392b");
  triangle(150, 100, 300, 20, 450, 100);

  let isMouseOnDoor = (mouseX > doorX &&
    mouseX < doorX + doorWidth &&
    mouseY > doorY &&
    mouseY < doorY + doorHeight);

  if (isMouseOnDoor && mouseIsPressed) {
    doorColor = "#2ecc71";
  }

  else if (isMouseOnDoor) {
    doorColor = "#f1c40f";
  }

  else {
    doorColor = "#8b4513";
  }

  fill(doorColor);
  rect(doorX, doorY, doorWidth, doorHeight);

  if (isMouseOnDoor && mouseIsPressed) {
    fill(255);
    text("OPEN", doorX + doorWidth / 2, doorY + doorHeight / 2);
  }
}