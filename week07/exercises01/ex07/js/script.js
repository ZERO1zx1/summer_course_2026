// ===== Scene 1 — Calm =====
const scene1 = {
  title: "Calm",
  background: "#0a1628",
  palette: ["#67e8f9", "#38bdf8", "#a5f3fc"],
  shape: "circle",
  count: 8,
  speed: 0.8
};

// ===== Scene 2 — Energy =====
const scene2 = {
  title: "Energy",
  background: "#1a0500",
  palette: ["#ff0000", "#ff6b35", "#ffd166"],
  shape: "square",
  count: 25,
  speed: 2.8
};

// ===== Engine =====
let artPlan = scene1;
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

// Mouse дархад scene-ийг солино
function mousePressed() {
  if (artPlan === scene1) {
    artPlan = scene2;
  } else {
    artPlan = scene1;
  }
  buildScene(artPlan);
}