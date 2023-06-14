console.clear();

const pirmas = 7;
const antras = 5;

function sum(a, b){
    return a + b;
}
console.log(`${pirmas} + ${antras} = ${sum(pirmas, antras)}`);

const v = 'Petras';
const p = 'Vedeckas';
// function 
console.log(v, p);

// Evoliucija !

// function abbr (firstname, lastname){
//     return `${firstname[0]}.${lastname[0]}.`
// }
// console.log(abbr('Petras', 'Vedeckas'));


// const abbr = function (firstname, lastname){
//     return `${firstname[0]}.${lastname[0]}.`
// }
// console.log(abbr('Petras', 'Vedeckas'));


// const abbr = (firstname, lastname) => {
//     return `${firstname[0]}.${lastname[0]}.`
// }
// console.log(abbr('Petras', 'Vedeckas'));


const abbr = (str1, str2) => `${str1[0]}.${str2[0]}.`;
console.log(abbr('Petras', 'Vedeckas'));

