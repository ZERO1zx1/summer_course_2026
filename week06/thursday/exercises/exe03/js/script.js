// Exercise 3 - Blinking Light
// frameCount ашиглан тодорхой хугацаанд өнгө сольдог гэрэл хийх

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(15, 20, 35);

  // frameCount % 60 ашиглан 0-ээс 59 хүртэлх утга үүсгэнэ
  // Эхний 30 frame → гэрэл ON (шар), дараагийн 30 frame → гэрэл OFF (саарал)
  let time = frameCount % 60;

  let lightColor;
  if (time < 30) {
    // Гэрэл ON - тод шар
    lightColor = color(255, 220, 0);
  } else {
    // Гэрэл OFF - бараан саарал
    lightColor = color(60, 60, 65);
  }

  // Төвд том гэрлийн circle зурах
  fill(lightColor);
  noStroke();
  circle(width / 2, height / 2, 150);
}