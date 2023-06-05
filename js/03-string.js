console.clear();

/*
STRING - tekstiniu simboliu grandinele, aka tekstas

Inicijavimo budai:
- viengubos kabutes ('')
- dvigubos kabutes ("")
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
console.clear();

const name = 'Martynas';
const age = '99';
const ilike1 = 'masinos';
const ilike2 = 'gamta';
const ilike3 = 'oro balionai';

const martynas = "Sveiki, mano vardas " + name + ", man yra " + age + " metai ir man labai patinka " + ilike1 + "," + ilike2 + " ir " + ilike3 + "!";
console.log(martynas);

const martyns = `Sveiki, mano vardas ${name}, man yra ${age} metai ir man labai patinka ${ilike1}, ${ilike2} ir ${ilike3}!`;
console.log(martyns);

console.clear();

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

// 06.02 uzdaviniai

/*1. Sukurti du kintamuosius. 
 Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). 
 Atspausdinti trumpesnį stringą.
*/
console.clear();

const vards = `Jim`;
const vards2 = `Carrey`;
const vardziuks = `${vards[0]}.${vards2[0]}`;
console.log(vardziuks);

/*2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). 
Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir 
naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
*/
const reiksme = `Petras`;
const reiksme2 = `Vedeckas`;
const reiksme3 =  `2012`;
const reiksme4 =  `2023`;

const ages = (reiksme4 - reiksme3);

function intro(name, age) {
    return `Sveiki, mano vardas ${reiksme} ${reiksme2} ir man ${ages} metai!`;
}

const intro1 = intro('Petras', 'vedeckas');

console.log(intro1);


// console.log(metai);

/*3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. 
Jį atspausdinti.
*/
const firstn = `Jim`;
const lastn = `Carrey`;
const str = `${firstn[2]}${firstn[1]}${firstn[0]}${lastn[5]}${lastn[4]}${lastn[3]}`;
console.log(str);

/*4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  
Rezultatą atspausdinti.
*/


/*5. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let value = 0;
let value1 = 1;
let value2 = 2;
let value3 = 0.9;

