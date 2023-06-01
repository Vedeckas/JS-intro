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

