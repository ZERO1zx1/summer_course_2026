let WIDTH = 400;       // Global variable (Canvas болон бусад зүйлд ашиглагдана)
let HEIGHT = 400;      // Global variable
let ELLIPSE_Y = 100;   // Нарны байрлах Y координат (Global variable)

function setup() {
    createCanvas(WIDTH, HEIGHT); // Canvas үүсгэх
}

function draw() {
    let RADIUS = 80; // Local variable

    // 1. Sunset Sky (Тэнгэр)
    background(255, 160, 122); // Light salmon

    // 2. The Sun (Нар)
    noStroke();
    fill(255, 215, 0); // Gold
    ellipse(320, ELLIPSE_Y, RADIUS, RADIUS); // Global хувьсагчаа ашиглав

    // 3. The Ground (Газар)
    fill(46, 139, 87); // Sea green
    rect(0, 300, WIDTH, 100); // WIDTH хувьсагчийг ашиглан дэлгэцийн өргөнтэй тэгшлэв

    // 4. The Tree Trunk (Модны гол бие)
    fill(101, 67, 33); // Dark brown
    rect(80, 200, 40, 120);

    // 5. The Tree Leaves (Модны навчис)
    fill(34, 139, 34); // Forest green
    // Зүүн навч
    ellipse(70, 200, 80, 40);
    // Баруун навчис
    ellipse(130, 200, 80, 40);
    ellipse(140, 200, 80, 40);
    ellipse(150, 200, 80, 40);
    // Дээд голын навч
    ellipse(100, 160, 90, 90);
}