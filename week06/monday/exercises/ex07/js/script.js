function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#f5f5f5");

  drawBall(100, 100, 60, 255, 0, 0);

  drawBall(220, 100, 60, 0, 255, 0);

  drawBall(340, 100, 60, 0, 0, 255);

  drawBall(460, 100, 60, 150, 0, 200);

  drawBall(280, 260, 90, 255, 165, 0);
}

function drawBall(x, y, size, r, g, b) {
  fill(r, g, b);
  circle(x, y, size);
}