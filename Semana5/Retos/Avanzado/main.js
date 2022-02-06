
/*
    ! Algoritmo del Dr. lorenzo T. Mata Lozano

*/

let NC = prompt("Ingrese el numero de cita que tendra el paciente")    // ? Numero de consuilta

let matrix_price = [200,200,200,150,150,100,100,100,50]

// ? Costo de la cita
let CC = (nro_cite) => ( matrix_price[nro_cite-1] ? matrix_price[nro_cite-1] : matrix_price[matrix_price.length-1] )

// ? Costo del tratamiento
let TOT  = (nro_cite) => {
    let sum = 0;
    for(let i = 1; i < nro_cite ; i++){ // ! El costo del tratamiento considera la cita actual
        sum += CC(i);
    }
    return sum;
}

console.log(`El Costo de la cita es: $ ${CC(NC)}`)
 // ! El costo del tratamiento considera la cita actual
console.log(`El Costo del tratamiento es: $ ${TOT(NC)}`) 

