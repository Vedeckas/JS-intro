console.clear();

function numberLength (number) {
    if (typeof number !== 'number'){
        return 'ERROR: duok skaiciu';
    }
    if (isNaN(number)) {
        return 'ERROR: duok skaiciu o ne NaN';
    }
    if (number === Infinity || number -Infinity) {
        return 'ERROR: duok skaiciu o ne Infinity';
    }
    const numberAsString = number.toString();
    // const numberAsString = '' + number;

    return numberAsString.length;
}
console.log(numberLength(5), '->', 1);
console.log(numberLength(781), '->', 3);
console.log(numberLength(true));
console.log(numberLength(false));
console.log(numberLength('asd'));
console.log(numberLength(NaN));
console.log(numberLength(Infinity));
console.log(numberLength(-Infinity));
console.log(numberLength(undefined));
console.log(numberLength());
console.log(numberLength([]));