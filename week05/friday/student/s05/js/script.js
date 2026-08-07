function setup() {
  createCanvas(700, 350);
}

function draw() {
  background("#f5f5f5");

  fill("rgba(255, 234, 0, 0.44)");
  noStroke();

  for (let i = 0; i < 5; i++) {
    let x = 100 + i * 120;
    let y = 175;
    let size = 40 + i * 20;

    circle(x, y, size);
  }
}