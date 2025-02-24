// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

// function copyObject(obj) {
//     if (obj === undefined) {
//         console.log('Error');
//     }
//     if (obj === null) {
//         console.log('Error');
//     }
//     // if (isNaN(obj)) {
//     //     console.log('Error');
//     // }
//     else {
//         return {...obj};
//     }
//
// }
//
// let user = {
//     name: 'Oleg',
//     age: 12,
//     foo() {
//         console.log(`My name ${name}`);
//     }
// }
// let user1 = {
//     name: 'Mark',
//     age: 10
// }
// let user2 = undefined
//
// let copyUser = copyObject(user);
// console.log(copyUser);

function cloneObj(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                let functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        console.log(functions);
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone;
        }
        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('Error!!! Enter new Object!!!')
}

let user = {id:12, name: "Oleg", surname:'Fil', greeting() {console.log('Hi')}, filter() {console.log('Lets filter')},}

cloneObj(user);

// Дуже тяжке для мене завдання, половину коду я тупо переписував, і не до кінця розумію цей код

// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index + 1})));
//Перевіряв з відео