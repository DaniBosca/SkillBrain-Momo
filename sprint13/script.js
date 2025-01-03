// definesc clasa masina
class Masina {
    constructor(marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }

    get proprietati() {
        return `Masina[marca=${this.marca.toUpperCase()}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
    }
}

// definesc clasa MasinaDeCurse care extinde clasa Masina
class MasinaDeCurse extends Masina {
    constructor(marca, model, culoare, kilometraj) {
        super(marca, model, culoare, kilometraj);
    }

    participaLaCampionat(pozitiaInCampionat) {
        if (pozitiaInCampionat > 0) {
            console.log(`Am castigat locul ${pozitiaInCampionat}`);
        } else {
            console.log("Nu am castigat niciun premiu");
        }
    }
}

// functia main pentru a crea instantele si a afisa proprietătile
function main() {
    const masina1 = new Masina("Volvo", "XC-60", "Negru", "234 000");
    const masina2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
    const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");

    console.log(masina1.proprietati);
    console.log(masina2.proprietati);
    console.log(masina3.proprietati);
    // am castigat locul 2
    const masinaCurse1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
    masinaCurse1.participaLaCampionat(2); 
    //nu am castigat niciun premiu
    const masinaCurse2 = new MasinaDeCurse("Ferrari", "F8", "Alb", 50000);
    masinaCurse2.participaLaCampionat(-1);
}

main();
championship();