function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#dff6ff");

  for (let i = 0; i < 5; i++) {
    let x = 80 + i * 100;
    let y = 100 + i * 45;
    let size = 30 + i * 8;
    drawFish(x, y, size);
  }
}

function drawFish(x, y, size) {
  fill("#ff7675");
  triangle(
    x - size, y - size / 2,
    x - size, y + size / 2,
    x, y
  );

  fill("#fab1a0");
  ellipse(x, y, size * 1.6, size);

  fill(0);
  circle(x + size * 0.4, y - size * 0.15, size * 0.2);
}