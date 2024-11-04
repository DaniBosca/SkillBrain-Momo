//prin functia "printEvenNumbers(n)" care primeste parametru "n" va primi limita supeioara.
function printEvenNumbers(n) {
//generam numere pare prin bucla "for" care incepe cu 0, crestem cu 2 la fiecare iteratie (i += 2') si se duce pana in parametru "n".
    for (let i = 0; i <= n; i += 2) {
        console.log(i);
    }
}

printEvenNumbers(10);