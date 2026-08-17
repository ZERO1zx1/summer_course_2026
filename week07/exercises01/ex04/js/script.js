// ===== artPlan =====
const artPlan = {
  title: "Particle Motion",
  background: "#0f172a",
  palette: ["#a78bfa", "#8b5cf6", "#c4b5fd"],
  shape: "circle",
  count: 1,
  speed: 1.2
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
      x: 120,
      y: 75,
      size: 32,
      vx: 1.2,
      vy: -0.7,
      color: "#38bdf8"
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