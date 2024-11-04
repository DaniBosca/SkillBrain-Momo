function creareReteta(titlu, portii, ingrediente) {
// Creez obiectului reteta
    const reteta = {
        titlu: titlu,
        portii: portii,
        ingrediente: ingrediente
    };

// Afishez informatiile obiectelor pe randuri separate
    console.log("Titlu: " + reteta.titlu);
    console.log("Porții: " + reteta.portii);
    console.log("Ingrediente: " + reteta.ingrediente.join(", "));
    
// Returnarea obiectului pentru utilizare ulterioara
    return reteta;
}

const retetaPreferata = creareReteta("Pizza", 3, ["sunca", "cas", "ketchup"]);
console.log(retetaPreferata);