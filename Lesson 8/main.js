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

// Дуже тяжке для мене завдання, половину коду я тупо переписував, і не докінця розумію цей код