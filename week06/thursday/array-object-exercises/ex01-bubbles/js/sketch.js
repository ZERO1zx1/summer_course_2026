let bubbles = [];

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 15; i++) {
    bubbles.push({
      x: random(width),
      y: random(height),
      speed: random(1, 4),
      size: random(15, 35)
    });
  }
}

function draw() {
  background(12, 22, 45);
  for (let bubble of bubbles) {
    fill(80, 180, 255, 190);
    stroke(220, 245, 255);
    circle(bubble.x, bubble.y, bubble.size);
    bubble.y -= bubble.speed;
    if (bubble.y < -bubble.size) {
      bubble.y = height + bubble.size;
      bubble.x = random(width);
    }
  }
}
