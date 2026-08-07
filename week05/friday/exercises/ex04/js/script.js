function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#dedede");
  stroke(0);
  strokeWeight(2);

  let cols = 5;
  let rows = 5;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {

      let x = 60 + i * 95;
      let y = 60 + j * 95;
      let r = 0 + j * 50;
      let g = 0 + i * 45 + j * 30;
      let b = 150 - j * 20 + i * 10;

      fill(r, g, b);
      circle(x, y, 70); 
    }
  }
}