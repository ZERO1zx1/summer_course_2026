function setup() {
  createCanvas(1200, 1200);
}

function draw() {
  background(255);
  stroke("#222222");
  strokeWeight(3);

  for (let i = 0; i < 10; i++) {
    let x = 50 + i * 55;
    line(x, 50, x, 350);
  }

  for (let i = 0; i < 3; i++) {
    let y = 50 + i * 150; 
    line(50, y, 545, y);
  }
}