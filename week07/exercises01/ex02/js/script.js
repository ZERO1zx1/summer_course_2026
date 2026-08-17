// ===== artPlan (ЗӨВХӨН ЭНЭ ХЭСЭГ ӨӨРЧЛӨГДСӨН) =====
const artPlan = {
  title: "Desert Sunset",
  background: "#2d1b00",
  palette: ["#ff6b35", "#ffd166", "#f4a261"],
  shape: "square",
  count: 15,
  speed: 2.2
};

// ===== Engine (ӨӨРЧЛӨГДӨХГҮЙ) =====
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