function getRandom(start, end) {
// generez un nr aleatoriu intre 0 (inclusiv) și 1 (exclusiv)
    const random = Math.random();
    
// calculez un nr aleatoriu in intervalul [start, end)
// Math.floor() il folosesc pentru a obține un număr intreg
    const randomNumber = Math.floor(random * (end - start)) + start;

// returnez nr-ul aleatoriu generat
    return randomNumber;
}

//utilizari ale functiei
console.log(getRandom(3, 5));
console.log(getRandom(10, 20));
console.log(getRandom(-5, 5));