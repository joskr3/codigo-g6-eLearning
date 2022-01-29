function sumarNumeros(numero1, numero2) {
    return numero1 + numero2;
}

let suma1 = sumarNumeros(2, 3);// imprimiria 5

let suma2 = sumarNumeros("2", "3");// imprimiria "23"


function saludar(nombre) {
    return "Hola " + nombre;
}

let saludo = saludar("Juan");// imprimiria "Hola Juan"


let arrayDeNotas = [13, 14, 11, 16, 15, 20];

// cuando conozco la cantidad de elementos que voy a recorrer
for (let indice = 0; indice < arrayDeNotas.length; indice++) {
    console.log(arrayDeNotas[indice]);
}

console.log("-----------------------------");
// cuando NO conozco la cantidad de elementos que voy a recorrer
let contador = 0;
while (contador < arrayDeNotas.length) {
    console.log(arrayDeNotas[contador]);
    contador++;
}


let numero = 0;
let esPar = false;

let division = 8 / 3; // mi residuo es 2

let residuo = 8 % 3; // mi residuo es 2

while (esPar == false) {
    if (numero % 2 == 0) {
        esPar = true;
        break;
    }
    numero++;
}



// EJERCIO 1

// VAMOS A HACER UNA FUNCION QUE ME RETORNE SI EL NUMERO QUE LE ESTOY PASANDO COMO PARAMETRO ES PAR O IMPAR 

function esParOImpar(numero) {
    if (numero % 2 == 0) {
        return "El numero " + numero + " es par";
    } else {
        return "El numero " + numero + " es impar";
    }
}

let esPar1 = esParOImpar(2);
let esImpar = esParOImpar(3);

console.log(esPar1, esImpar)



// Ejercicio 2

// Si listamos todos los numeros naturales menores a 10 que son multiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos multiplos es 23.

// Encuentra la suma de los multiplos de 3 o 5 que esten entre 1 y 1000.


function sumarMultiplos(primerFactor, segundoFactor, numero) {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
        if (i % primerFactor == 0 || i % segundoFactor == 0) {
            suma += i;
        }
    }
    return suma;
}

// let sumaMultiplos = sumarMultiplos(7, 8, 1000000000);

// console.log(sumaMultiplos);




// function findOdd(A) {

//     return 0;
// }

// function encontrarElConteoDeUnNumeroEnElArray(arrayDeNumeros) {
//     let conteoPar = 0;
//     let conteoImpar = 0;
//     let conteo = 0;
//     let numeroPar = 0;
//     let numeroImpar = 0;

//     for (let indice = 0; indice < arrayDeNumeros.length; indice++) {

//     }
//     return
// }

// let arrayDeNumeros = [1, 1, 1, 1, 0]

// let encontrarConteo = encontrarElConteoDeUnNumeroEnElArray(arrayDeNumeros);

// console.log(encontrarConteo);



// let cantidad = 0
// let impar = 0
// let numero2 = 0

// function conteoImpar(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let n = 0; n < array.length; n++) {
//             if (array[i] = array[n]) {
//                 numero2 = array[n];
//                 cantidad++;
//             }
//             if (cantidad % 2 != 0) {
//                 impar = array[i];
//             }
//         }
//     }
//     return {impar,numero2}
// }

// console.log(conteoImpar([1, 1, 1, 3, 3, 2, 2]))
// console.log(numero2)




//MAP



let arrayDeObjetos = [
    {
        nombre: "Juan",
        edad: 20,
        sexo: "Masculino",
        id: 1
    },
    {
        nombre: "Maria",
        edad: 18,
        sexo: "Femenino",
        id: 2
    },
    {
        nombre: "Pedro",
        edad: 15,
        sexo: "Masculino",
        id: 3
    }
];


for (let i = 0; i < arrayDeObjetos.length; i++) {
    let nombre = arrayDeObjetos[i].nombre;
    console.log(nombre);
}

console.log("-----------------------------");

arrayDeObjetos.forEach(function (objeto) {
    let nombre = objeto.nombre
    console.log(nombre);
});

console.log("-----------------------------");
arrayDeObjetos.forEach(objeto => {
    let nombre = objeto.nombre
    console.log(nombre);
})


console.log("-----------------------------");

//let nombres = arrayDeObjetos.map(objeto => objeto.nombre);

arrayDeObjetos.map(objeto => {
    let nombre = objeto.nombre;
    console.log(nombre);
})


console.log("-----------------------------");


let juan1 = arrayDeObjetos.filter(objeto => objeto.nombre == "Juan");

let juan2 = arrayDeObjetos.find(objeto => objeto.nombre == "Juan");


arrayDeObjetos.push({
    nombre: "Jose",
    edad: 21,
    sexo: "Masculino",
})

console.log(arrayDeObjetos);

let ultimoElemento = arrayDeObjetos.pop();
console.log(ultimoElemento);






// Ejercio 4



// dado un array de obejetos que representan a los alumnos de una clase

// vamos a filtrar solo a los alumnos que tengan notas mayores o iguales  a 15 

// y vamos imprimir el promedio , de los tres mejores alumnos

// debo imprimir el nombre del alumno,su edad , su nota(promedio) y el ranking (ej.primer puesto)

// ej . Juan tiene 20 años y su promedio es de 15 y es el primer puesto


let arrayDeAlumnos = [
    {
        nombre: "Juan",
        edad: 20,
        sexo: "Masculino",
        notas: [10, 20, 10, 20, 15]
    },
    {
        nombre: "Rosa",
        edad: 30,
        sexo: "Femenino",
        notas: [15, 17, 18, 20, 13]
    }
    ,
    {
        nombre: "Pedro",
        edad: 27,
        sexo: "Masculino",
        notas: [13, 12, 11, 20, 10]
    }
    ,

    {
        nombre: "Cristina",
        edad: 22,
        sexo: "Femenino",
        notas: [13, 13, 13, 13, 13]
    },

    {
        nombre: "Roberto",
        edad: 21,
        sexo: "Masculino",
        notas: [17, 17, 18, 17, 19]
    }
]



















