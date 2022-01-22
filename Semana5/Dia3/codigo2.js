// Variables

// Ejerciciio 1
// Declarar tres variables que se llaman : pais, continente y poblacion(cantidad de habitantes).

// Imprimir estas variables con data del pais que mas les guste

let pais = "España";
let continente = "America";
let poblacion = "46 millones"



// Ejercicio 2

// Declara una variable que se llama esUnaIsla y vamos a definir su valor de acuerdo a nuestro pais favorito. Esta variable debe ser de tipo boolean., y tambien vamos a declarar otra variable que se llame idioma , pero no le vamos a asiganar ningun valor todavia  .

//  E imprimos estas variables en consola.


// Operadores Basicos

// Ejercicio 3

// Si el pais que elegiste se dividiera en 2 , cada mitad tendria la mitad de la poblacion que tenia., cuantas personas tendria cada mitad?
let mipoblacion = 46000000;
let poblacionFinlandia = 6000000;

if (mipoblacion>poblacionFinlandia) {
    console.log("Mi poblacion tiene mas habitantes")
} else {
    console.log("La problacion de Finlandia tiene mas habitantes")
    
}

// conversion de tipos

console.log('9'-'5');
console.log('9'+'5');
console.log('19'-'13'+17);
console.log('123'<57);

let operacion = 5+6+'4'+9-4-2;
console.log(operacion)

//OPERADORES DE IGUALDAD

// Ejercicio 6

// Declara una variable que se llame numeroDeVecinos, basado en en prompt de lo siguiente: "Cuantos paises vecinos tiene tu pais?"

// Si solo hay un pais vecino , imprimir en la consola "Tu pais tiene un pais vecino", usar el operador de igualdad simple

// Usa el else if para imprimir en la consola "Tu pais tiene varios paises vecinos", en el caso de que el numero de vecinos sea mayor a 1.

// Usa el else para imprimir en la consola "Tu pais no tiene paises vecinos" , si mi numero de paises vecinos es igual a 0 

// let numeroDeVecinos = prompt("Cuantos paises vecinos tiene tu pais?");
//let numeroDeVecinos = +prompt("cuantos paises vecinos //tiene tu pais");
//if (numeroDeVecinos===1) {
//    console.log("Mi pais tiene un vecino")
//} else if (numeroDeVecinos>1) {
    //console.log("Mi pais tiene varios vecinos")
//}else{
//    console.log("Mi pais no tiene vecinos")
//}

// Ejercicio 7

// Digamos que Sarah esta buscando un nuevo pais para vivir. Ella quiere vivir en un pais que no tenga mas de 50 millones de personas  y que no sea una isla.

// Deberemos escribir un if para ayudar a Sarah a que se de cuenta el mejor pais para ella.
// El if que escriban debera cumplir con los criterios de Sarah
// Si tu pais coincide con los criterios de Sarah , imprimir en la consola "Deberias vivir en <Mi pais(reemplazar esto con el pais que escogieron)>", y si no imprimir en la consola "No deberias vivir en <Mi pais(reemplazar esto con el pais que escogieron)>"

let paisDeSarah = "China";
let poblacion2 = 143900000;
const esUnaIsla = false;
const idioma = "español";



if (poblacion2 <50000000 && esUnaIsla ==false) {
    console.log("Deberías vivir en "+paisDeSarah)
} else {
    console.log("Deberías buscar otro País")
}

switch (idioma) {
    case "chino":
        console.log("el idioma mas hablado del mundo")
        break;
        case "español":
            console.log("el segundo idioma mas hablado del mundo")
            break;
            case "ingles":
                console.log("el tercer idioma mas hablado del mundo")
                break;
    default:
        break;
}
let MiPoblacionIdeal = poblacion2 <50000000 && esUnaIsla==false?"Deberías vivir en "+paisDeSarah : "Deberías buscar otro Pais";
console.log(MiPoblacionIdeal);
//let poblacion2 = ganadorDelfines === true ? "Delfines" : ganadorKoalas === true ? "Koalas" : "Empate";

//1.La declaracion de funcion
function porcentajeDelMundo1(poblacion) {
    return(poblacion/5)*100
}
const porcentajeDePortugal = porcentajeDelMundo1(10);
console.log(porcentajeDePortugal);

//EJERCICIO 10}
//Crear una funcion llamada describirPoblacion , usa el tipo de funcion que mas te agrade. Esta funcion toma dos argumentos: pais, poblacion y devuelve algo como: China tiene 1440 millones de habitantes, lo cual es el 18% de la poblacion mundial.

//Para calcular el porcentaje describirPoblacion llama a la funcion porcentajeDelMundo1 que creaste en el ejercicio anterior.

function describirPoblacion(pais, poblacion) {
    
    const descripcion = `${pais} tiene ${poblacion} habitantes y el porcentaje de poblacion que representa es % aproximadamente`;
    
}
console.log(pais);
console.log(poblacion);

//EJERCICIO 11
//Crea un array conteniendo todos los paises vecinos de tu pais preferido

let vecinosDePeru = ["Argentina", "Brasil", "Chile", "Colombia", "Ecuador"];

let nuevaListaDeVecinos = vecinosDePeru.push("Utopia");

let listaFinal = vecinosDePeru.pop("Utopia");

console.log(vecinosDePeru);
vecinosDePeru[vecinosDePeru.indexOf("Argentina")]="Alemania";
console.log(vecinosDePeru);

if (!vecinosDePeru.includes("Suiza")) {
    vecinosDePeru.push("Suiza");
    console.log("Suiza se ha incorporado a tu lista de vecinos");
    
}

console.log(vecinosDePeru);



//EJERCICIO 12
//Crea un objeto llamado mi pais, que contenga las siguientes propiedades: pais, capital, idioma y poblacion

let miPais = {
    pais: "Peru",
    capital: "Lima",
    idioma: "español",
    poblacion: "10000000",
    vecinos: ["Argentina", "Brasil", "Chile", "Colombia", "ecuador"]
}

console.log("Mi pais "+miPais.pais+" su capital es "+miPais.capital+", su idioma es el "+miPais.idioma+" su población es "+miPais.poblacion+" y sus vecinos son "+miPais.vecinos)


//EJERCICIO 13

//Vamos a agregar un método que se llama describir al objeto miPais, este método debe imprimir en consola la siguiente información:
//(usare la palabra reservada this para referirnos al objeto)

//llamamos al metodo describir
//agregamos otro metodo llamado, esUnaIsla al objeto miPais, este método se definira como una nueva propiedad en el objeto, lalmada sisla
