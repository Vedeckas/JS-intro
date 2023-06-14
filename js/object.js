const user1 = ['Jonas', 99, true];
const user2 = ['Maryte', 88, false];
const user3 = ['Petras', 77, false];
const user4 = ['Ona', 66, true];

const users = [user1, user2, user3, user4];
console.log(users);

const userName = user2[0];
const userAge = user2[1];
const userIsMarried = user2[2];

console.log(userName);
console.log(userAge);
console.log(userIsMarried);

/*
const user1Name = 'Jonas';
const user1Age = 99;
const user1IsMarried = true;

const user2Name = 'Maryte';
const user2Age = 88;
const user2IsMarried = false;

const user3Name = 'Petras';
const user3Age = 77;
const user3IsMarried = false;

const user4Name = 'Ona';
const user4Age = 66;
const user4IsMarried = true;
*/

// Sveiki, mano vardas yra VARDAS, man yra XX metu ir as VEDES/NEVEDES.

let vedybinisTekstas = '';
if (userIsMarried){
    vedybinisTekstas = 'vedes';
}else {
        vedybinisTekstas = 'nevedes';
    }
let hi = `Sveiki, mano vardas yra ${userName}, man yra ${userAge} metu ir as ${vedybinisTekstas}.`;

console.log(hi);

console.clear();

const student1 = {
    name: 'Lonas',
    age: 99,
    isMarried: true,
};

const student2 = {
    name: 'Matyte',
    age: 88,
    isMarried: false,
};    

const students = [
    student1,
    student2,
];

console.log(student1);
console.log(student1['name']);
console.log(student1['age']);
console.log(student1['isMarried']);

// const students = [];

console.clear();

const demo = {
    'name': 'Jonas',
    age: 99,
    'is married': true,
    0: 10,
    1: 2,
    2: 8,
    3: 4
};
console.log(demo);
console.log(demo['name'], demo.name);
console.log(demo['age']);
console.log(demo['is married']);
console.log(demo['0'], demo[0]);
console.log(demo[0]);

console.clear();

const car = {
    marke: 'Audi',
    model: '80',
    color: 'red',
    price: 500,
    doors: 4,
};
console.log(car);
console.log(car.price);

const noriuSuzinoti = 'price';

const reiksme = car[noriuSuzinoti];
console.log('>>>', reiksme);

console.clear();

const child = {
    name: 'Maryte',
    age: 5,
    parents: {
        father: {
            name: 'Jonas',
            age: 32,
            phones: [1122333, 4444444],
        },
        mother: {
            name: 'Ona',
            age: 35,
            phones: [1122],
        },
    },
};

const info = child.parents.father.phones[1];
// const info = child.parents[1].phones;
console.log(info);

const augintinis = {
    name: '',
    age: 0,
    items: [],
};

console.log(augintinis);

augintinis.name = 'Rexas';
console.log(augintinis);

augintinis.age++;
augintinis.items.push('kaulas-1');
console.log(augintinis);