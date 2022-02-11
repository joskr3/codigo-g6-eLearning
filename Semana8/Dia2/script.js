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

// misAmigos2("Juan", "Pedro");
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

saludarAmisAmigos(listaDeAmigos1, 'Beto', 'Juan','Maria')



// Math.max(1,5,1,67,8,45)

let arrayDeNumeros = [2,5,3,6,4,5]

Math.max(...arrayDeNumeros)




function sumar(x,y,z){
    return x + y +  z
}

let suma = sumar(2,3,4)

console.log(suma)


let arrayDeNumeros1 = [2,3,4]

let suma2 = sumar(arrayDeNumeros1)

console.log(suma2,"suma2")

let suma3 = sumar(...arrayDeNumeros1)

console.log(suma3)



function sumar2(...elementosAsumar){
    
    let resultado = 0;

    for (numero of elementosAsumar){
        resultado += numero
    }
    return resultado
}


let suma4 = sumar2(...arrayDeNumeros1)

console.log(suma4,"suma4")