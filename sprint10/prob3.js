function letterCount(sir, litera) {
// convertesc sirul shi litera ..la litere mici pentru a nu tine cont de majuscule
    const sirLower = sir.toLowerCase();
    const literaLower = litera.toLowerCase();
    
// initializăm un contor pentru nr-ul de aparitii
    let count = 0;

// iterez prin fiecare caracter din shir
    for (let i = 0; i < sirLower.length; i++) {
// Verific dak caracterul curent este egal cu litera cautata
// ..si incrementez contorul dak gasesc o potrivire
        if (sirLower[i] === literaLower) {
            count++; 
        }
    }

// returnez nr-ul total de aparitii
    return count;
}

// ex de utilizare a functiei
console.log(letterCount("Îmi place programarea", "a"));
console.log(letterCount("Vreau să lucrez în IT", "r"));