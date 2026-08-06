function setup() {
    createCanvas(600, 400);
}

function draw() {
    if (mouseX < 200) {
        background("#e74c3c");
    } else if (mouseX < 400) {
        background("#e5ec25");
    } else {
        background("#29c933");
    }

    fill("#fff");
    circle(mouseX, mouseY, 30);
}