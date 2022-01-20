

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


let puntajeDelfines = [1000, 150, 90];
let puntajeKoalas = [10, 200, 130];


// length me devuelve la cantidad de elementos que tiene un array
function calcularPuntaje(arrayDePuntajes) {
    let sumaDePuntajes = 0;
    for (let i = 0; i < arrayDePuntajes.length; i++) {
        sumaDePuntajes += arrayDePuntajes[i];
    }
    return sumaDePuntajes / arrayDePuntajes.length;
}

let puntajePromedioDelfines = calcularPuntaje(puntajeDelfines);
let puntajePromedioKoalas = calcularPuntaje(puntajeKoalas);


let ganadorDelfines = puntajePromedioDelfines > puntajePromedioKoalas && (puntajePromedioDelfines - puntajePromedioKoalas >= 100)

let ganadorKoalas = puntajePromedioKoalas > puntajePromedioDelfines && (puntajePromedioKoalas - puntajePromedioDelfines >= 100)

let empate = puntajePromedioDelfines === puntajePromedioKoalas




function determinarGanador(resultadoDelfines, resultadoKoalas, resultadoEmpate) {
    if (resultadoDelfines) {
        return "Delfines";
    } else if (resultadoKoalas) {
        return "Koalas";
    } else if (resultadoEmpate) {
        return "Empate";
    }
    else {
        return "No hay ganador";
    }
}

function determinarGanador2(resultadoDelfines, resultadoKoalas, resultadoEmpate) {

    switch (true) {
        case (resultadoDelfines):
            return "Delfines";
            break;
        case (resultadoKoalas):
            return "Koalas";
            break;
        case (resultadoEmpate):
            return "Empate";
            break;
        default:
            return "No hay ganador";
    }
}



let determinarResultado = determinarGanador(ganadorDelfines, ganadorKoalas, empate);

console.log(determinarResultado)

