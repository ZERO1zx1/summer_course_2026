// ===== artPlan =====
const artPlan = {
  title: "Plan Change",
  background: "#1a0b2e",
  palette: ["#f472b6", "#f9a8d4", "#ec4899"],
  shape: "circle",
  count: 10,
  speed: 1.5
};

// ===== Engine =====
let particles = [];

function setup() {
  createCanvas(600, 400);
  buildScene(artPlan);
}

function buildScene(plan) {
  particles = [];
  for (let i = 0; i < plan.count; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      size: random(20, 55),
      vx: random(-plan.speed, plan.speed),
      vy: random(-plan.speed, plan.speed),
      color: random(plan.palette)
    });
  }
}

function draw() {
  background(artPlan.background);
  for (let p of particles) {
    updateParticle(p);
    drawParticle(p, artPlan.shape);
  }
}

function updateParticle(particle) {
  particle.x += particle.vx;
  particle.y += particle.vy;
  // Canvas-ийн захад хүрвэл чиглэлээ солино
  if (particle.x < 0 || particle.x > width) particle.vx *= -1;
  if (particle.y < 0 || particle.y > height) particle.vy *= -1;
}

function drawParticle(particle, shape) {
  noStroke();
  fill(particle.color);
  if (shape === "square") {
    rectMode(CENTER);
    square(particle.x, particle.y, particle.size);
  } else {
    circle(particle.x, particle.y, particle.size);
  }
}

// Mouse дархад count-ийг өөрчилж, scene дахин build хийнэ
function mousePressed() {
  // count-ийг 5-20 хооронд санамсаргүй өөрчилнө
  artPlan.count = Math.floor(random(5, 20));
  buildScene(artPlan);
}