// definim functia
function isDividedByTen(number) {
    return number % 10 === 0;
}

// va afisa: Numarul 70 este divizibil cu 10: true;
console.log('Numarul 70 este divizibil cu 10?' +isDividedByTen(70));
// va afisa: Numarul 33 este divizibil cu 10: false;
console.log('Numarul 33 este divizibil cu 10?' +isDividedByTen(33));