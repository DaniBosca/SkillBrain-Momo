// Creareez un sir de obiecte care descriu carti
const carti = [
    { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: true },
    { titlu: "1984", autor: "George Orwell", esteCitita: false },
    { titlu: "Mândrie și prejudecată", autor: "Jane Austen", esteCitita: true },
    { titlu: "Cronicile din Narnia", autor: "C.S. Lewis", esteCitita: false }
];

// Functia care itereaza prin carti shi afiseaza mesajele corespunzatoare
function afiseazaCarti(carti) {
    for (const carte of carti) {
// Afisez titlul si autorul cartzii
        console.log(`${carte.titlu} de ${carte.autor}`);
        
// Verificam daca cartea a fost citită sau nu
        if (carte.esteCitita) {
            console.log(`Ai citit deja "${carte.titlu}" de ${carte.autor}`);
        } else {
            console.log(`Trebuie să citești "${carte.titlu}" de ${carte.autor}`);
        }
    }
}

// Apelez functia pentru a afisha informatiile despre carti
afiseazaCarti(carti);
