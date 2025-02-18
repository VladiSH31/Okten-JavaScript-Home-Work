// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


let str = 'hello world';
console.log(str.length);

let str1 = 'lorem ipsum';
console.log(str1.length);

let str2 = 'javascript is cool and very hard';
console.log(str2.length);

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str.toUpperCase());
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let strUpper = 'HELLO WORLD';
let strUpper1  = 'LOREM IPSUM';
let strUpper2  = 'JAVASCRIPT IS COOL';

console.log(strUpper.toLowerCase());
console.log(strUpper1.toLowerCase());
console.log(strUpper2.toLowerCase());

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strDirty = ' dirty string   ';
console.log(strDirty.trim());

// Підглядав у розв'язок.

// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let string = 'Ревуть воли як ясла повні';

function stringToArray(str) {
    return str.split(' ')
}
let arr = stringToArray(string);
console.log(arr);
