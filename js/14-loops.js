/* for, for-of, while, do-while, for-in 
 object: for-in */

// FOR

const marks1 = [10, 2, 8, 4, 6];
let sum1 = 0;

for (let i = 0; i < marks1.length; i++) {
    const mark = marks1[i];
    sum1 += mark;
    // console.log(marks);
}
console.log('sum:', sum1);

// FOR-OF

const marks2 = [10, 2, 8, 4, 6];
let sum2 = 0;

for (const mark of marks2) {
    sum2 += mark;
    // console.log(marks);
}
console.log('sum:', sum2);

// WHILE

const marks3 = [10, 2, 8, 4, 6];
let sum3 = 0;
let i3 = 0;

while (i3 < marks3.length){
    const mark = marks3[i3];
    sum3 += mark;
    i3++;
}
console.log('sum:', sum3);

// while(true){

// }

// DO-WHILE

const marks4 = [10, 2, 8, 4, 6];
let sum4 = 0;
let i4 = 0;

do {
    i4++;
} while (i4 < marks4.length)
console.log('sum:', sum4);

console.clear();

console.log('START');

for (let i = 0; i < 3; i++){
    console.log(i);
}
console.log('---------');
for (let i = 0; i < 4; i++){
    console.log(i);
}
console.log('---------');
for (let i = 0; i < 5; i++){
    console.log(i);
}

// FOR-IN

console.log('\nFOR-IN ----------');
const user = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    x: 'xxx',
};

const userKeys = Object.keys(user);
for (let i = 0; i < userKeys.length; i++) {
    const key = userKeys[i]
    console.log(i, key, '---', user[key]);
}

for (const x in user){
    console.log(x, ':', user[x]);
}
console.log(user);
console.log(user.name);

console.clear();

let i = 10;

// for (let i = 10; i < 100; i += 10){
// for (; i < 100; i += 10){

for (; i < 100;){
    console.log(i);
    i += 10;
}

// let i = 10;
let arSuktiCikla = i < 100;

for (; arSuktiCikla;){
    console.log(i, arSuktiCikla);
    i += 10;
    arSuktiCikla = i < 100;
}
// console.log('++++++++++++');
// for (i=0; i<100; i++) {
//     continue;
//     console.log('++++++++++++');
// };

