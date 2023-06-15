console.clear();

const marks = [10, 2, 8, 4, 6];
const user = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};

const [mark1] = marks;
console.log(mark1);

const [a, b, c] = marks;
console.log(a, b, c);

const [a1, b1, ...restMarks] = marks;
console.log(a1, b1, restMarks);

const ona = ['Ona', 77, true, 10, 2, 8, 4, 6, 10];
// const (onaName, onaAge, onaMarried);

const onaName = ona[0];
const onaAge = ona[1];
const onaMarried = ona[2];
console.log(onaName, onaAge, onaMarried);


// const mark1 = marks[0];
// const mark2 = marks[1];
// const mark3 = marks[2];
// const mark4 = marks[3];
// const mark5 = marks[4];

// const name = user.name;
// const age = user.age;
// const isMarried = user.isMarried;

const {age} = user;

const name = user.name;
// const age = user.age;
const isMarried = user.isMarried;

console.log(name, age, isMarried);

const students = [
    {name: 'Jonas', age: 99, marks: [5, 6, 9, 4]},
    {name: 'Maryte', age: 88, marks: [2, 10, 9, 3, 8]},
    {name: 'Petras', age: 77, marks: [7, 6, 9]},
];

for (const student of students){
    console.log(student);
    console.log(`${student.name}, kurio amzius yra ${age}`)
}
