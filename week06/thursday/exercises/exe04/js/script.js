// Exercise 4 - Wave Dots
// for loop + frameCount + sin() ашиглан wave effect хийх

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(15, 20, 35);

  let centerY = height / 2;
  let speed = 0.05;
  let amplitude = 80;

  // 10 тойрог нэг мөрөнд байрлуулах
  for (let i = 0; i < 10; i++) {
    // i ашиглан x байрлалыг өөрчлөх
    let x = (i + 0.5) * (width / 10);

    // sin() ашиглан y байрлалд хөдөлгөөн нэмэх
    // i-г formula-д оруулснаар тойрог бүр өөр phase-тай болно
    let y = centerY + sin(frameCount * speed + i) * amplitude;

    // Challenge: Circle бүрийн size-ийг wave хэлбэрээр өөрчлөх
    let size = 30 + sin(frameCount * speed + i) * 15;

    // Challenge: RGB өнгийг i ашиглан өөрчлөх
    let r = 100 + i * 15;
    let g = 150 + sin(frameCount * speed + i) * 80;
    let b = 255 - i * 20;

    fill(r, g, b);
    noStroke();
    circle(x, y, size);
  }
}