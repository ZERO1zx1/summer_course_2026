let currentX = 0;
let circleY;

function setup() {
  createCanvas(600, 200);

  background(30);

  circleY = height / 2;
  noStroke();
}

function draw() {
  let redVal = 255;
  let greenVal = map(currentX, 0, width, 80, 220);
  let blueVal = 40;
  
  fill(redVal, greenVal, blueVal);

  circle(currentX, circleY, 30);

  currentX = currentX + 2;
}