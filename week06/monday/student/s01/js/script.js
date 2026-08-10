let fishX = 80;
let fishSpeed = 2;

function setup() {
    createCanvas(800, 500);
}

function draw() {
    background("#00d9ff");

    fill("#fff700");
    noStroke();
    rect(0, 430, width, 70);

    fishX += fishSpeed;

    if (fishX > width + 100) {
        fishX = -100;
    }

    for (let i = 0; i < 5; i++) {
        let fishY = 90 + i * 75;
        let fishScale = 0.6 + i * 0.2;

        fill("#d60000");
        triangle(
            fishX - 25 * fishScale, fishY,
            fishX - 60 * fishScale, fishY - 25 * fishScale,
            fishX - 60 * fishScale, fishY + 25 * fishScale
        );
    
        fill("#ff2222");
        ellipse(fishX, fishY, 70 * fishScale, 45 * fishScale);

        fill("#ffffff");
        circle(
            fishX + 18 * fishScale,
            fishY - 6 * fishScale,
            12 * fishScale
        );
        
        fill("#000000");
        circle(
            fishX + 20 * fishScale,
            fishY - 6 * fishScale,
            6 * fishScale
        );
    }
}