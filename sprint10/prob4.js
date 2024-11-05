const addNumber = (...argumente) => {
// folosesc 'reduce' pentru a calcula suma tuturor numerelor
    return argumente.reduce((accumulator, current) => accumulator + current, 0);
};

// variante de  utilizare a functiei
console.log(addNumber(1, 2, 3));
console.log(addNumber(1, 2, 3, 4, 5));
console.log(addNumber(10, 20, 30));
// 0 (când nu sunt transmise argumente)
console.log(addNumber());