function setup() {
  createCanvas(1100, 400);
}

function draw() {
  background("rgba(130, 117, 117, 0.33)");

  fill(150);

  for (let i = 0; i < 10; i++) {
    let x = 100 + i * 100;
    let y = 200;
    let d = 60;
    
    circle(x, y, d);

    print("Circle " + i);
  }
}