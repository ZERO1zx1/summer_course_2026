let selectedColor = '#ff4d4d';

function setup() {
    createCanvas(800, 500);
}

function draw() {
    background("#00d9ff");
    
    fill('#ffffff');
    circle(50, 60, 80);
    
    sayHello();

    drawBall(130, 130, selectedColor);
    drawBall(190, 190, selectedColor); 
    drawBall(250, 250, selectedColor); 
    drawBall(310, 310, selectedColor); 
    drawBall(370, 370, selectedColor);

    // drawBall(370, 130, '#ff4d4d');
    // drawBall(310, 190, '#4da6ff');
    // drawBall(250, 250, '#5cd65c');
    // drawBall(190, 310, '#ffcc00');
    // drawBall(130, 370, '#b366ff');
}

function sayHello() {
    console.log("Hello, World!");
}

function drawBall(x = 50, y = 50, color = '#ff0000') {
    fill(color);
    circle(x, y, 40);
}

function changeColor(newColor) {
    selectedColor = newColor;
}