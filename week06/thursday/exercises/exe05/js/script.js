// Exercise 5 - Solar System
// frameCount, cos(), sin() ашиглан нэг object-ийг төв цэгийг тойруулан хөдөлгөх

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(10, 10, 25);

  // Canvas-ийн төвийн x, y байрлалыг хувьсагчид хадгалах
  let centerX = width / 2;
  let centerY = height / 2;

  // Sun-ийн хэмжээ
  let sunSize = 80;

  // Orbit radius
  let orbitRadius = 180;

  // Planet-ийн angle утгыг frameCount ашиглан тооцоолох
  // frameCount * жижиг тоо → хэт хурдан биш хөдөлгөөн
  let angle = frameCount * 0.02;

  // cos() болон sin() ашиглан planet-ийн x, y байрлалыг тооцоолох
  let planetX = centerX + cos(angle) * orbitRadius;
  let planetY = centerY + sin(angle) * orbitRadius;

  // Orbit-ийг ellipse() ашиглан outline байдлаар харуулах
  noFill();
  stroke(80, 80, 120);
  strokeWeight(1);
  ellipse(centerX, centerY, orbitRadius * 2, orbitRadius * 2);

  // Canvas-ийн төвд Sun зурах
  fill(255, 200, 0);
  noStroke();
  circle(centerX, centerY, sunSize);

  // Тооцоолсон байрлал дээр Planet зурах
  fill(80, 180, 255);
  circle(planetX, planetY, 30);

  // Challenge: 2 дахь planet - өөр radius, өөр хурдтай
  let angle2 = frameCount * 0.05;
  let planet2X = centerX + cos(angle2) * 100;
  let planet2Y = centerY + sin(angle2) * 100;
  fill(255, 120, 80);
  circle(planet2X, planet2Y, 20);
}