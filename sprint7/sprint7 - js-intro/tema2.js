//Definim functia
function tellFortune(kidsNumber, partenerName, location, workArea) {
    return 'Vei fi un ${workArea} in ${location}, casatorit cu ${partenerName} si vei avea si ${kidsNumber} copii.';
}

//apelam functia
console.log(tellFortune(3, "Catalina", "Irlanda", "programatorWeb"))