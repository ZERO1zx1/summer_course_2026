function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#f5f5f5");

  drawHouse(50, 200);
  drawHouse(230, 200);
  drawHouse(410, 200);
}

function drawHouse(x, y) {
  fill("#ffeaa7");
  rect(x, y, 140, 120);

  fill("#d63031");
  triangle(x - 10, y, x + 70, y - 60, x + 150, y);

  fill("#6c5ce7");
  rect(x + 55, y + 60, 30, 60);

  fill("#74b9ff");
  rect(x + 20, y + 20, 25, 25);

  rect(x + 95, y + 20, 25, 25);
}function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#f5f5f5");

  drawHouse(40, 200);
  drawHouse(220, 200);
  drawHouse(400, 200);
}

function drawHouse(x, y) {
  fill("#ffeaa7");
  stroke(0);
  strokeWeight(2);
  rect(x, y, 150, 120);

  fill("#d63031");
  triangle(
    x - 10, y,
    x + 75, y - 60,
    x + 160, y
  );

  fill("#6c5ce7");
  rect(x + 60, y + 60, 30, 60);

  fill("#74b9ff");
  rect(x + 20, y + 25, 30, 30);

  rect(x + 100, y + 25, 30, 30);
}