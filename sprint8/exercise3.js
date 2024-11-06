//Cu acest cod definesc o functie pt inversarea unei liste de numere.
function reverseArray(numbers) {
// folosesc "numbers.slice()" pt a crea o copie a listei originale.
// ".reverse()" - metoda inverseaza ordinea tututor elementelor
    return numbers.slice().reverse();
}

let array1 = [1, -5, 20, -34, 16, 29, 36, -4];
//definesc o variabila "reversedArray1" si trec "array1" ca argument
let reversedArray1 = reverseArray(array1);
console.log(reversedArray1);

let array2 = [3, 5, 7, 9];
let reversedArray2 = reverseArray(array2);
console.log(reversedArray2);