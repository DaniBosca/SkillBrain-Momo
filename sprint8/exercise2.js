// folosesc functia "calculateSum(numbers)" shi insushesc un array de numere ca parametru.
function calculateSum(numbers) {
// Adaug metoda "reduce()" care itereaza prin fiecare element din lista, shi ii face suma.
//"accumulator" suma pana la moment, iar "currentValue va fi elementul curent din array"; 
// accumulator + currentValue: Aceasta aduna valoarea curenta la suma acumulata; "0" este valoarea initiala a accumulator-ului.
    return numbers.reduce((accumulator, current) => accumulator + currentcurrentValue, 0);
}

let array1 = [1, -5, 20, -34, 16, 29, 36, -4];
let sum1 = calculateSum(array1);
console.log(sum1); 

let array2 = [3.45, -2.68, 356, -75.96, 64, 19.28];
let sum2 = calculateSum(array2);
console.log(sum2); 
