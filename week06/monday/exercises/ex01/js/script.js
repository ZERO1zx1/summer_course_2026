function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#87ceeb");
  drawSun();
}

function drawSun() {
  fill("yellow");
  noStroke();
  circle(300, 120, 120);
}