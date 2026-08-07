let lightColor = "#555555";
let roomColor = "#222222";

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  if (mouseIsPressed) {
    roomColor = "#fff3b0";
    lightColor = "#ffd60a"; 
  } else {
    roomColor = "#222222";
    lightColor = "#555555";
  }
  
  background(roomColor);

  fill(100);
  rect(150, 350, 300, 50);

  fill(50);
  rect(280, 0, 40, 50);
  fill(lightColor);
  circle(300, 80, 80); 

  if (mouseIsPressed) {
    fill(0);
    text("LIGHT ON", 300, 200);
  } else {
    fill(255);
    text("LIGHT OFF", 300, 200);
  }
}