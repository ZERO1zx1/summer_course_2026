// Exercise 1 - Moving Ball
// frameCount ашиглан бөмбөгийг зүүнээс баруун тийш хөдөлгөх

function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(20, 30, 50);

  // Бөмбөгийн x байрлалыг frameCount ашиглан тооцоол
  // % width ашигласнаар баруун талаас гарахад зүүн талд дахин гарна
  let x = frameCount % (width + 60);

  // y байрлалыг canvas-ийн төвд байлгах
  let y = height / 2;

  // Бөмбөг зурах
  fill(0, 120, 255);
  noStroke();
  circle(x, y, 60);
}