function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#2d3436");


  drawRobot(120, 220, 80, 225, 112, 85);
  drawRobot(300, 200, 110, 9, 132, 227); 
  drawRobot(480, 240, 70, 0, 184, 148);
}

function calculateHeadSize(bodySize) {
  return bodySize * 0.65;
}

function drawRobot(x, y, bodySize, r, g, b) {
  let headSize = calculateHeadSize(bodySize);

  stroke(200);
  strokeWeight(4);
  line(x - bodySize / 2, y, x - bodySize / 2 - 20, y + 20);
  line(x + bodySize / 2, y, x + bodySize / 2 + 20, y + 20);
  line(x - bodySize / 4, y + bodySize / 2, x - bodySize / 4, y + bodySize / 2 + 30);
  line(x + bodySize / 4, y + bodySize / 2, x + bodySize / 4, y + bodySize / 2 + 30);

  noStroke();
  fill(r, g, b);
  rectMode(CENTER);
  rect(x, y, bodySize, bodySize, 8);

  fill(r * 0.8, g * 0.8, b * 0.8);
  rect(x, y - bodySize / 2 - headSize / 2, headSize, headSize, 5);

  fill(255);
  let eyeOffset = headSize * 0.25;
  let eyeY = y - bodySize / 2 - headSize / 2;
  circle(x - eyeOffset, eyeY, headSize * 0.2);
  circle(x + eyeOffset, eyeY, headSize * 0.2);
  fill(0);
  circle(x - eyeOffset, eyeY, headSize * 0.1);
  circle(x + eyeOffset, eyeY, headSize * 0.1);

  rectMode(CORNER);
}