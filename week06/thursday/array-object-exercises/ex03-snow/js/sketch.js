let snowflakes = [];

function setup() {
  createCanvas(600, 450);
  for (let i = 0; i < 50; i++) {
    snowflakes.push({
      x: random(width),
      y: random(height),
      speed: random(1, 4),
      size: random(3, 10),
      drift: random(-0.5, 0.5)
    });
  }
}

function draw() {
  background(25, 45, 75);
  for (let snowflake of snowflakes) {
    noStroke();
    fill(255, 255, 255, 220);
    circle(snowflake.x, snowflake.y, snowflake.size);
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.drift;
    if (snowflake.y > height + snowflake.size) {
      snowflake.y = -snowflake.size;
      snowflake.x = random(width);
    }
    if (snowflake.x < 0) snowflake.x = width;
    if (snowflake.x > width) snowflake.x = 0;
  }
}
