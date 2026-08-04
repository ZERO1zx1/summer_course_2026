let size = 50;
let spacing = 20;

function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(220);
  fill(100, 150, 250);

  rect(50, 100, size, size);

  rect(50 + size + spacing, 100, size, size);

  rect(50 + (size + spacing) * 2, 100, size, size);

  rect(50 + (size + spacing) * 3, 100, size, size);
}