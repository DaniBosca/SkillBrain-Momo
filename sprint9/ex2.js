function eliminaProprietate(obiect, proprietate) {
// Creăm un obiect nou
    const obiectNou = {};

// Iterăm prin proprietățile obiectului original
    for (const cheie in obiect) {
// Verificăm dacă cheia nu este proprietatea pe care dorim să o eliminăm
        if (cheie !== proprietate) {
// Adăugăm cheia și valoarea sa în obiectul nou
            obiectNou[cheie] = obiect[cheie];
        }
    }

// Returnez obiectul nou
    return obiectNou;
}

const obiectOriginal = { a: 1, b: 2 };
const proprietateDeEliminat = "b";
const rezultat = eliminaProprietate(obiectOriginal, proprietateDeEliminat);

console.log(rezultat);