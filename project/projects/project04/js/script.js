// ==========================================
// Generative Art Studio — Scene Engine v1
// Data-driven design: зөвхөн artPlan өгөгдлийг
// өөрчлөхөд engine код өөрчлөгдөхгүй.
// ==========================================

// ===== artPlan (өгөгдөл) =====
const artPlan = {
  title: "Neon Dreams",
  background: "#0a0a1a",
  palette: ["#00ff88", "#00ccff", "#ff00ff"],
  shape: "circle",
  count: 15,
  speed: 1.5,
  minSize: 20,
  maxSize: 55
};

// ===== Engine state =====
let particles = [];

// ===== Setup =====
function setup() {
  const canvas = createCanvas(800, 500);
  canvas.parent("canvas-container");
  buildScene(artPlan);
  setupControls();
}

// ===== buildScene: plan-аас particles array үүсгэнэ =====
function buildScene(plan) {
  particles = [];
  for (let i = 0; i < plan.count; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      size: random(plan.minSize, plan.maxSize),
      vx: random(-plan.speed, plan.speed),
      vy: random(-plan.speed, plan.speed),
      color: random(plan.palette)
    });
  }
}

// ===== draw: frame бүрд update + render =====
function draw() {
  background(artPlan.background);
  for (let p of particles) {
    updateParticle(p);
    drawParticle(p, artPlan.shape);
  }
}

// ===== updateParticle: хөдөлгөөн + boundary logic =====
function updateParticle(particle) {
  particle.x += particle.vx;
  particle.y += particle.vy;

  // Canvas-ийн захад хүрвэл чиглэлээ солино
  if (particle.x < 0 || particle.x > width) particle.vx *= -1;
  if (particle.y < 0 || particle.y > height) particle.vy *= -1;
}

// ===== drawParticle: shape-аар render хийнэ =====
function drawParticle(particle, shape) {
  noStroke();
  fill(particle.color);

  if (shape === "square") {
    rectMode(CENTER);
    square(particle.x, particle.y, particle.size);
  } else if (shape === "triangle") {
    const s = particle.size / 2;
    triangle(
      particle.x, particle.y - s,
      particle.x - s, particle.y + s,
      particle.x + s, particle.y + s
    );
  } else {
    circle(particle.x, particle.y, particle.size);
  }
}

// ===== mousePressed: canvas дарахад scene rebuild =====
function mousePressed() {
  // Canvas дотор дарахад л rebuild хийнэ
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    buildScene(artPlan);
  }
}

// ==========================================
// HTML Controls — DOM events
// Controls-оор artPlan property өөрчилнө.
// Engine код өөрчлөгдөхгүй.
// ==========================================
function setupControls() {
  // --- Particle count slider ---
  const countInput = document.getElementById("countInput");
  const countValue = document.getElementById("countValue");
  countInput.addEventListener("input", () => {
    artPlan.count = parseInt(countInput.value);
    countValue.textContent = artPlan.count;
    buildScene(artPlan);
  });

  // --- Speed slider ---
  const speedInput = document.getElementById("speedInput");
  const speedValue = document.getElementById("speedValue");
  speedInput.addEventListener("input", () => {
    artPlan.speed = parseFloat(speedInput.value);
    speedValue.textContent = artPlan.speed;
    buildScene(artPlan);
  });

  // --- Shape select ---
  const shapeSelect = document.getElementById("shapeSelect");
  shapeSelect.addEventListener("change", () => {
    artPlan.shape = shapeSelect.value;
  });

  // --- Background color picker ---
  const bgInput = document.getElementById("bgInput");
  bgInput.addEventListener("input", () => {
    artPlan.background = bgInput.value;
  });

  // --- Palette color pickers ---
  const color1 = document.getElementById("color1");
  const color2 = document.getElementById("color2");
  const color3 = document.getElementById("color3");

  function updatePalette() {
    artPlan.palette = [color1.value, color2.value, color3.value];
    buildScene(artPlan);
  }

  color1.addEventListener("input", updatePalette);
  color2.addEventListener("input", updatePalette);
  color3.addEventListener("input", updatePalette);

  // --- Rebuild button ---
  const rebuildBtn = document.getElementById("rebuildBtn");
  rebuildBtn.addEventListener("click", () => {
    buildScene(artPlan);
  });

  // --- Save screenshot button ---
  const saveBtn = document.getElementById("saveBtn");
  saveBtn.addEventListener("click", () => {
    saveCanvas("generative-art", "png");
  });
}
