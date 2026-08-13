// Exercise 2 - Pulsing Ball
// frameCount болон sin() ашиглан бөмбөгийн хэмжээг томруулж, жижгэрүүлэх

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(15, 20, 35);

  // Үндсэн хэмжээ, хурд, өөрчлөлтийн утгууд
  let baseSize = 60;
  let speed = 0.05;
  let change = 40;

  // sin() ашиглан хэмжээг тасралтгүй өөрчлөх
  let size = baseSize + sin(frameCount * speed) * change;

  // Canvas-ийн төвд бөмбөг зурах
  // Challenge: Бөмбөг томрох үед өнгө нь өөрчлөгдөнө
  let r = 100 + sin(frameCount * speed) * 100;
  let g = 50 + sin(frameCount * speed + 2) * 50;
  let b = 200 + sin(frameCount * speed + 4) * 55;

  fill(r, g, b);
  noStroke();
  circle(width / 2, height / 2, size);
}