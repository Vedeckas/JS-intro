/*
BOOLEAN - logine reiksme
true, false

Loginiai operatoriai:
&& (and) - ir (true -> jeigu visi yra true)
|| (or) - arba (true -> jeigu bent vienas yra true)
*/

console.clear();
const isOld = true;
console.log(isOld);

const isFunny = false;
console.log(isFunny);

console.log('-------');


console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

console.log('-------');

console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);

console.log('-------');

console.log(true && true && false);
console.log(true || true || false);

console.log('-------');

console.log(true && true || false || true && false);
console.log(true || false || true && false);
console.log(true || true && false);
console.log(true && false);
console.log(false);
console.log(false || false && true || false && false || true);