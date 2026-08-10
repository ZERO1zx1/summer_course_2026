let fishX = -100;
let fishSpeed = 2;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(140, 195, 220);
  
  noStroke();
  fill(225, 190, 110);
  rect(0, 420, width, 80);

  let fishes = [
    { y: 90,  scale: 0.6 },
    { y: 165, scale: 1.2 },
    { y: 245, scale: 0.8 },
    { y: 320, scale: 1.4 },
    { y: 395, scale: 0.7 }
  ];

  for (let f of fishes) {
    drawFish(fishX, f.y, f.scale);
  }

  fishX += fishSpeed;

  if (fishX > width + 100) {
    fishX = -100;
  }
}

function drawFish(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  let tailAngle = sin(frameCount * 0.15) * 15; 

  push();
  translate(-35, 0);
  rotate(radians(tailAngle));
  fill(235, 100, 75);
  triangle(-25, -20, -25, 20, 0, 0);
  pop();

  fill(245, 160, 95);
  ellipse(0, 0, 70, 50);

  fill(255);
  ellipse(18, -5, 10, 10);
  fill(0);
  ellipse(20, -5, 4, 4);

  pop();
}