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
let strUpper1 = 'LOREM IPSUM';
let strUpper2 = 'JAVASCRIPT IS COOL';

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

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]

console.log(nums.map(number => number + ''));

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


function sortNums(arrayOfNums, direction) {
    if (direction === 'ascending') {
        arrayOfNums.sort((a, b) => a - b)
    }
    if (direction === 'descending') {
        arrayOfNums.sort((a, b) => b - a)
    }
    return arrayOfNums;
}

let numbers = [11, 21, 3];
let sortedNumbers = sortNums(numbers, 'descending');
console.log(sortedNumbers);

// Підглядував у розв'язок.

// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort);

let filtredCourses = coursesAndDurationArray.filter(function (value) {
    return value.monthDuration > 5;
})
console.log(filtredCourses);

let mapedCourses = coursesAndDurationArray.map(function (value, index) {
    return{
        id : index+1,
        title: value.title,
        monthDuration: value.monthDuration
    }
})
console.log(mapedCourses);