// ============================================================
// p5.js Mouse & Conditionals - 10 Exercises
// ============================================================

let currentExercise = 1;
let myCanvas;

// Дасгал 6-ийн хувьсагчид
let ex6_circleX = 300;
let ex6_circleY = 200;
let ex6_circleColor = "#3498db";
let ex6_circleSize = 90;

// Дасгал 7-ийн хувьсагчид
let ex7_isPressed = false;
let ex7_circleSize = 100;
let ex7_circleColor = "#3498db";

// Дасгал 8-ийн хувьсагчид
let ex8_buttonX = 200;
let ex8_buttonY = 150;
let ex8_buttonWidth = 200;
let ex8_buttonHeight = 80;

// Дасгал 9-ийн хувьсагчид
let ex9_targetX;
let ex9_targetY;
let ex9_targetSize = 80;
let ex9_score = 0;

// Дасгал 10-ийн хувьсагчид
let ex10_targetX = 100;
let ex10_targetY = 200;
let ex10_targetSize = 70;
let ex10_targetSpeed = 4;
let ex10_score = 0;
let ex10_lives = 3;
let ex10_gameState = "playing";

// ============================================================
// ДАСГАЛ 1: Зүүн ба баруун талын өнгө
// ============================================================
// Зорилго: if / else болон mouseX ашиглах
// Mouse зүүн талд байвал background #3498db (цэнхэр)
// Mouse баруун талд байвал background #e67e22 (улбар шар)
// Mouse-ийн байрлал дээр 50 хэмжээтэй цагаан тойрог
// ============================================================
function exercise1_setup() {
    createCanvas(600, 400);
}

function exercise1_draw() {
    // 2. mouseX < width / 2 нөхцөл шалгах
    if (mouseX < width / 2) {
        // 3. Нөхцөл үнэн үед цэнхэр background
        background("#3498db");
    } else {
        // 4. else үед улбар шар background
        background("#e67e22");
    }

    // 5. Mouse-ийн байрлал дээр 50 хэмжээтэй цагаан тойрог
    fill(255);
    noStroke();
    circle(mouseX, mouseY, 50);
}

// ============================================================
// ДАСГАЛ 2: Дээд ба доод талын тойрог
// ============================================================
// Зорилго: if / else болон mouseY ашиглах
// Canvas-ийн background үргэлж #f5f5f5
// Mouse дээд талд байвал төвийн тойрог ногоон (#2ecc71)
// Mouse доод талд байвал төвийн тойрог ягаан (#9b59b6)
// ============================================================
function exercise2_setup() {
    createCanvas(600, 400);
}

function exercise2_draw() {
    // 2. background зурах
    background("#f5f5f5");

    // 3. mouseY < height / 2 нөхцөл шалгах
    if (mouseY < height / 2) {
        // 4. Үнэн үед #2ecc71 өнгө сонгох
        fill("#2ecc71");
    } else {
        // 5. Худал үед #9b59b6 өнгө сонгох
        fill("#9b59b6");
    }

    // 6. Төвд 140 хэмжээтэй тойрог
    noStroke();
    circle(width / 2, height / 2, 140);
}

// ============================================================
// ДАСГАЛ 3: Гурван босоо бүс
// ============================================================
// Зорилго: if / else if / else ашиглах
// Зүүн гуравны нэг: улаан (#e74c3c)
// Төв гуравны нэг: шар (#f1c40f)
// Баруун гуравны нэг: ногоон (#2ecc71)
// Mouse дээр хар тойрог
// ============================================================
function exercise3_setup() {
    createCanvas(600, 400);
}

function exercise3_draw() {
    // 1. Эхний нөхцөлд mouseX < width / 3 шалгах
    if (mouseX < width / 3) {
        // 2. Эхний background-ийг #e74c3c болгох
        background("#e74c3c");
    }
    // 3. Хоёр дахь нөхцөлд mouseX < (width / 3) * 2 шалгах
    else if (mouseX < (width / 3) * 2) {
        // 4. Хоёр дахь background-ийг #f1c40f болгох
        background("#f1c40f");
    }
    // 5. else үед #2ecc71 ашиглах
    else {
        background("#2ecc71");
    }

    // 6. Mouse-ийн байрлал дээр хар тойрог
    fill(0);
    noStroke();
    circle(mouseX, mouseY, 50);
}

// ============================================================
// ДАСГАЛ 4: Canvas-ийн дөрвөн хэсэг
// ============================================================
// Зорилго: && ашиглан mouse аль дөрвөлжинд байгааг шалгах
// Зүүн дээд: #e74c3c
// Баруун дээд: #3498db
// Зүүн доод: #f1c40f
// Баруун доод: #2ecc71
// Mouse дээр цагаан жижиг тойрог
// ============================================================
function exercise4_setup() {
    createCanvas(600, 400);
}

function exercise4_draw() {
    // 1. Зүүн дээдийг mouseX < width / 2 && mouseY < height / 2 нөхцлөөр
    if (mouseX < width / 2 && mouseY < height / 2) {
        background("#e74c3c");
    }
    // 2. Баруун дээдэд x болон y-ийн хоёр нөхцөл ашиглах
    else if (mouseX >= width / 2 && mouseY < height / 2) {
        background("#3498db");
    }
    // 3. Зүүн доодод x болон y-ийн хоёр нөхцөл ашиглах
    else if (mouseX < width / 2 && mouseY >= height / 2) {
        background("#f1c40f");
    }
    // 4. Үлдсэн хэсгийг else-ээр баруун доод гэж үзэх
    else {
        background("#2ecc71");
    }

    // 5. Mouse дээр цагаан жижиг тойрог
    fill(255);
    noStroke();
    circle(mouseX, mouseY, 30);
}

// ============================================================
// ДАСГАЛ 5: Canvas-ийн захын анхааруулга
// ============================================================
// Зорилго: || ашиглах
// Mouse зүүн эсвэл баруун захаас 70px дотор байвал тойрог улаан
// Бусад үед цэнхэр
// Тойрог mouse-ийг дагана
// ============================================================
let ex5_warningDistance = 70;

function exercise5_setup() {
    createCanvas(600, 400);
}

function exercise5_draw() {
    // 4. Хоёр нөхцөлийг ||-оор холбох
    if (mouseX < ex5_warningDistance || mouseX > width - ex5_warningDistance) {
        // 5. Захад ойр үед #e74c3c
        background("#e74c3c");
    } else {
        // 5. Бусад үед #3498db
        background("#3498db");
    }

    // 6. Mouse дээр 70 хэмжээтэй тойрог
    fill(255);
    noStroke();
    circle(mouseX, mouseY, 70);
}

// ============================================================
// ДАСГАЛ 6: Mouse дарсан тал руу шилжих дүрс
// ============================================================
// Зорилго: mousePressed() event дотор if / else
// Тойрог эхэндээ төвд байна
// Зүүн талд дарахад дарсан байрлал руу шилжиж цэнхэр болно
// Баруун талд дарахад дарсан байрлал руу шилжиж улбар шар болно
// ============================================================
function exercise6_setup() {
    createCanvas(600, 400);
    // Эхлээд тойргийг төвд байрлуулах
    ex6_circleX = width / 2;
    ex6_circleY = height / 2;
}

function exercise6_draw() {
    background(240);

    // 2. background болон тойргийг зурах
    fill(ex6_circleColor);
    noStroke();
    circle(ex6_circleX, ex6_circleY, ex6_circleSize);

    // Зүүн/баруун талын зааг шугам
    stroke(200);
    strokeWeight(1);
    line(width / 2, 0, width / 2, height);

    // Заавар бичих
    noStroke();
    fill(100);
    textAlign(CENTER);
    textSize(14);
    text("Зүүн талд дар = Цэнхэр | Баруун талд дар = Улбар шар", width / 2, 30);
}

function exercise6_mousePressed() {
    // 3. mousePressed() дотор circleX = mouseX, circleY = mouseY болгох
    ex6_circleX = mouseX;
    ex6_circleY = mouseY;

    // 4. mouseX < width / 2 нөхцөл шалгах
    if (mouseX < width / 2) {
        // 5. Зүүн талд дарахад цэнхэр
        ex6_circleColor = "#3498db";
    } else {
        // 5. Баруун талд дарахад улбар шар
        ex6_circleColor = "#e67e22";
    }
}

// ============================================================
// ДАСГАЛ 7: Mouse дарахад томордог тойрог
// ============================================================
// Зорилго: mousePressed(), mouseReleased() болон Boolean хувьсагч
// Эхэндээ жижиг цэнхэр тойрог
// Mouse дарахад том улаан тойрог
// Mouse тавихад буцаад жижиг цэнхэр болно
// ============================================================
function exercise7_setup() {
    createCanvas(600, 400);
}

function exercise7_draw() {
    background(240);

    // 1. isPressed === true нөхцөл шалгах
    if (ex7_isPressed === true) {
        // 2. Үнэн үед size 200, color #e74c3c
        ex7_circleSize = 200;
        ex7_circleColor = "#e74c3c";
    } else {
        // 3. Худал үед size 100, color #3498db
        ex7_circleSize = 100;
        ex7_circleColor = "#3498db";
    }

    // 4. Төвд тойрог зурах
    fill(ex7_circleColor);
    noStroke();
    circle(width / 2, height / 2, ex7_circleSize);

    // Төлөв харуулах
    fill(100);
    textAlign(CENTER);
    textSize(16);
    text(ex7_isPressed ? "ДАРСАН (Pressed)" : "ТАВИАГҮЙ (Released)", width / 2, height - 30);
}

function exercise7_mousePressed() {
    // 5. mousePressed() дотор isPressed = true
    ex7_isPressed = true;
}

function exercise7_mouseReleased() {
    // 6. mouseReleased() дотор isPressed = false
    ex7_isPressed = false;
}

// ============================================================
// ДАСГАЛ 8: Hover болон pressed төлөвтэй товч
// ============================================================
// Зорилго: Mouse rectangle дотор байгаа эсэхийг && ашиглан шалгах
// Normal: #3498db
// Hover: #2ecc71
// Pressed: #1e8449
// Товчны төвд START текст
// ============================================================
function exercise8_setup() {
    createCanvas(600, 400);
    // Товчийг төвд байрлуулах
    ex8_buttonX = width / 2 - ex8_buttonWidth / 2;
    ex8_buttonY = height / 2 - ex8_buttonHeight / 2;
    textAlign(CENTER, CENTER);
    textSize(24);
}

function exercise8_draw() {
    background(240);

    // 1. Mouse товчны зүүн, баруун, дээд, доод хязгаарын дотор эсэхийг шалгах
    // 2. Дөрвөн нөхцлийг &&-ээр холбоод isMouseInside хувьсагчид хадгалах
    let isMouseInside = (
        mouseX > ex8_buttonX &&
        mouseX < ex8_buttonX + ex8_buttonWidth &&
        mouseY > ex8_buttonY &&
        mouseY < ex8_buttonY + ex8_buttonHeight
    );

    let buttonColor;

    // 3. Эхлээд isMouseInside && mouseIsPressed шалгах
    if (isMouseInside && mouseIsPressed) {
        buttonColor = "#1e8449"; // Pressed
    }
    // 4. Дараа нь isMouseInside шалгах
    else if (isMouseInside) {
        buttonColor = "#2ecc71"; // Hover
    }
    // 5. else үед normal өнгө сонгох
    else {
        buttonColor = "#3498db"; // Normal
    }

    // 6. Rectangle болон START текст
    fill(buttonColor);
    noStroke();
    rect(ex8_buttonX, ex8_buttonY, ex8_buttonWidth, ex8_buttonHeight, 10);

    fill(255);
    text("START", width / 2, height / 2);

    // Төлөв харуулах
    fill(100);
    textSize(14);
    textAlign(CENTER);
    let state = isMouseInside ? (mouseIsPressed ? "PRESSED" : "HOVER") : "NORMAL";
    text("Төлөв: " + state, width / 2, height - 40);
}

// ============================================================
// ДАСГАЛ 9: Click хийж оноо авах target
// ============================================================
// Зорилго: mousePressed(), dist(), score болон if / else
// Target дээр зөв дарахад score 1-ээр нэмэгдэнэ
// Гадуур дарахад score 1-ээр хасагдана
// Зөв дарахад target шинэ random байрлалд шилжинэ
// ============================================================
function exercise9_setup() {
    createCanvas(600, 400);
    // 2. Target-ийн анхны x, y-г random() ашиглан үүсгэх
    // 3. Target canvas-аас гарахгүй random хүрээ ашиглах
    ex9_targetX = random(ex9_targetSize / 2, width - ex9_targetSize / 2);
    ex9_targetY = random(ex9_targetSize / 2, height - ex9_targetSize / 2);
    textAlign(LEFT);
    textSize(16);
}

function exercise9_draw() {
    background(240);

    // 4. Target болон score зурах
    fill("#e74c3c");
    noStroke();
    circle(ex9_targetX, ex9_targetY, ex9_targetSize);

    // Target-ийн төвд цэг
    fill(255);
    circle(ex9_targetX, ex9_targetY, 10);

    // Score харуулах
    fill(0);
    text("Score: " + ex9_score, 20, 30);
    text("Target дээр дар = +1 | Гадуур дар = -1", 20, height - 20);
}

function exercise9_mousePressed() {
    // 5. dist(mouseX, mouseY, targetX, targetY) тооцоолох
    let d = dist(mouseX, mouseY, ex9_targetX, ex9_targetY);

    // 6. Зай targetSize / 2-оос бага эсэхийг шалгах
    if (d < ex9_targetSize / 2) {
        // 7. Hit үед score нэмээд target-ийг шинэ байрлалд шилжүүлэх
        ex9_score++;
        ex9_targetX = random(ex9_targetSize / 2, width - ex9_targetSize / 2);
        ex9_targetY = random(ex9_targetSize / 2, height - ex9_targetSize / 2);
    } else {
        // 8. Miss үед score хасах
        ex9_score--;
    }
}

// ============================================================
// ДАСГАЛ 10: Mini target game
// ============================================================
// Зорилго: Movement, boundary, click, score, lives болон game state
// Target хэвтээ чиглэлд хөдөлнө
// Захад хүрэхэд чиглэлээ солино
// Hit үед score нэмэгдэж speed өснө
// Miss үед lives хасагдана
// Lives 0 болоход GAME OVER
// Double click хийхэд тоглоом reset
// ============================================================
function exercise10_setup() {
    createCanvas(600, 400);
    ex10_targetX = 100;
    ex10_targetY = 200;
    ex10_targetSpeed = 4;
    ex10_score = 0;
    ex10_lives = 3;
    ex10_gameState = "playing";
    textAlign(CENTER, CENTER);
}

function exercise10_draw() {
    background(240);

    // 1. gameState === "playing" шалгах
    if (ex10_gameState === "playing") {
        // 2. Playing үед targetX дээр targetSpeed нэмэх
        ex10_targetX += ex10_targetSpeed;

        // 3. Зүүн эсвэл баруун захад хүрснийг || ашиглан шалгах
        if (ex10_targetX < ex10_targetSize / 2 || ex10_targetX > width - ex10_targetSize / 2) {
            // 4. Захад хүрвэл speed-ийг -1-ээр үржүүлэх
            ex10_targetSpeed *= -1;
        }

        // 5. Playing үед target зурах
        fill("#e74c3c");
        noStroke();
        circle(ex10_targetX, ex10_targetY, ex10_targetSize);
        fill(255);
        circle(ex10_targetX, ex10_targetY, 10);
    }
    // 6. gameState === "gameOver" үед GAME OVER текст зурах
    else if (ex10_gameState === "gameOver") {
        background(30);
        fill("#e74c3c");
        textSize(48);
        text("GAME OVER", width / 2, height / 2 - 30);
        fill(200);
        textSize(20);
        text("Double Click дараад дахин эхэл", width / 2, height / 2 + 30);
    }

    // 7. Score болон lives-ийг харуулах
    fill(0);
    textAlign(LEFT);
    textSize(18);
    text("Score: " + ex10_score, 20, 30);
    text("Lives: " + ex10_lives, 20, 55);
    textAlign(CENTER, CENTER);
}

function exercise10_mousePressed() {
    // 8. mousePressed() дотор зөвхөн playing үед hit шалгах
    if (ex10_gameState !== "playing") return;

    let d = dist(mouseX, mouseY, ex10_targetX, ex10_targetY);

    if (d < ex10_targetSize / 2) {
        // 9. Hit үед score нэм, speed өсгө, targetY-г random болго
        ex10_score++;
        ex10_targetSpeed *= 1.1;
        ex10_targetY = random(ex10_targetSize / 2, height - ex10_targetSize / 2);
    } else {
        // 10. Miss үед lives хасах
        ex10_lives--;

        // 11. Lives 0 бол gameState-ийг gameOver болгох
        if (ex10_lives <= 0) {
            ex10_gameState = "gameOver";
        }
    }
}

function exercise10_doubleClicked() {
    // 12. doubleClicked() дотор бүх гол хувьсагчийг анхны утгад
    ex10_targetX = 100;
    ex10_targetY = 200;
    ex10_targetSpeed = 4;
    ex10_score = 0;
    ex10_lives = 3;
    ex10_gameState = "playing";
}

// ============================================================
// ГОЛ p5.js ФУНКЦҮҮД (Router)
// ============================================================
function setup() {
    routeSetup();
}

function draw() {
    routeDraw();
}

function mousePressed() {
    routeMousePressed();
}

function mouseReleased() {
    routeMouseReleased();
}

function doubleClicked() {
    routeDoubleClicked();
}

function routeSetup() {
    switch (currentExercise) {
        case 1: exercise1_setup(); break;
        case 2: exercise2_setup(); break;
        case 3: exercise3_setup(); break;
        case 4: exercise4_setup(); break;
        case 5: exercise5_setup(); break;
        case 6: exercise6_setup(); break;
        case 7: exercise7_setup(); break;
        case 8: exercise8_setup(); break;
        case 9: exercise9_setup(); break;
        case 10: exercise10_setup(); break;
    }
}

function routeDraw() {
    switch (currentExercise) {
        case 1: exercise1_draw(); break;
        case 2: exercise2_draw(); break;
        case 3: exercise3_draw(); break;
        case 4: exercise4_draw(); break;
        case 5: exercise5_draw(); break;
        case 6: exercise6_draw(); break;
        case 7: exercise7_draw(); break;
        case 8: exercise8_draw(); break;
        case 9: exercise9_draw(); break;
        case 10: exercise10_draw(); break;
    }
}

function routeMousePressed() {
    switch (currentExercise) {
        case 6: exercise6_mousePressed(); break;
        case 7: exercise7_mousePressed(); break;
        case 9: exercise9_mousePressed(); break;
        case 10: exercise10_mousePressed(); break;
    }
}

function routeMouseReleased() {
    switch (currentExercise) {
        case 7: exercise7_mouseReleased(); break;
    }
}

function routeDoubleClicked() {
    switch (currentExercise) {
        case 10: exercise10_doubleClicked(); break;
    }
}

// ============================================================
// ДАСГАЛУУДЫН МЭДЭЭЛЭЛ
// ============================================================
const exercises = {
    1: {
        title: "Дасгал 1: Зүүн ба баруун талын өнгө",
        goal: "Зорилго: if / else болон mouseX ашиглах",
        desc: "Mouse зүүн талд байвал background #3498db (цэнхэр).<br>Mouse баруун талд байвал background #e67e22 (улбар шар).<br>Mouse-ийн байрлал дээр 50 хэмжээтэй цагаан тойрог.",
        concepts: "<code>if</code> / <code>else</code> нөхцөл, <code>mouseX</code>, <code>width</code>"
    },
    2: {
        title: "Дасгал 2: Дээд ба доод талын тойрог",
        goal: "Зорилго: if / else болон mouseY ашиглах",
        desc: "Canvas-ийн background үргэлж #f5f5f5.<br>Mouse дээд талд байвал төвийн тойрог ногоон (#2ecc71).<br>Mouse доод талд байвал төвийн тойрог ягаан (#9b59b6).",
        concepts: "<code>if</code> / <code>else</code>, <code>mouseY</code>, <code>height</code>, <code>fill()</code>"
    },
    3: {
        title: "Дасгал 3: Гурван босоо бүс",
        goal: "Зорилго: if / else if / else ашиглах",
        desc: "Зүүн гуравны нэг: улаан (#e74c3c).<br>Төв гуравны нэг: шар (#f1c40f).<br>Баруун гуравны нэг: ногоон (#2ecc71).<br>Mouse дээр хар тойрог.",
        concepts: "<code>if</code> / <code>else if</code> / <code>else</code>, <code>width / 3</code>"
    },
    4: {
        title: "Дасгал 4: Canvas-ийн дөрвөн хэсэг",
        goal: "Зорилго: && (AND) ашиглан mouse аль дөрвөлжинд байгааг шалгах",
        desc: "Зүүн дээд: #e74c3c | Баруун дээд: #3498db<br>Зүүн доод: #f1c40f | Баруун доод: #2ecc71<br>Mouse дээр цагаан жижиг тойрог.",
        concepts: "<code>&&</code> (AND оператор), <code>mouseX</code> + <code>mouseY</code> хосолсон нөхцөл"
    },
    5: {
        title: "Дасгал 5: Canvas-ийн захын анхааруулга",
        goal: "Зорилго: || (OR) ашиглах",
        desc: "Mouse зүүн эсвэл баруун захаас 70px дотор байвал тойрог улаан.<br>Бусад үед цэнхэр.<br>Тойрог mouse-ийг дагана.",
        concepts: "<code>||</code> (OR оператор), <code>warningDistance</code> хувьсагч"
    },
    6: {
        title: "Дасгал 6: Mouse дарсан тал руу шилжих дүрс",
        goal: "Зорилго: mousePressed() event дотор if / else",
        desc: "Тойрог эхэндээ төвд байна.<br>Зүүн талд дарахад дарсан байрлал руу шилжиж цэнхэр болно.<br>Баруун талд дарахад дарсан байрлал руу шилжиж улбар шар болно.",
        concepts: "<code>mousePressed()</code> event, хувьсагчид утга олгох"
    },
    7: {
        title: "Дасгал 7: Mouse дарахад томордог тойрог",
        goal: "Зорилго: mousePressed(), mouseReleased() болон Boolean хувьсагч",
        desc: "Эхэндээ жижиг цэнхэр тойрог.<br>Mouse дарахад том улаан тойрог.<br>Mouse тавихад буцаад жижиг цэнхэр болно.",
        concepts: "<code>mousePressed()</code>, <code>mouseReleased()</code>, Boolean (<code>true</code>/<code>false</code>)"
    },
    8: {
        title: "Дасгал 8: Hover болон pressed төлөвтэй товч",
        goal: "Зорилго: Mouse rectangle дотор байгаа эсэхийг && ашиглан шалгах",
        desc: "Normal: #3498db | Hover: #2ecc71 | Pressed: #1e8449<br>Товчны төвд START текст.",
        concepts: "<code>&&</code>, <code>mouseIsPressed</code>, rectangle collision detection"
    },
    9: {
        title: "Дасгал 9: Click хийж оноо авах target",
        goal: "Зорилго: mousePressed(), dist(), score болон if / else",
        desc: "Target дээр зөв дарахад score 1-ээр нэмэгдэнэ.<br>Гадуур дарахад score 1-ээр хасагдана.<br>Зөв дарахад target шинэ random байрлалд шилжинэ.",
        concepts: "<code>dist()</code>, <code>random()</code>, score систем"
    },
    10: {
        title: "Дасгал 10: Mini target game",
        goal: "Зорилго: Movement, boundary, click, score, lives болон game state",
        desc: "Target хэвтээ чиглэлд хөдөлнө. Захад хүрэхэд чиглэлээ солино.<br>Hit үед score нэмэгдэж speed өснө. Miss үед lives хасагдана.<br>Lives 0 болоход GAME OVER. Double click хийхэд тоглоом reset.",
        concepts: "Game loop, <code>gameState</code>, <code>doubleClicked()</code>, хөдөлгөөн"
    }
};

// ============================================================
// КОДЫГ ХАРАХ (Syntax highlight-тай)
// ============================================================
const codeSnippets = {
    1: `function setup() {
    createCanvas(600, 400);
}

function draw() {
    // mouseX < width / 2 нөхцөл шалгах
    if (mouseX < width / 2) {
        // Нөхцөл үнэн үед цэнхэр background
        background("#3498db");
    } else {
        // else үед улбар шар background
        background("#e67e22");
    }

    // Mouse-ийн байрлал дээр 50 хэмжээтэй цагаан тойрог
    fill(255);
    noStroke();
    circle(mouseX, mouseY, 50);
}`,
    2: `function setup() {
    createCanvas(600, 400);
}

function draw() {
    background("#f5f5f5");

    // mouseY < height / 2 нөхцөл шалгах
    if (mouseY < height / 2) {
        fill("#2ecc71");  // Дээд тал - ногоон
    } else {
        fill("#9b59b6");  // Доод тал - ягаан
    }

    // Төвд 140 хэмжээтэй тойрог
    noStroke();
    circle(width / 2, height / 2, 140);
}`,
    3: `function setup() {
    createCanvas(600, 400);
}

function draw() {
    // Гурван бүс: if / else if / else
    if (mouseX < width / 3) {
        background("#e74c3c");  // Зүүн - улаан
    } else if (mouseX < (width / 3) * 2) {
        background("#f1c40f");  // Төв - шар
    } else {
        background("#2ecc71");  // Баруун - ногоон
    }

    // Mouse дээр хар тойрог
    fill(0);
    noStroke();
    circle(mouseX, mouseY, 50);
}`,
    4: `function setup() {
    createCanvas(600, 400);
}

function draw() {
    // && ашиглан дөрвөн хэсгийг ялгах
    if (mouseX < width / 2 && mouseY < height / 2) {
        background("#e74c3c");      // Зүүн дээд
    } else if (mouseX >= width / 2 && mouseY < height / 2) {
        background("#3498db");      // Баруун дээд
    } else if (mouseX < width / 2 && mouseY >= height / 2) {
        background("#f1c40f");      // Зүүн доод
    } else {
        background("#2ecc71");      // Баруун доод
    }

    fill(255);
    noStroke();
    circle(mouseX, mouseY, 30);
}`,
    5: `let warningDistance = 70;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    // || ашиглан зүүн ЭСВЭЛ баруун зах шалгах
    if (mouseX < warningDistance || mouseX > width - warningDistance) {
        background("#e74c3c");  // Захад ойр - улаан
    } else {
        background("#3498db");  // Бусад - цэнхэр
    }

    fill(255);
    noStroke();
    circle(mouseX, mouseY, 70);
}`,
    6: `let circleX = 300;
let circleY = 200;
let circleColor = "#3498db";
let circleSize = 90;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(240);
    fill(circleColor);
    noStroke();
    circle(circleX, circleY, circleSize);
}

function mousePressed() {
    // Дарагдсан байрлал руу шилжих
    circleX = mouseX;
    circleY = mouseY;

    // Зүүн талд дарахад цэнхэр, баруун талд улбар шар
    if (mouseX < width / 2) {
        circleColor = "#3498db";
    } else {
        circleColor = "#e67e22";
    }
}`,
    7: `let isPressed = false;
let circleSize = 100;
let circleColor = "#3498db";

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(240);

    // Boolean хувьсагч шалгах
    if (isPressed === true) {
        circleSize = 200;
        circleColor = "#e74c3c";
    } else {
        circleSize = 100;
        circleColor = "#3498db";
    }

    fill(circleColor);
    noStroke();
    circle(width / 2, height / 2, circleSize);
}

function mousePressed() {
    isPressed = true;
}

function mouseReleased() {
    isPressed = false;
}`,
    8: `let buttonX = 200;
let buttonY = 150;
let buttonWidth = 200;
let buttonHeight = 80;

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    textSize(24);
}

function draw() {
    background(240);

    // Mouse товчны дотор байгаа эсэх
    let isMouseInside = (
        mouseX > buttonX && 
        mouseX < buttonX + buttonWidth && 
        mouseY > buttonY && 
        mouseY < buttonY + buttonHeight
    );

    let buttonColor;

    // Эхлээд pressed, дараа нь hover шалгах
    if (isMouseInside && mouseIsPressed) {
        buttonColor = "#1e8449";  // Pressed
    } else if (isMouseInside) {
        buttonColor = "#2ecc71";  // Hover
    } else {
        buttonColor = "#3498db";  // Normal
    }

    fill(buttonColor);
    noStroke();
    rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);

    fill(255);
    text("START", width / 2, height / 2);
}`,
    9: `let targetX;
let targetY;
let targetSize = 80;
let score = 0;

function setup() {
    createCanvas(600, 400);
    targetX = random(targetSize/2, width - targetSize/2);
    targetY = random(targetSize/2, height - targetSize/2);
}

function draw() {
    background(240);

    fill("#e74c3c");
    noStroke();
    circle(targetX, targetY, targetSize);

    fill(0);
    text("Score: " + score, 20, 30);
}

function mousePressed() {
    // Mouse болон target-ийн хоорондох зай
    let d = dist(mouseX, mouseY, targetX, targetY);

    if (d < targetSize / 2) {
        // Hit!
        score++;
        targetX = random(targetSize/2, width - targetSize/2);
        targetY = random(targetSize/2, height - targetSize/2);
    } else {
        // Miss
        score--;
    }
}`,
    10: `let targetX = 100;
let targetY = 200;
let targetSize = 70;
let targetSpeed = 4;
let score = 0;
let lives = 3;
let gameState = "playing";

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(240);

    if (gameState === "playing") {
        // Target хөдөлгөөн
        targetX += targetSpeed;

        // Захад хүрэхэд чиглэл солих
        if (targetX < targetSize/2 || targetX > width - targetSize/2) {
            targetSpeed *= -1;
        }

        fill("#e74c3c");
        noStroke();
        circle(targetX, targetY, targetSize);
    } else {
        // GAME OVER
        background(30);
        fill("#e74c3c");
        textSize(48);
        text("GAME OVER", width/2, height/2);
    }

    fill(0);
    text("Score: " + score + " | Lives: " + lives, 20, 30);
}

function mousePressed() {
    if (gameState !== "playing") return;

    let d = dist(mouseX, mouseY, targetX, targetY);

    if (d < targetSize / 2) {
        score++;
        targetSpeed *= 1.1;
        targetY = random(targetSize/2, height - targetSize/2);
    } else {
        lives--;
        if (lives <= 0) {
            gameState = "gameOver";
        }
    }
}

function doubleClicked() {
    // Тоглоомыг reset хийх
    targetX = 100;
    targetY = 200;
    targetSpeed = 4;
    score = 0;
    lives = 3;
    gameState = "playing";
}`
};

// ============================================================
// ДАСГАЛ СОЛИХ ФУНКЦ
// ============================================================
function loadExercise(num) {
    currentExercise = num;

    // Canvas-ийг устгах
    if (myCanvas) {
        myCanvas.remove();
    }

    // Canvas-ийг шинээр үүсгэх
    let container = document.getElementById("canvas-container");
    myCanvas = createCanvas(600, 400);
    myCanvas.parent("canvas-container");

    // Хувьсагчдыг reset хийх
    resetVariables();

    // Товчны идэвхжүүлэлт
    for (let i = 1; i <= 10; i++) {
        document.getElementById("btn-" + i).classList.remove("active");
    }
    document.getElementById("btn-" + num).classList.add("active");

    // Мэдээлэл шинэчлэх
    let ex = exercises[num];
    document.getElementById("ex-title").textContent = ex.title;
    document.getElementById("ex-goal").textContent = ex.goal;
    document.getElementById("ex-desc").innerHTML = ex.desc;
    document.getElementById("exercise-info").querySelector(".concepts").innerHTML =
        "<strong>Сурах ойлголтууд:</strong><br>" + ex.concepts;

    // Код харуулах (syntax highlight)
    let code = codeSnippets[num];
    let highlighted = code
        .replace(/\b(function|if|else|let|var|const|return|true|false)\b/g, '<span class="keyword">$1</span>')
        .replace(/\b(createCanvas|background|fill|noStroke|circle|rect|text|textAlign|textSize|random|dist|setup|draw|mousePressed|mouseReleased|doubleClicked)\b/g, '<span class="function">$1</span>')
        .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
        .replace(/\/\/(.+)/g, '<span class="comment">//$1</span>')
        .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
    document.getElementById("code-display").innerHTML = highlighted;

    // Setup дахин дуудах
    routeSetup();
}

function resetVariables() {
    ex6_circleX = 300;
    ex6_circleY = 200;
    ex6_circleColor = "#3498db";
    ex6_circleSize = 90;

    ex7_isPressed = false;
    ex7_circleSize = 100;
    ex7_circleColor = "#3498db";

    ex8_buttonX = width / 2 - ex8_buttonWidth / 2;
    ex8_buttonY = height / 2 - ex8_buttonHeight / 2;

    ex9_targetX = random(ex9_targetSize / 2, width - ex9_targetSize / 2);
    ex9_targetY = random(ex9_targetSize / 2, height - ex9_targetSize / 2);
    ex9_score = 0;

    ex10_targetX = 100;
    ex10_targetY = 200;
    ex10_targetSpeed = 4;
    ex10_score = 0;
    ex10_lives = 3;
    ex10_gameState = "playing";
}

// Эхлээд canvas-ийг container дотор үүсгэх
function setup() {
    let container = document.getElementById("canvas-container");
    myCanvas = createCanvas(600, 400);
    myCanvas.parent("canvas-container");
    routeSetup();
    loadExercise(1);
}

// Draw-г дахин тодорхойлох (route-гүй)
function draw() {
    routeDraw();
}

function mousePressed() {
    routeMousePressed();
}

function mouseReleased() {
    routeMouseReleased();
}

function doubleClicked() {
    routeDoubleClicked();
}
