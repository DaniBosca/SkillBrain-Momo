
//Funcția countVowels(str) primește un șir de caractere ca parametru.
function countVowels(str) {
//Definesc vocalele creind un string care conține toate vocalele (atât majuscule cât și minuscule).
    const vowels = 'aeiouAEIOU';
//evidentiez nr de vocale gasite cu vaiabila "count"
    let count = 0;
//bucla "for..of" parcurge fiecare caracter din sir.
    for (let char of str) {
//folosesc metoda "includes()" sa verific vocalele 
        if (vowels.includes(char)) {
            count++; 
        }
    }
//returnez nr total de vocale gasite    
    return count; 
}

const input1 = "string de test";
console.log(countVowels(input1)); 
