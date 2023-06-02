console.clear();

/*
NUMBERS - skaiciai
Sveikieji/desimtainiai
Teigiami/neigiami
Mistiniai: Begalybes ir NAN (not-a-number)

Aritmetiniai operatoriai:
+, -, *, /, **, ++, --,

Priskyrimo operatoriai:
=, +=, -=, *=, /=, **=,

Salia matematikos:
(, )

Kintamuju inicijavimo budai:
const - default
let - naudoti, tik jei reikia keisti reiksmes
var - senove, todel niekada nenaudoti nebent TIKRAI zinai ka darai

*/

console.log(1);
console.log(3.14);
console.log(NaN);
console.log(2 + 3);
console.log(0.1+0.2, 0.3);

// console.log(1);

// KINTAMIEJI

const amzius = 20;
console.log(amzius);

console.clear();
// Kintamieji: konstantos ir kintamieji

let pinigine = 0
console.log(pinigine);

pinigine = 5
console.log(pinigine);

pinigine = 3+4
console.log(pinigine);

pinigine = pinigine + 5
console.log(pinigine);

console.clear();

let index = 0;
console.log(index);

console.clear();

let driezas = 1;
console.log(driezas);

driezas = 5 + driezas;
console.log(driezas);

driezas += 6;
console.log(driezas);

// x = 5 * (x - 3);
// x = 5 * (5 - 3);
// x = 5 * (2);
// x = 5 * 2;
// x = 10;
console.clear();

let x = 1;
console.log(x);

x = x + 1;
console.log(x);

x++;
console.log(x);

console.clear();

let y = 5;
y++;
console.log(y);
console.log(y++);
console.log(y++);
y++;
console.log(y);
++y;
console.log(y);

console.clear();

let m = 7;
console.log(m);
console.log(++m);

console.clear();
const a = 8;
const b = 9;
const c = 10;
const d = a + b + c;
console.log(d);

const p1 = 8;
const p2 = 7;
const p3 = 4;
const p4 = 8;
const p5 = 6;
const vidurkis = (p1 + p2 + p3 + p4 + p5) / 5;
console.log(vidurkis);