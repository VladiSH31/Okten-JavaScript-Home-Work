// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle (a, b) {
    return a * b;
}

let r1 = areaRectangle(10, 20);
console.log(r1);

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle (r) {
    let s = Math.PI*Math.pow(r, 2);
    return s;
}

let aC = areaCircle(5);
console.log(aC);
