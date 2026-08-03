function setup() {
  createCanvas(200, 200);
}
function draw() {
  background(255);
  fill(255, 220, 0);
  circle(100, 100, 150);
  fill(0);
  circle(65, 80, 15);
  circle(135, 80, 15);
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(100, 110, 80, 60, 0, PI);

}