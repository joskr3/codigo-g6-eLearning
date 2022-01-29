let L = 0;
let PG = 77;
let TG = 0;
let GA = 0;

L = prompt('Ingrese la producción de leche del día que produjo');

TG = L/3.785
GA = TG*PG;

console.log("***CALCULO DE LA GANANCIA POR PRODUCCIÓN DE LECHE***")
console.log("")
console.log("Su producción en Galones es: "+TG+" Galones")
console.log("El precio del Galón de leche es: "+PG+" Dolares")
console.log("Su ganancia total es: "+GA+" Dolares")

