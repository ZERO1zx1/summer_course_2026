function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  fill(0);

  for (let i = 0; i < 6; i++) {
    let x = 50;
    let y = 50 + i * 40;
    let size = 15;

    square(x, y, size);
  }
}