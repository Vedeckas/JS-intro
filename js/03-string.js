console.clear();

/*
STRING - tekstiniu simboliu grandinele, aka tekstas

Inicijavimo budai:
- viengubos kabutes ('')
- dvigubos kabutes ("")

Ilgis:
'stringas'.length
*/

const vardas = 'Jonas';
const vardas2 = "Maryte";
console.log(vardas);
console.log(vardas2);

const firstName = 'Petras';
const lastName = 'Vedeckas';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log('_____');

// Vienguba kabute (').

const kabute1 = "Vienguba kabute (')";
console.log(kabute1);

// Dviguba kabute (")/.

const kabute2 = 'Dviguba kabute (")';
console.log(kabute2);

//Vienguba (') ir dviguba (") kabutes.

const kabute12 = "Vienguba (') ir dvi" + 'guba (") kabutes.';
console.log(kabute12);

//Vienguba (') ir dviguba (") kabutes.
//Vienguba ('), dviguba (") ir backtick (`) kabutes.

const kabute4 = `Vienguba ('), dviguba (") ir backtick (\`) kabutes.`;
console.log(kabute4);

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabute12_1);
console.log(kabute12_2);

// Backslash (\)
const back = 'Backslash(\\)';
console.log(back);

/*
Labas
rytas,
Lietuva!
*/
const labas = 'Labas\n\
rytas, \n\
Lietuva!';
console.log(labas);

// \n - new line(slenkasi eilute zemyn, bet lieka X-asy ten pat)
// \r - return (grizta i tos pacios eilutes prieki)
// \t - tab

// Sveiki, mano vardas [VARDAS], man yra [METAI] metai ir man labai patinka [KAS PATINKA], [KAS PATINKA] ir [KAS PATINKA]!

// console.clear();

const name = 'Martynas';
const age = '99';
const ilike1 = 'masinos';
const ilike2 = 'gamta';
const ilike3 = 'oro balionai';

const martynas = "Sveiki, mano vardas " + name + ", man yra " + age + " metai ir man labai patinka " + ilike1 + ", " + ilike2 + " ir " + ilike3 + "!";
console.log(martynas);

const martyns = `Sveiki, mano vardas ${name}, man yra ${age} metai ir man labai patinka ${ilike1}, ${ilike2} ir ${ilike3}!`;
console.log(martyns);

// console.clear();

// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// 2 * 6 = 12
// 2 * 7 = 14
// 2 * 8 = 16
// 2 * 9 = 18
// 2 * 10 = 20

const kintamas = 2
const a1 = 1;
const a2 = 2;
const a3 = 3;
const a4 = 4;
const a5 = 5;
const a6 = 6;
const a7 = 7;
const a8 = 8;
const a9 = 9;
const a10 = 10;

const lentele1 = kintamas  + ' * ' + a1 + ' = ' + (kintamas * a1) + '\r\n'  
+ kintamas  + ' * ' + a2 + ' = ' + (kintamas * a2) + '\r\n'
+ kintamas  + ' * ' + a3 + ' = ' + (kintamas * a3) + '\r\n'
+ kintamas  + ' * ' + a4 + ' = ' + (kintamas * a4) + '\r\n'
+ kintamas  + ' * ' + a5 + ' = ' + (kintamas * a5) + '\r\n'
+ kintamas  + ' * ' + a6 + ' = ' + (kintamas * a7) + '\r\n'
+ kintamas  + ' * ' + a7 + ' = ' + (kintamas * a7) + '\r\n'
+ kintamas  + ' * ' + a8 + ' = ' + (kintamas * a8) + '\r\n'
+ kintamas  + ' * ' + a9 + ' = ' + (kintamas * a9) + '\r\n'
+ kintamas  + ' * ' + a10 + ' = ' + (kintamas * a10) + '\r\n'
console.log(lentele1);

const lentele2 = `${kintamas} * ${a1} = ${kintamas*a1}
${kintamas} * ${a2} = ${kintamas*a2}
${kintamas} * ${a3} = ${kintamas*a3}
${kintamas} * ${a4} = ${kintamas*a4}
${kintamas} * ${a5} = ${kintamas*a5}
${kintamas} * ${a6} = ${kintamas*a6}
${kintamas} * ${a7} = ${kintamas*a7}
${kintamas} * ${a8} = ${kintamas*a8}
${kintamas} * ${a9} = ${kintamas*a9}
${kintamas} * ${a10} = ${kintamas*a10}`;
console.log(lentele2);

console.clear();

const multiplier = 3;
let number = 0;

// const m1 = multiplier * n1;
// const m2 = multiplier * n2;

const lentele3 = `
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}`;
console.log(lentele3);

let sum = 0;
let index = 0;

const lentele4 = `
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}`;

console.log(lentele4);

const str = 'Opliaopliaoplia';
console.log(str, 15, '>>>', str.length);

const raide = str[0];
console.log(raide, 'O');

