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

let users = Array.from(set);

console.log(users);

// Не так як у розв'язку а але результат здається правильний

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filtredUsers = [];
for (let user of users) {
    if (user.id % 2 ===0){
        filtredUsers.push(user)
    }
}
console.log(filtredUsers);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sorted = users.sort((a, b) => {
    return b.id - a.id;
})

console.log(sorted);
// Зробив спеціально у зворотньому порядку щоб було видно

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

let Clients = [
    new Client(1, "anna", "white", "anna.white@yahoo.com", "+12-951-6093735", ['milk', 'bread']),
    new Client(2, "james", "martin", "james.martin@example.com", "+82-815-3464090", ['tomato', 'bread']),
    new Client(3, "michael", "anderson", "michael.anderson@gmail.com", "+58-378-8078854", ['milk', 'cucumber']),
    new Client(4, "chris", "harris", "chris.harris@gmail.com", "+7-925-9911410", ['tomato', 'bread']),
    new Client(5, "james", "jackson", "james.jackson@example.com", "+30-122-7409500", ['milk', 'cucumber']),
    new Client(6, "john", "martin", "john.martin@yahoo.com", "+48-875-2723929", ['bear', 'meat']),
    new Client(7, "james", "johnson", "james.johnson@outlook.com", "+2-256-7693455", ['tomato', 'bread']),
    new Client(8, "david", "brown", "david.brown@example.com", "+61-194-5675450", ['milk', 'meat']),
    new Client(9, "anna", "martin", "anna.martin@gmail.com", "+88-626-7981931", ['tomato', 'cucumber']),
    new Client(10, "emily", "smith", "emily.smith@example.com", "+46-534-6364785", ['bear', 'milk']),
]
console.log(Clients);