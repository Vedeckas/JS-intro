function multiply(a, b) {
    if (typeof a !== 'number' || !isFinite(b)) {
        return 'ERROR';
    }
    if (typeof b !== 'number') {
        return 'ERROR';
    }
    const rez = a * b;
    return rez;
    
}

console.log(multiply(2, 2), '->', 4);