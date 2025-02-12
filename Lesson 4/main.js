// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calcAreaRectangle (a, b) {
    return a * b;
}

let areaRectangle = calcAreaRectangle(10, 20);
console.log(areaRectangle);

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calcAreaCircle (r) {
    return Math.PI*Math.pow(r, 2);
}

let areaCircle = calcAreaCircle(5);
console.log(areaCircle);

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calcCylinder(r, h) {
    return 2*Math.PI*r*h;
}

let areaCylinder = calcCylinder(5, 7);
console.log(areaCylinder);