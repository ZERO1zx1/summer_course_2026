let stars = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 40; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      speed: random(1, 4),
      size: random(2, 8),
      brightness: random(150, 255)
    });
  }
}

function draw() {
  background(5, 8, 25);
  for (let star of stars) {
    noStroke();
    fill(star.brightness);
    circle(star.x, star.y, star.size);
    star.x += star.speed;
    if (star.x > width + star.size) {
      star.x = -star.size;
      star.y = random(height);
      star.speed = random(1, 4);
    }
  }
}
