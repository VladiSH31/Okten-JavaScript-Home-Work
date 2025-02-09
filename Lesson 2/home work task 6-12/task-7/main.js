// ------------- #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// Спочатку написав такий код через switch. Але він не працює.
// let time = +prompt("Enter number from 0 to 59");
//
// switch (time) {
//     case time < 0:
//         console.log('No enter from 0 to 59');
//         break;
//     case time >= 0 && time <= 15:
//         console.log('first part of hour');
//         break;
//     case time >= 16 && time <= 30:
//         console.log('second part of hour');
//         break;
//     case time >= 31 && time <= 45:
//         console.log('third part of hour');
//         break;
//     case time >= 46 && time <= 59:
//         console.log('four part of hour');
//         break;
//     case time > 59:
//         console.log('No enter from 0 to 59')
//         break;
// }
// Підскажіть чому цей код не працює?

// Почав дивитись розв'язок, побачив що через if треба було робити зробив через if працює

let time = +prompt('Enter number from 0 to 59');

if (time >= 0 && time <= 15) {
    console.log('first part of hour')
} else if (time >= 16 && time <= 30) {
    console.log('second part of hour');
} else if (time >= 31 && time <= 45) {
    console.log('third part of hour');
} else if (time >= 46 && time <= 59) {
    console.log('four part of hour');
} else {
    console.log('No enter from 0 to 59');
}
