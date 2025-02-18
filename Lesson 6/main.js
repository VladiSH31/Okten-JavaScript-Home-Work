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

// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

let suits= ['spade', 'diamond','heart', 'club'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let cards = [];

for (let suit of suits) {
    for (let value of values) {
        let card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

console.log(cards.find(card => card.cardSuit === 'spade' && card.value === 'ace'));

console.log(cards.filter(card => card.value === '6'));

console.log(cards.filter(card => card.color === 'red'));

console.log(cards.filter(card => card.cardSuit === 'diamond'));

console.log(cards.filter(card => card.cardSuit === 'club' && (card.value!=='6' && card.value!=='7' && card.value!=='8' && card.value!=='9')));

// Дивився розв'язок при чому не один раз, бо в останньому таску в розв'язку було написано card.value!=='6' || card.value!=='7'
// а треба було через && бо не працювало.

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduceCards = cards.reduce((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
    }
    return accum
}, {spades:[],diamonds:[],hearts:[],clubs:[]})

console.log(reduceCards)

//Дивився розв'язок