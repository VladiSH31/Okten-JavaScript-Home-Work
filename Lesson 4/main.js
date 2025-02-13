// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// noinspection LanguageDetectionInspection

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

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function listArr(array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

let skills = ['html', 'css', 'javascript', 'java', 'python']
listArr(skills);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function textWrite (text) {
    document.write(`<p>${text}</p>`);
}

textWrite(`Lorem ipsum dolor sit amet.`);

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function liWrite (text) {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>
`);
}

liWrite(`Lorem ipsum dolor sit amet.`);

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// До перегляду розв'язку
// function autoListWrite(text, valueLi) {
//     <ul>
//     for (let i = 0; i < ${valueLi}; i++) {
//         <li>${text}</li>
//     }
//     </ul>
// }
//
// autoListWrite('hello', 5);

function autoLiWrite(text, counter) {
    document.write('<ul>');
        for (let i = 0; i < counter; i++) {
            document.write(`<li>${text}</li>`);
        }
    document.write('</ul>');
}

autoLiWrite('hello', 5);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

function listArray(array) {

    document.write('<ul>');
    for (let Item of array) {
            document.write(`<li>${Item}</li>`);
    }
    document.write('</ul>');
}


listArray(['html', 'css', 'javascript', 'java', 'python']);

// Дивився розв'язок, невиходило.
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function usersList(arrayUsers) {
    for (let user of arrayUsers) {
        for (let fieldName in user) {
            document.write(`<div>${fieldName} ${user[fieldName]} </div>`)
        }
    }
}

let users = [
    {id: 1, name: 'john', age: 32},
    {id: 2, name: 'michel', age: 28},
    {id: 3, name: 'elizabeth', age: 26},
]

usersList(users);

// Передивився розв'язок,в мене трошки по іншому. ЧИ має місце такий код, чи буде він правильним?

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// До перегляду розв'язку. Але виводило NaN.
// function minNumber(arrNum) {
//     return Math.min(+arrNum)
// }
// let minNum = minNumber([234, 252, 253, 23, 35, 67])
// console.log(minNum);
//
//Після перегляду розв'язку розібрав/зрозумів .

function minNumber(numbers) {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(minNumber([43, 23, 98 , 11, 53, 4, 55, -1, 98]));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum =0;
    for (let number of arr) {
        sum += number;
    }
    return sum;
}

console.log(sum([1,2,10]));

// Піддивися у гуглі розібрав-зрозумів та вирішив..