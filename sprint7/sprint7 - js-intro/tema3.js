//Definim functia
function getDay(n) {
    let dayName ="Astazi este";

    switch (n) {
        case 0:
            dayName +=" duminica";
            break;
        case 1: 
            dayName +=" luni";
            break;
        case 2:
            dayName +=" marti";
            break;
        case 3:
            dayName +=" miercuri";
            break;
        case 4:
            dayName +=" joi";
            break;
        case 5:
            dayName +=" vineri";
            break;
        case 6:
            dayName +=" sambata";
            break;
        case 7:
            dayName +=" duminica";
            break;
        default:
            dayName +=" the present";
    }
    return dayName;
}

//Afisam mai multe rezultate:

console.log(getDay(0));
console.log(getDay(1));
console.log(getDay(7));
console.log(getDay(5));
console.log(getDay(8));