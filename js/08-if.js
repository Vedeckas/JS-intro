/*
IF - palyginimas

Palyginimo operatoriai:
Visi: >, <, >=, <=, ==

Sintakse:

*/

console.log('START');
const a = 7;
const b = 55;

if (a > b) {
    console.log('Daugiau (a > b)');
} else {
    console.log('Ne daugiau...');
}

console.log('END');

// Code nesting

const arSvieciaSaule = true;
const arLyja = false;


if (arSvieciaSaule == true) {
    console.log('Dabar yra diena');
    if (arLyja == true){
        console.log('Lyja...');
    } else {
        console.log('Nelyja...');
    }
} else {
    console.log('Dabar yra naktis');
}

// Reik isspausdinti savaites dienos pavadinima.

const day = 3;
const weekday = 'Nezinau...';
if (day == 1) {
    console.log('Pirmadienis');
} else {
    console.log('Nezinau...')
}

console.log(weekday);

