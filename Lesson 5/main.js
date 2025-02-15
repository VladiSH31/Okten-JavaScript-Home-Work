//   #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// noinspection LanguageDetectionInspection

let calcAreaRectangle = (a, b) => a * b;

console.log(calcAreaRectangle(12, 5));

//   #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let calcAreaCircle = (r) => Math.PI * Math.pow(r, 2);

console.log(calcAreaCircle(9));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let calcAreaCylinder = (r, h) => 2 * Math.PI * r * h;

console.log(calcAreaCylinder(22, 10));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 2, -2, 'hello world', false]

let logArray = (array) => console.log(array);

logArray(arr);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let textCreator = (text) => document.write(`<p>${text}</p>`);

textCreator (`Lorem ipsum dolor.`);

/* #hOL6126
 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий */

let listCreator = (text) =>
    document.write(
            `<ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`);

listCreator(`list`);

/* #0Kxco1edSN
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) */

let listCreat = (text, listValue) => {
    document.write(`<ul>`);
    for (let i = 0; i < listValue; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

listCreat (`Lorem ipsum dolor sit amet, consectetur.`, 9);

/* #gEFoxMMO
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список */

let listArrayCreat = (arr) => {
    document.write(`<ul>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

listArrayCreat([12, 34, true, 'hello']);

/* #bovDJDTIjt
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
Для кожного об'єкту окремий блок. */

let array = [
    {id: 1, name: 'alic', age: 45},
    {id: 2, name: 'malic', age: 35},
    {id: 3, name: 'valic', age: 55}
]

let listArrayObject = (arr) => {
    for (let arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
    }
}

listArrayObject(array);

/* #pghbnSB
- створити функцію яка повертає найменьше число з масиву */

let minNumber = (numbers) => {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(minNumber ([12, 99, 65, -9, 1]));

/* #EKRNVPM
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
Приклад sum([1,2,10]) //->13 */

let sum = (arr) => {

    sum = 0;
        for (let arrElements of arr) {
            sum += arrElements;
        }
    return sum;
}

console.log(sum([1, 2, 10]));




