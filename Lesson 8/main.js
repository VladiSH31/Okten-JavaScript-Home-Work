// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

function copyObject(obj) {
    if (obj === undefined) {
        console.log('Error');
    }
    if (obj === null) {
        console.log('Error');
    }
    // if (isNaN(obj)) {
    //     console.log('Error');
    // }
    else {
        return {...obj};
    }

}

let user = {
    name: 'Oleg',
    age: 12,
    foo() {
        console.log(`My name ${name}`);
    }
}
let user1 = {
    name: 'Mark',
    age: 10
}
let user2 = undefined

let copyUser = copyObject(user);
console.log(copyUser);
