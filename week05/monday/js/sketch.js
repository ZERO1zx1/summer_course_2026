function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(135, 206, 235);

  fill(255, 255, 0);
  noStroke();
  circle(350, 60, 80);

  // Байшингийн хана
  fill(210, 180, 140);
  stroke(0);
  strokeWeight(3);
  rect(100, 200, 200, 180);

  fill(178, 34, 34);
  triangle(80, 200, 300, 200, 190, 100);

  // Хаалга
  fill(139, 69, 19);
  rect(175, 280, 50, 100);

  // Цонх
  fill(173, 216, 230);
  rect(125, 230, 50, 50);
  rect(225, 230, 50, 50);
}