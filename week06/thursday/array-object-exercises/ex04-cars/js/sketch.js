let cars = [];

function setup() {
  createCanvas(700, 400);
  for (let i = 0; i < 6; i++) {
    cars.push({
      x: random(-300, width),
      y: 90 + i * 45,
      width: random(55, 90),
      height: 25,
      speed: random(1, 4),
      r: random(80, 255),
      g: random(80, 220),
      b: random(80, 255)
    });
  }
}

function draw() {
  background(100, 170, 220);
  drawRoad();
  for (let car of cars) {
    drawCar(car);
    car.x += car.speed;
    if (car.x > width + car.width) {
      car.x = -car.width;
      car.speed = random(1, 4);
      car.r = random(80, 255);
      car.g = random(80, 220);
      car.b = random(80, 255);
    }
  }
}

function drawRoad() {
  noStroke();
  fill(55);
  rect(0, 65, width, 300);
  stroke(255);
  strokeWeight(4);
  for (let y = 90; y < 350; y += 45) {
    line(0, y, width, y);
  }
  noStroke();
}

function drawCar(car) {
  fill(car.r, car.g, car.b);
  rect(car.x, car.y, car.width, car.height, 6);
  fill(180, 225, 245);
  rect(car.x + 12, car.y - 14, car.width * 0.45, 16, 4);
  fill(20);
  circle(car.x + 15, car.y + car.height, 14);
  circle(car.x + car.width - 15, car.y + car.height, 14);
}
