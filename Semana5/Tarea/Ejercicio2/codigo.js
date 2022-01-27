/**
 * Ejercicio 2
 * 
 */

// Dado un array de obejetos que representan a los alumnos de una clase

// vamos a filtrar solo a los alumnos que tengan notas mayores o iguales  a 15 

// y vamos imprimir el promedio, de los tres mejores alumnos

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
        notas: [15, 17, 18, 20, 13]
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

console.log(arrayDeAlumnos[4].notas)

let B= Array(arrayDeAlumnos.length)
console.log(B)

for (let i = 0; i < arrayDeAlumnos.length; i++) {
    let A = arrayDeAlumnos[i].notas;
    B[i] = [0,0,0];
    for (let j = 0; j < A.length; j++) {
        if (A[j] >= 15) {
            if (B[i][0] <= B[i][1]) {
                if (B[i][0] <= B[i][2]) {
                    B[i][0] = A[j];
                } else {
                    B[i][2] = A[j];
                }
            } else {
                if (B[i][1] <= B[i][2]) {
                    B[i][1] = A[j];
                } else {
                    B[i][2] = A[j];
                }
            }
        }
    }
}
console.log("Notas",B)

let arrayPromedioNotas = Array(B.length)

for (let i = 0; i < arrayPromedioNotas.length; i++) {
    let notaPromedio = 0;
    for (let j = 0; j < B[i].length; j++) {
        notaPromedio = notaPromedio + B[i][j];
    }
    notaPromedio = notaPromedio/(B[i].length);
    arrayPromedioNotas[i] = notaPromedio;
}

console.log("Array promedio de notas",arrayPromedioNotas)

let C = arrayPromedioNotas.map(x => x)

let puesto = 0;

for (let i = 0; i < arrayPromedioNotas.length; i++) {
    // console.log( Math.max(...C))
    if (arrayPromedioNotas[i] == Math.max(...C)) {
        puesto++;
        // console.log("puesto:", puesto)
        console.log(`${arrayDeAlumnos[i].nombre} tiene ${arrayDeAlumnos[i].edad} y su promedio es de ${arrayPromedioNotas[i]} y es el puesto ${puesto}`);

        C[i] = 0;
        // console.log(i,C)
        i=0;
        // console.log("______________________")
    }
    if (puesto == 3) {break}
}

