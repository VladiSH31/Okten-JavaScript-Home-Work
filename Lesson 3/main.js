// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// noinspection LanguageDetectionInspection

for (let i = 0; i<10; i++) {
    document.write(`<div>Lorem ipsum dolor.</div>`)
}
// ------

// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


for (let i = 0; i<10; i++) {
    document.write(`<div>Lorem ipsum dolor.${i}</div>`)
}
//Спочатку індекс поставив поряд з дівом, Передивився розв'язок, перемістив в середину. Не правильно зрозумів завдання.

// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;

while (i<20) {
    document.write(`<div>Lorem ipsum dolor sit amet..</div>`);
    i++;
}

// #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let x = 0;

while (x<20) {
    document.write(`<h1>Lorem ipsum. ${x}</h1>`);
    x++;
}

// #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
// До перегляду розв'язку
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// for (let i = 0; i<listOfItems.length; i++) {
//     document.write(`<ul><li>${listOfItems[i]}</li></ul>`)
// }
// Після перегляду розв'язку, єдине що залишив через for  не for of
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let i = 0; i<listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`)
}
document.write(`</ul>\``);