console.clear();
/*
FUNCTION - perpanaudojamas logikos blokas
*/

const a1 = 10;
const a2 = 2;
const a3 = 8;
const a4 = 4;
const a5 = 6;
const aVidurkis = (a1 + a2 + a3 +a4+ a5) / 5;
console.log('a:', aVidurkis);

/*console.clear();

function empty() {

}
empty();
console.log(empty());
*/
console.clear();

function suma(vienas, du) {
return vienas + du;
}
const s1 = suma(7, 5);
const s2 = suma(-7, 5);
const s3 = suma(100, 5)
console.log(s1);
console.log(s2);
console.log(s3);

/*function pirmaRaide(vardas) {
    return vardas [0]  
}
    const r1 = pirmaRaide('Jonas');
    const r2 = pirmaRaide('Maryte');
    const r3 = pirmaRaide('Petras')
    console.log('Pirmos raides:', r1, r2, r3);

    function inicialai(vardas, pavarde){
    return '${vardas[0]}.${pavarde[0]}'
}
    const ini1 = inicialai('Chuck', 'Norris');
    const ini2 = inicialai('Pamela', 'Anderson');
    console.log('Inicialas 1:', init1);
    console.log('Inicialas 2:', init2);*/

console.clear();
    

    function intro(name, age) {
        return `Sveiki, mano vardas ${name} ir man ${age} metai!`;
    }
        const intro1 = intro('Jonas', 99);
        const intro2 = intro('Maryte', 88);
        const intro3 = intro('Petras', 51)
        console.log(intro1);
        console.log(intro2);
        console.log(intro3);