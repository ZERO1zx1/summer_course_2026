function setup() {
  createCanvas(600, 400); //
}

function draw() {
  // 1. Mouse-ийн байрлалаас хамаарч background өөрчлөх
  if (mouseX < width / 2) { //
    background("#3498db"); // Цэнхэр
  } else {
    background("#e67e22"); // Улбар шар
  }

  // 2. Mouse дээр цагаан тойрог зурах
  fill(255);
  noStroke();
  circle(mouseX, mouseY, 50); //
}