// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}

let user1 = new User(1, 'Anton', 'Antonov', 'example@example.ua', '063111111');
let user2 = new User(2, 'Ivan', 'Ivanenko', 'example1@example.ua', '067111111');
let user3 = new User(3, 'Petro', 'Petrenko', 'example2@example.ua', '068111111');
let user4 = new User(4, 'Mykola', 'Tramp', 'example3@example.ua', '069111111');
let user5 = new User(5, 'John', 'Johnson', 'example4@example.ua', '065111111');
let user6 = new User(6, 'Jacob', 'Jacobson', 'example5@example.ua', '036111111');
let user7 = new User(7, 'Svitlana', 'Popova', 'example6@example.ua', '064111111');
let user8 = new User(8, 'Mark', 'Marko', 'example7@example.ua', '062111111');
let user9 = new User(9, 'Olya', 'Asdas', 'example8@example.ua', '061111111');
let user10 = new User(10, 'Xenia', 'Sadas', 'example9@example.ua', '060111111');

let set = new Set;
set.add(user1);
set.add(user2);
set.add(user3);
set.add(user4);
set.add(user5);
set.add(user6);
set.add(user7);
set.add(user8);
set.add(user9);
set.add(user10);

let arrayFromSet = Array.from(set);

console.log(arrayFromSet);

// Не так як у розв'язку а але результат здається правильний
