"use-strict";


// operador rest (...)


// function rest(...args) {
//     console.log(args);
// }

function misAmigos(primerAmigo, segundoAmigo) {
    let saludo = "Hola"

    console.log(`${saludo} ${primerAmigo} y ${segundoAmigo}`);
}


// function misAmigos2(...arrayDeTodosMisAmigos) {

//     arrayDeTodosMisAmigos.forEach(function (amigo) {
//         console.log(`Hola ${amigo}`);
//     });

// }

// misAmigos2("Juan", "Pedro");bgl
// misAmigos2("Juan", "Pedro", "Maria", "Jorge");
// misAmigos2("Juan", "Pedro", "Maria", "Jorge", "Jose");
// misAmigos2("Juan", "Pedro", "Maria", "Jorge", "Jose", "Luis");





// Vamos a obtener el numero mayor de un serie de numeros


function obtenerNumeroMayor(...numeros) {
    let numeroMayor = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > numeroMayor) {
            numeroMayor = numeros[i]
        }
    }
    return numeroMayor
    // for (let valor of numeros) {
    //     console.log(valor);
    //   }
}

console.log(obtenerNumeroMayor())


console.log(obtenerNumeroMayor(0, 23, 45, 1, 3))


console.log(obtenerNumeroMayor(-5, -2, -3), "Last call")




// vamos a hacer una funcion que salude a nuestros amigos(lista) y si ya salude a unos amigos , le pondre en mensaje en la consola que diga , "Nuevamente , gracias por venir"


function saludarAmisAmigos(listaDeAmigos, ...listaDeAmigosDuplicada) {

    for (let i = 0; i < listaDeAmigos.length; i++) {
        for (let j = 0; j < listaDeAmigosDuplicada.length; j++) {
            if (listaDeAmigos[i] === listaDeAmigosDuplicada[j]) {
                //console.log(listaDeAmigos[i])
                console.log(` Hola ${listaDeAmigos[i]} ,NUEVAMENTE, bienvenida/o a mi fiesta`)
            }
        }
        console.log(` Hola ${listaDeAmigos[i]} , bienvenida/o a mi fiesta`)
    }
}

const listaDeAmigos1 = ['Beto', 'Maria', 'Juan', 'Raul']


//saludarAmisAmigos(listaDeAmigos1, 'Beto', 'Juan')

saludarAmisAmigos(listaDeAmigos1, 'Beto', 'Juan', 'Maria')



// Math.max(1,5,1,67,8,45)

let arrayDeNumeros = [2, 5, 3, 6, 4, 5]

Math.max(...arrayDeNumeros)




function sumar(x, y, z) {
    return x + y + z
}

let suma = sumar(2, 3, 4)

console.log(suma)


let arrayDeNumeros1 = [2, 3, 4]

let suma2 = sumar(arrayDeNumeros1)

console.log(suma2, "suma2")

let suma3 = sumar(...arrayDeNumeros1)

console.log(suma3)



function sumar2(...elementosAsumar) {

    let resultado = 0;

    for (numero of elementosAsumar) {
        resultado += numero
    }
    return resultado
}


let suma4 = sumar2(...arrayDeNumeros1)

console.log(suma4, "suma4")


// EJERCICIO 2 . A HACER UNA FUNCION QUE RECIBA EN SU ARGUMENTOS (...ARGS >> REST OPERATOR ) Y VA A RECIBIR UNA SERIE DE NUMEROS COMO PARAMETROS , NUESTRO OBJETIVO ES VER SI ESA SERIE DE NUMEROS ->>> ES EN REALIADAD UN NUMERO PALINDROMO 


// ej . esPalindromo(1,2,3,3,2,1) ---> true


// ej . esPalindromo(1,2,3,1,1,1) ----> false 

// les recomiendo que se apoyen en la funcion reversed de javascript 


// function removerElementoDeUnArray(array, valor) {

//     return array.filter(e => e !== valor);
// }

// const  removerElementoDeUnArray = (array, valor) => {
//     return array.filter(e => e !== valor);
// }

// const removerElemento = (array, valor) => array.filter(e => e !== valor);


// function esPalindromo(...numeros) {


//     let numeroRevertido = numeros.slice().reverse();
//     let esInvertido = false

// }


// function numerosArray(...numeros) {

//     let array1 = numeros
//     console.log("array normal: " + array1)
//     let array2 = numeros.slice().reverse();
//     console.log("array invertido: " + array2)
//     if (array1 === array2) {
//         console.log("Es un numero palindromo")
//     } else {
//         console.log("No es un numero palindromo")
//     }


// }

// console.log("#####################################")

// console.log("Palidromo:")
// numerosArray(1,2,3,2,1)
// console.log("#####################################")

// console.log("No Palidromo:")
// numerosArray(1,2,3,2,5)

// console.log("#####################################")





// let array = [1, 2, 5, 2, 1];

// let array21 = [1, 3, 5, 2, 2];


// // console.log(array,array)
// const esPalindromo = () => {
//     let array2 = array.slice().reverse();
//     console.log(array,array2)
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === array2[i]) {
//         } else {
//             return false
//         }
//     }
//     return true
// }

// console.log(esPalindromo(array))

// console.log(esPalindromo(array21),"array2")

// 1,2,3,4,5

// 5,4,3,2,1

// false


// 1,2,3,2,1
// 1,2,3,2,1

// true


// let comparacion = esPalindromo(1,1,1,1)
// console.log(comparacion,"1era comparacion")

// let comparacion2 = esPalindromo(1,2,3,4)
// console.log(comparacion2,"2da comparacion")







// function espalindromo(arrayNumeros){
//     let lengtharray= arrayNumeros.length / 2
//     let primerosnumeros = arrayNumeros.slice(0,lengtharray)
//     let segundosnumeros = arrayNumeros.slice(lengtharray,arrayNumeros.length)
//     let conteo = 0
//     for (let i = 0; i < primerosnumeros.length; i++) {
//         for (let j = 0; j < segundosnumeros.length; j++) {
//             if (primerosnumeros[i] === segundosnumeros[j]) {
//                 conteo++;
//             }else{
//             }
//         }
//     }
//     if(conteo==lengtharray){
//         console.log("El numero es palindromo")
//     }else{
//         console.log("El numero no es palindromo")
//     }
// }
// const numerosarray = [1,2,3,3,4,4,3,2,1,9]
// espalindromo(numerosarray)



// function verPalindromo(...args) {
//     let pali = 0;
//     for (let i = 0; i < args.length; i++) {
//         for (let k = args.length - 1; k >= 0; k--) {
//             if (args[i] === args[k]) {
//                 console.log(args[i] + "" + args[k])
//                 pali = 1;
//                 break;
//             }
//             else { pali = 0; }
//         }
//         if (pali == 0) {
//             break;
//         }

//     }
//     return pali;
// }

// let saber = verPalindromo(1, 2, 3, 3, 2, 8)
// console.log(saber);
// if (saber) {
//     console.log("es palindormo")
// }
// else { console.log("no es palindromo") }



// function espalindromo(arrayNumeros) {
//     let lengtharray = arrayNumeros.length / 2
//     let primerosnumeros = arrayNumeros.slice(0, lengtharray)
//     let segundosnumeros = arrayNumeros.slice(lengtharray, arrayNumeros.length)
//     let conteo = 0
//     for (let i = 0; i < primerosnumeros.length; i++) {
//         for (let j = 0; j < segundosnumeros.length; j++) {
//             if (primerosnumeros[i] === segundosnumeros[j]) {
//                 conteo++;
//             } else {
//             }
//         }
//     }
//     if (conteo == lengtharray) {
//         console.log("El numero es palindromo")
//     } else {
//         console.log("El numero no es palindromo")
//     }
// }
// const numerosarray = [1, 2, 3, 4, 7, 3, 2, 1]
// espalindromo(numerosarray)



// function esPalindromo(...args){
//     let condicion = true;
//     for(let i= 0; i < args.length ; i++){
//         if (args[i] !== args[args.length-1-i]){
//             condicion = false;
//             break;
//         }
//     }
//     return condicion;
// }

// console.log(esPalindromo(1,2,3,3,2,"a"))