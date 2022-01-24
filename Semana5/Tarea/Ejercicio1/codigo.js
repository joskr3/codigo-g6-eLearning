/**
 * Ejercicio 1
 * 
 * Given a array of integers, find the one that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */

const getQuantityOfElement = (array) => {
    // Array Contador
    let arrayContador = [];
    // Indice de arrayContador
    let j = 0;
    // Contador
    let cuenta = 0;

    array.sort((a,b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i+1]) {
            cuenta ++;
        }
        else {
            cuenta ++;
            arrayContador[j] = {repeticion: cuenta, numero: array[i]};
            cuenta = 0;
            j++;
        }
    }
    // console.log(arrayContador)
    return arrayContador
}

const getMinorOdd = (objeto) => {
    const arrayRepeticion = objeto.map(x => 
        x.repeticion
    )
    
    // console.log(arrayRepeticion)
    
    let indice = 0;
    let menor = 0;
    
    for (let i = 0; i < arrayRepeticion.length; i++) {
        if ((arrayRepeticion[i] % 2) == 1) {
            if (menor == 0) {
                menor = arrayRepeticion[i];
                indice = i
            } else {
                if (arrayRepeticion[i] < menor) {
                    menor = arrayRepeticion[i];
                    indice = i;
                }
            }
        }
    }
    // console.log(objetoContador[indice].numero)
    return objetoContador[indice].numero
}


let A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

let objetoContador = getQuantityOfElement(A);
let numberMinorOdd = getMinorOdd(objetoContador);
console.log(numberMinorOdd)
