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