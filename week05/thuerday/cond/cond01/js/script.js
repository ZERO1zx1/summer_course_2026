function setup() {
    createCanvas(600, 600);
}

function draw() {
    background("#f2f2f2");
    fill("#0a8016");
    circle(300, 200, 120);

    print(mouseX > 300);

    print(5 > 6);

    let a = 7;     // тоо (number)
    let b = 7.6;   // тоо (number)

    // Харьцуулалт ба өгөгдлийн төрөл
    print(a >= b); // их буюу тэнцүү
    print(a < b);  // бага
    print(a <= b); // бага буюу тэнцүү
    print('Hello'); // string

    // Тэнцүү эсэхийг шалгах
    print(a == b);  // хоёр утга хоорондоо адилхан байна уу
    print(a === b); // хоёр утга хоорондоо яг адилхан байна уу (төрөл хамаарна)
    print(2 == '2');   // true
    print(2 === '2');  // false


    function draw() {
        background(240);
        print(mouseX);

        // Нөхцөл шалгах (conditionals)
        if (mouseX > 300) {
            fill("#b3293b");
            circle(300, 200, 120);
        }
    }

}