/*
ARRAY - sarasas, matrica, masyvas, arejus, listas
[].length - elementu kiekis masyve
*/

const jonas = [10, 5, 7];
const maryte = [9, 8, 7];
const petras = [5, 6, 8];
const ona = [8, 3, 6];

const abc = ['a', 'b', 'c']

function suma(masyvas) {
    return masyvas[0] + masyvas[1] + masyvas[2];
}
const a1 = [1, 2, 3];
const s1 = suma(a1);

const a2 = [10, 9, 8];
const s2 = suma(a2);

const a3 = [5, 5, 5];
const s3 = suma(a3);

console.log(s1, '->', 6);
console.log(s2, '->',27);
console.log(s3, '->',15);

// console.clear();

function studentIntro(name, marks) {
    const lastIndex = marks.length - 1;
    const lastMark = marks[lastIndex];
    return `${name}: paskutinis pazymys yra ${lastMark}.`;
}
const stud1 = 'Jonas';
const marks1 = [10, 2, 8, 7, 6, 5];
const stud2 = 'Maryte';
const marks2 = [10, 9, 8,];
const stud3 = 'Petras';
const marks3 = [5, 6, 7];
const stud4 = 'Ona';
const marks4 = [5, 5, 5, 5, 5, 5];

console.log(studentIntro(stud1, marks1));
console.log(studentIntro(stud2, marks2));
console.log(studentIntro(stud3, marks3));
console.log(studentIntro(stud4, marks4));