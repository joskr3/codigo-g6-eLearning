

let nombre = "Juan";
let apellido = "Perez";

console.log(nombre + " " + apellido);

nombre = "Josue";

console.log(nombre + " " + apellido);

const nacionalidad = "Mexicano";

let numeroDeUsuarios = 1000;

numeroDeUsuarios = 2000;

// tipo numero
let numero = 10;

// tipo string
let texto = "Hola";

// tipo booleano
let verdadero = true;

// tipo null
let nulo = null;

// tipo undefined
let indefinido


// tipo obejto
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
}

// class Persona {
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//     }
// }

// let nuevaPersona = Persona("Juan", "Perez", 30);

console.log(persona.nombre);

// tipo array

let lista = [1, 2, 3, 4, 5];
let listDeNombres = ["Juan", "Pedro", "Maria"];

let listaDeCualquierElemento = [1, "Hola", true, null, undefined, { nombre: "Juan", apellido: "Perez", edad: 30 }];


let valor1 = listaDeCualquierElemento[5];

let valor2 = listaDeCualquierElemento[19];

console.log(valor1, "valor 1");
console.log(valor2, "valor 2");

for (let indice = 0; indice < listaDeCualquierElemento.length; indice++) {
    console.log(listaDeCualquierElemento[indice], "For ")
}



let suma = 2 + 3
let resta = 2 - 3

let multiplicacion = 2 * 3
let division = 2 / 3

let parentesis = (2 + 3) * 4;


let expresion = 2 + 3 * 4
    ;

let a = 2
let b = 4


let cuadradoPerfecto = (a ** 2) + (2 * a * b) + (b ** 2)

console.log(cuadradoPerfecto);


// if- else


let numeroMayor = 10;
let numeroMenor = 5;

if (numeroMayor > numeroMenor) {
    console.log("El numero mayor es mayor que el menor");
} else {
    console.log("El numero mayor es menor que el menor");
}


let mayorDeEdadEnPeru = 18;
let mayorDeEdadEnUsa = 21;

let mayorDeEdadEnJapon = 20;


if (mayorDeEdadEnPeru >= 18) {
    console.log("Es mayor de edad , puede entrar al bar");
} else {
    console.log("No es mayor de edad , no puede entrar al bar");
}


if (mayorDeEdadEnPeru === mayorDeEdadEnUsa) {
    console.log("Es mayor de edad en USA , puede entrar al bar");
} else {
    console.log("No es mayor de edad en USA , no puede entrar al bar");
}


if (mayorDeEdadEnPeru !== mayorDeEdadEnUsa) {
    console.log("Es mayor de edad en Peru , pero no es USA , no puede entrar al bar en USA");
} else {
    console.log("No es mayor de edad en Peru , pero es USA , puede entrar al bar en USA");
}




let mayorDeEdadEnCuba = true;
let mayorDeEdadEnIran = false;
let mayorDeEdadEnRusia = true;

if (mayorDeEdadEnCuba || mayorDeEdadEnRusia || mayorDeEdadEnIran) {
    console.log("Eres mayor de edad, puedes entrar al bar");
}

if ((mayorDeEdadEnCuba || mayorDeEdadEnIran) && mayorDeEdadEnRusia) {
    console.log("Eres mayor de edad, puedes entrar al bar");
}

let numeroPar = 10;
let numeroImpar = 11;

// !== - > si es que no son iguales
if (numeroPar !== numeroImpar) {
    console.log("Son numeros diferentes");
}



// EJERCICIO 1 -  BMI(indice de masa corporal)

//formula bmi ->>  bmi = peso / ( altura * altura)

// Hay dos amigos Ana y Juan , que quieren comparar su BMI , para saber si es que estan en condiciones de hacer ejercicio
// lo van a hacer usando la formula 

// voy a imprimir en consola , quien tiene el BMI mas alto
// para imprimir en consola --> console.log(Lo que quiero imprimir)

// * necesitamos tres variables = (la altura y el peso de cada uno) y el mayorBMI , para saber quien es el que tiene el mayor BMI


let alturaAna = 1.70;
let alturaJuan = 1.80;

let pesoJuan = 80;
let pesoAna = 70;


let bmiAna1 = pesoAna / (alturaAna * alturaAna);
let bmiJuan1 = pesoJuan / (alturaJuan * alturaJuan);

if (bmiAna1 > bmiJuan1) {
    console.log("Ana tiene el mayor BMI");
} else {
    console.log("Juan tiene el mayor BMI");
}



function calcularBmi(peso, altura) {
    return peso / (altura * altura);
}

function calcularMayorBMI(bmiAna = 0, bmiJuan = 0) {
    if (bmiAna > bmiJuan) {
        return "Ana tiene el mayor BMI";
    } else if (bmiAna < bmiJuan) {
        return "Juan tiene el mayor BMI";
    } else {
        return "Ambos tienen el mismo BMI";
    }
}

let bmiAna = calcularBmi(pesoAna, alturaAna);
let bmiJuan = calcularBmi(pesoJuan, alturaJuan);
let mayorBMI = calcularMayorBMI(bmiAna, bmiJuan);

console.log(mayorBMI);

//camel-case
let palabraOtraPalabra = "Hola";

// snake-case
let palabra_otra_palabra = "Hola";



// Ejercicio 2 - Competicion

// Hay 2 equpos de gimnasia , los delfines  y los koalas , ellos compiten 3 veces
// Y el ganador con el puntaje mas alto se lleva el trofeo

// objetivos:

// 1 . Calcular el puntaje promedio de cada equipo
// 2 . Comparar los puntajes , para determinar el ganador o el empate
// * debo implemetar un puntaje minimo de 100 puntos de diferencia  para que el equipo que gane 
// * El empate ocurre cuando los dos equipos tienes igual o mas de 100 puntos , sino nadie se lleva el trofeo


// SOLUCION:

// Primero: Creamos un array con tres resultados de las 3 competiciones(puntajes) para cada equipo
let puntajeDelfines = [1000, 150, 90];
let puntajeKoalas = [10, 200, 130];




// Segundo: Calculamos el promedio de los puntajes
// Un parametro en una funcion es informacion que necetiamos para que la funcion funcione
// Mi funcion "calcularPuntaje" recibe un array de puntajes y devuelve el promedio
// es una variable que se llama sumaPuntajes acumulare los valores que se se vayan sumando en la ejecucion del for
//  en el for empiezo a recorrer mi array en el indice 0 (let i = 0), despues lo recorrere mienstras ese indice sea menor a la cantidad de elementos del array, y aumentare de uno en uno el indice para eventualmente salir del for(i++)
// al final la funcion devuelve la suma de los puntajes dividido entre la cantidad de elementos del array
// length me devuelve la cantidad de elementos que tiene un array
function calcularPuntaje(arrayDePuntajes) {
    let sumaDePuntajes = 0;
    for (let i = 0; i < arrayDePuntajes.length; i++) {
        sumaDePuntajes += arrayDePuntajes[i];
    }
    return sumaDePuntajes / arrayDePuntajes.length;
}



// Tercero: Calculamos el punataje del ganador
let puntajePromedioDelfines = calcularPuntaje(puntajeDelfines);
let puntajePromedioKoalas = calcularPuntaje(puntajeKoalas);



// en las siguientes lineas de codigo , comparamos los puntajes promedios de los dos equipos y si tienen una diferencia de 100 puntos o mas
let ganadorDelfines = puntajePromedioDelfines > puntajePromedioKoalas && (puntajePromedioDelfines - puntajePromedioKoalas >= 100)
let ganadorKoalas = puntajePromedioKoalas > puntajePromedioDelfines && (puntajePromedioKoalas - puntajePromedioDelfines >= 100)
let empate = puntajePromedioDelfines === puntajePromedioKoalas


// Cuarto: resultado final es una variable de tipo string(cadena de texto) que obtendra su valor del operador ternario(version resumida del if-else)
// evaluo si el ganaor son los los delfines , si es asi, devuelvo la cadena de /texto "Delfines", sino , evaluo si el ganador son los koalas, si es asi , devuelvo la cadena de texto "Koalas" , sino , devuelvo la cadena de texto "Empate"
let resultadoFinal = ganadorDelfines === true ? "Delfines" : ganadorKoalas === true ? "Koalas" : "Empate";



// Quinto: imprimir en consola el resultado final
// resultado final me devolvera un string , por lo que lo imprimo en consola
// mi funcion determinarGanador recibe un string y devuelve un string
// compara si el valor equivale a "Delfines" si es asi devuelve "Delfines", igual para koalas y empate
function determinarGanador(resultadoFinal) {
    if (resultadoFinal === "Delfines") {
        return "Delfines";
    } else if (resultadoFinal === "Koalas") {
        return "Koalas";
    } else if (resultadoFinal === "Empate") {
        return "Empate";
    }
    else {
        return "No hay ganador";
    }
}


// el el caso de la funcion determninarGanador2 recibe un string y devuelve un string
// En este funcion uso un switch 
// el cual evulua el valor de la variable resultado(que llega como resultadoFinal) y dependiendo de la respuesta devuelve un string (que puede ser Delfines, Koalas o Empate)
function determinarGanador2(resultado) {
    switch (resultado) {
        case "Delfines":
            return "Delfines";
            break;
        case "Koalas":
            return "Koalas";
            break;
        case "Empate":
            return "Empate";
            break;
        default:
            return "No hay ganador";
    }
}

// asiganr el valor final a determinarResultado , para imprimirlo en la consola
let determinarResultado = determinarGanador(resultadoFinal);

console.log(determinarResultado)

