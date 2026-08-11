// 1. Обьект тодорхойлох
let ball = {
  x: 200,
  y: 200,
  size: 40,
  color: [255, 0, 0], // RGB
  speed: 3
};

// 2. Объектын утгуудыг консолд хэвлэх
console.log(ball.x);      // 200
console.log(ball.y);      // 200
console.log(ball.size);   // 40
console.log(ball.color);  // [255, 0, 0]
console.log(ball.speed);  // 3

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#45f");

  // circle ашиглаад дээрх ball object-ийг харуулах
  fill(ball.color);
  circle(ball.x, ball.y, ball.size);
  
  // Бөмбөгийг баруун тийш хөдөлгөх
  ball.x = ball.x + ball.speed;

  // Баруун талын хананаас гарвал буцаад зүүн эхлэлд аваачих
  if (ball.x > width) {
    ball.x = 0;
  }
}