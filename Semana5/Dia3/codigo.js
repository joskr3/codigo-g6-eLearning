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
const capital = "Madrid";
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

// let numeroDeVecinos = prompt("Cuantos paises vecinos tiene tu pais?");

// if (numeroDeVecinos === 1) {
//     console.log("Tu pais tiene un pais vecino", "Tipo de dato: number")
// } else if (numeroDeVecinos == "1") {
//     console.log("Tu pais tiene un pais vecino", "Tipo de dato string")
// }
// else if (numeroDeVecinos > 1) {
//     console.log("Tu pais tiene varios paises vecinos")
// } else {
//     console.log("Tu pais no tiene paises vecinos")
// }


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


// Funciones

// Funciones son bloques de codigo que se ejecutan cuando se llaman


// Ejercicio 9

// Escribir una funcion que se llame describirPais , que reciba tres parametros: pais , poblacion y capital , y en base a esto imprima en la consola lo siguiente:
// ej. <Mi pais> tiene <Mi poblacion> habitantes y su capital es <Mi capital>


function describirPais(pais, poblacion, capital) {
    return `${pais} tiene ${poblacion} habitantes y su capital es ${capital}`
}

let describirEspania = describirPais(pais, miPoblacion, capital);

let describirArgentina = describirPais("Argentina", 45000000, "Buenos Aires");


// Declaracion de funciones vs Expresiones

// La poblacion mundial es de 7 millones de personas. Crear declaracion de funcion llamada porcentajeDelMundo1 la cual recibe un valor de poblacion y devuelve el porcentaje de poblacion que representa

// ej. China tiene 1440 millones de habitantes y el porcentaje de poblacion que representa es 18% aproximadamente

// para calcular el procentaje , divide la pobalcion dada entre 7900 * 100

// 1. la declaracion de funcion
function porcentajeDelMundo1(poblacion) {
    return (poblacion / 7900) * 100
}

// 2. expresion 
const porcentajeDelMundo2 = function (poblacion) {
    return (poblacion / 7900) * 100
}

//3. funcion flecha
const porcentajeDelMundo3 = (poblacion) => {
    return (poblacion / 7900) * 100
}

const porcentajeDePortugal = porcentajeDelMundo1(10);
console.log(porcentajeDePortugal);


// Funciones llamando otras funciones

// EJERCICIO 10

// Crear una funcion llamada describirPoblacion , Usa el tipo de funcion que mas te agrade. Esta funcion toma dos argumentos: pais, poblacion , y devuelve algo como : China tiene 1440 millones de habitantes, lo cual es el 18% de la poblacion mundial aproximadamente.

// Para calcular el porcentaje "describirPoblacion" llama a la funcion porcentajeDelMundo1 que creaste en el ejercicio anterior.


// const describirPoblacion = function (pais, poblacion) {
//     return `${pais} tiene ${poblacion} habitantes y el porcentaje de poblacion que representa es ${porcentajeDelMundo1(poblacion)}% aproximadamente`
// }

// const describirPoblacion2 = (pais, poblacion) => {
//     return `${pais} tiene ${poblacion} habitantes y el porcentaje de poblacion que representa es ${porcentajeDelMundo1(poblacion)}% aproximadamente`
// }

const describirPoblacion = function (pais, poblacion) {
    const porcentaje = porcentajeDelMundo1(poblacion);
    const descripcion = `${pais} tiene ${poblacion} habitantes y el porcentaje de poblacion que representa es ${porcentaje}% aproximadamente`;
    console.log(descripcion);
}

// const describirPoblacionDePortugal = describirPoblacion("Portugal", 10);


// Arrays

// Arrays son colecciones de datos que se pueden acceder por medio de un indice numerico

// Ejercicio 11

// Crear un array que contenga las poblaciones de 4 paises de tu preferencia
// comprobar si el array tiene o no 4 elementos
// crear un array llamado porcentajes conteniendo los porcentajes de cada pais, usa la funcion porcentajeDelMundo1, para computar los 4 valores

let poblaciones = [10000000, 20000000, 30000000, 40000000];

let tieneCuatroElementos = poblaciones.length == 4;

let porcentajes = [
    porcentajeDelMundo1(poblaciones[0]), porcentajeDelMundo1(poblaciones[1]), porcentajeDelMundo1(poblaciones[2]), porcentajeDelMundo1(poblaciones[3])
];


// Operaciones(metodos) con arrays

// Crea un array conteniendo todos los paises vecinos de tu pais preferido(que sean al menos 2 paises) , almacenalos en una variable llamada vecinos

// En algun punto , un nuevo vecino , llamado "Utopia" , se acaba de descubrir, agregalo al array vecinos
// Desafortunadamente , Utopia se disuelve, eliminalo del array vecinos

// Si el array de vecinos , no contiene a Alemania , agregalo a la lista de vecinos e imprima en la consola "Alemania se ha incorporado a tu lista de vecinos"

// Usando indexOf , encuentra el indice de tu pais preferido en el array vecinos y cambia el pais preferido por el pais que esta en ese indice


let vecinosDePeru = ["Argentina", "Brasil", "Chile", "Colombia", "Ecuador"];

let nuevalistaDeVecinos = vecinosDePeru.push("Utopia");

let listaFinal = vecinosDePeru.pop("Utopia");

console.log(vecinosDePeru);
vecinosDePeru[vecinosDePeru.indexOf("Argentina")] = "Alemania";
console.log(vecinosDePeru);

if (!vecinosDePeru.includes("Suiza")) {
    vecinosDePeru.push("Suiza");
    console.log("Suiza se ha incorporado a tu lista de vecinos");
}

console.log(vecinosDePeru);


// Objetos

// Ejercicio 12

// Crea un objeto llamado mi pais , que contenga las siguientes propiedades: pais , capital , idioma y poblacion 


let miPais = {
    pais: "Peru",
    capital: "Lima",
    idioma: "español",
    poblacion: "10000000",
    vecinos: ["Argentina", "Brasil", "Chile", "Colombia", "Ecuador"],


    describir: function () {
        return `${this.pais} es un pais de ${this.idioma} con una poblacion de ${this.poblacion} habitantes y tiene ${this.vecinos.length} vecinos`
    },

    esIsla: function () {
        return this.vecinos.length == 1? true : false;
    }


}


console.log(`Mi pais es ${miPais.pais} , su capital es ${miPais.capital} , su idioma es ${miPais.idioma} y su poblacion es ${miPais.poblacion} habitantes y sus vecinos son ${miPais.vecinos.map(vecino => " " +vecino)}`);

let dismunirPoblacion = miPais["poblacion"] / 2;

console.log(dismunirPoblacion)


// Metodos de objetos

// Ejercicio 13

// Vamos a agregar un metodo que se llama describir al objeto miPais , este metodo debe imprimir en consola la siguiente informacion:(usare la palabra reservada this para referirnos al objeto)

// llamamos al metodo describir
// agregamos otro metodo lllamado , esUnaIsla al obejto miPais, este metodo se definira como una nueva propiedad en el obejto , llamada esIsla , y este metodo debe devolver un valor booleano , true si el pais es una isla , false en caso contrario



