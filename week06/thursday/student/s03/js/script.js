function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let size = (frameCount * 0.5) % 400 + 10;
  fill(100, 150, 255);
  circle(200, 150, size);
}