// Variables

// Ejerciciio 1
// Declarar tres variables que se llaman : pais, continente y miPoblacion(cantidad de habitantes).

// Imprimir estas variables con data del pais que mas les guste

// let pais = "España";
// let continente = "Europa";
// let miPoblacion = "46 millones";


// console.log(`Mi pais favorito es: ${pais} y su continente es: ${continente} y su miPoblacion es: ${miPoblacion}`);

// console.log("Mi pais favorito es: " + pais + " y su continente es: " + continente + " y su miPoblacion es: " + miPoblacion);


// Tipos de datos

// Ejercicio 2

// Declara una variable que se llama esUnaIsla y vamos a definir su valor de acuerdo a nuestro pais favorito. Esta variable debe ser de tipo boolean., y tambien vamos a declarar otra variable que se llame idioma , pero no le vamos a asiganar ningun valor todavia  .

//  E imprimos estas variables en consola.

// que valores deberiamos cambiarlos a constantes ? 

const pais = "España";
const continente = "Europa";
let miPoblacion = 46000000; // 46 millones

const esUnaIsla = false;

const idioma = "Español";

console.log(esUnaIsla ? "Si es una isla" : "No es una isla");

console.log(`Mi pais favorito es: ${pais} y su continente es: ${continente} y su miPoblacion es: ${miPoblacion}`);


// Operadores Basicos

// Ejercicio 3

// Si el pais que elegiste se dividiera en 2 , cada mitad tendria la mitad de la miPoblacion que tenia., cuantas personas tendria cada mitad?


let nuevaPoblacion = miPoblacion / 2;
console.log(nuevaPoblacion);

// vamos a aumentar la miPoblacion del pais en 1

let poblacionAumentada = miPoblacion + 1;
console.log(poblacionAumentada);

let poblacionAumentada2 = ++miPoblacion;
console.log(poblacionAumentada2, "Poblacion aumentada");

let poblacionAumentada3 = miPoblacion += 1;
console.log(poblacionAumentada3);


// Ejercicio 4

// Finlandia tiene una poblacion de 6 millones. Tiene tu pais favorito mas poblacion que Finlandia?

let poblacionFinlandia = 6000000;

if (miPoblacion > poblacionFinlandia) {
    console.log("Mi pais tiene mas poblacion que Finlandia");
} else {
    console.log("Finlandia tiene mas poblacion que mi pais");
}

// Ejercicio 5

// El promedio de poblacion de un pais es 33 millones. Tiene tu pais favorito mas poblacion que el promedio?

let poblacionPromedio = 33000000;

if (miPoblacion > poblacionPromedio) {
    console.log("Mi pais tiene mas poblacion que el promedio");
} else {
    console.log("Mi pais esta por debajo del promedio en poblacion");
}

// conversion de tipos

console.log('9' - '5')
console.log('9' + '5')
console.log('19' - '13' + 17)
console.log('123' < 57)

let operacion = 5 + 6 + '4' + 9 - 4 - 2
console.log(operacion)



// Operadores de igualdad(== , ===)

// Ejercicio 6

// Declara una variable que se llame numeroDeVecinos, basado en en prompt de lo siguiente: "Cuantos paises vecinos tiene tu pais?"

// Si solo hay un pais vecino , imprimir en la consola "Tu pais tiene un pais vecino", usar el operador de igualdad simple

// Usa el else if para imprimir en la consola "Tu pais tiene varios paises vecinos", en el caso de que el numero de vecinos sea mayor a 1.

// Usa el else para imprimir en la consola "Tu pais no tiene paises vecinos" , si mi numero de paises vecinos es igual a 0 

// el == compara solo los valores , el === compara los valores y el tipo de dato

let numeroDeVecinos = prompt("Cuantos paises vecinos tiene tu pais?");

if (numeroDeVecinos === 1) {
    console.log("Tu pais tiene un pais vecino", "Tipo de dato: number")
} else if (numeroDeVecinos == "1") {
    console.log("Tu pais tiene un pais vecino", "Tipo de dato string")
}
else if (numeroDeVecinos > 1) {
    console.log("Tu pais tiene varios paises vecinos")
} else {
    console.log("Tu pais no tiene paises vecinos")
}


// Operadores Logicos

// el Y logico (&&) -> todos los valores que evalua tienen que ser verdaderos para que el resultado sea verdadero 

// ej : let expresion = esNumeroPar && noEsMayorACien
// en el caso de que esNumeroPar sea falso , no evalua la siguiente expresion y el valor de "expresion" es false

// en el caso de que esNumeroPar sea verdadero y noEsMayorACien sea verdadero , el resultado de "expresion" es true

// let expresion true && false = false
// let expresion true && true = true


// el O logico (||) -> al menos uno de los valores que evalua tiene que ser verdadero para que el resultado sea verdadero

// ej : let expresion = esNumeroPar || noEsMayorACien
// en el caso de que esNumeroPar sea true o noEsMayorACien sea true , el resultado de "expresion" es true
// en el caso de que uno de los valores sea true y el otro sea false , el resultado de "expresion" es true
// en el caso de que ambos sean false , el resultado de "expresion" es false

// let expression  true || false = true
// let expression false || false = false


// Ejercicio 7

// Digamos que Sarah esta buscando un nuevo pais para vivir. Ella quiere vivir en un pais que no tenga mas de 50 millones de personas  y que no sea una isla.

// Deberemos escribir un if para ayudar a Sarah a que se de cuenta el mejor pais para ella.
// El if que escriban debera cumplir con los criterios de Sarah
// Si tu pais coincide con los criterios de Sarah , imprimir en la consola "Deberias vivir en <Mi pais(reemplazar esto con el pais que escogieron)>", y si no imprimir en la consola "No deberias vivir en <Mi pais(reemplazar esto con el pais que escogieron)>"


if (miPoblacion < 50000000 && esUnaIsla == false) {
    console.log("Deberias vivir en " + pais);
} else {
    console.log("No deberias vivir en " + pais)
}


// Switch


switch (idioma) {
    case "Chino":
        console.log("El idioma mas hablado del mundo");
        break;
    case "Español":
        console.log("El  segundo idioma mas hablado del mundo");
        break;
    case "Ingles":
        console.log("El tercer idioma mas hablado del mundo");
    case "Arabe":
        console.log("Un idioma popular");
        break;
    case "Hindi":
        console.log("Uno de los idiomas mas hablado de Asia")
        break;
    default:
        console.log("Tambien es un gran idioma");
}

// Ejercicio 8

//Operadores ternarios

// condicion ? expresion1 en caso sea verdadera : expresion2 en caso sea falsa

// if (miPoblacion < 50000000 && esUnaIsla == false) {
//     console.log("Deberias vivir en " + pais);
// } else {
//     console.log("No deberias vivir en " + pais)
// }


// Vamos a convertie el codigo anterior en uno con operor ternario

// 5 minutos para resolverlo

miPoblacion < 50000000 && esUnaIsla == false ? console.log("Deberias vivir en " + pais) : console.log("No deberias vivir en " + pais)












