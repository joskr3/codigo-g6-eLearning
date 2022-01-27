// function verificandonumero(numero){
//     if(numero % 2 == 0){
//         return "Es par"
//     }else{
//         return "Es Impar"
//     }
// }

// let numero=4

// console.log(verificandonumero(numero))

// function esmultiplo(numero1,numero2){
//     suma=0
//     for(i=1;i<=100;i++){
//         calculandomuln1=Math.round((i/numero1))*numero1
//         calculandomuln2=Math.round((i/numero2))*numero2
//         if(calculandomuln1==i || calculandomuln2==i){
//             suma = suma + i
//         }
//     }
//     console.log(suma)
// }
// esmultiplo(3,5)


// let arrayDeAlumnos = [
//     { nombre: "Juan", edad:20 , nota: [10,20,10,20,15]},
//     { nombre: "Rosa", edad:30 , nota: [15,17,18,20,13]},
//     { nombre: "Pedro", edad:20 , nota: [13,12,11,20,10]},
//     { nombre: "Cristina", edad:22 , nota: [13,13,13,13,13]},
//     { nombre: "Roberto", edad:21 , nota: [17,17,18,17,19]}
//   ];
  
//   let suma=0

//     for(i=0;i<arrayDeAlumnos.length;i++){
//         const filtered = array.filter(function(element){
//             return element.id > 2;
//           });
//     }
//     console.log(arrayDeAlumnos.length)
  

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

// Creando nuestra funcion para obtener el ranking de puestos
function rankingdepuestos(almuno) {
// Creando Variables
let suma = 0
let promedio = 0
// Creando Arrays
let promedionotas = []
let promedionotasinordenar = []
// For para recorrer los objetos
for(l=0;l<almuno.length;l++){
  // Usando el metodo foreach para recorrer el array de notas y comparar que sean mayores o igual a 15 
    almuno[l].notas.forEach(function(notas) {
    // Creando condicion - si alguna de las notas es mayor a 15 se suman las notas y se saca el promedio
    if(notas >= 15){
      // obteniendo las notas por alumno y sumandolos
      almuno[l].notas.forEach(function(notasxalumno) {
        suma += notasxalumno 
      })
        // Guardand las notas sin ordenar en un array que luego seran ordenados
        promedionotasinordenar[l] = suma / almuno[l].notas.length
        // Guardand las notas sin ordenar en un array
        promedionotas[l] = suma / almuno[l].notas.length
        // Reiniciado contadores para el siguiente alumno
        suma=0
        promedio=0
    }
  })
}
// Usando sort y una funcion para ordenar los promedios y guardalo en una variable
let promediosordenados = promedionotasinordenar.sort(function(a, b){return b - a})
// For para recorrer cada promedio y comparar con las notas altas obtenidas
for(i=0;i<almuno.length;i++){
  if(promediosordenados[0]===promedionotas[i]){
    console.log(almuno[i].nombre + " tiene " + almuno[i].edad + " años y su promedio es de " + promedionotas[i] + " y es el Primer Puesto.")
  }else if(promediosordenados[1]===promedionotas[i]){
    console.log(almuno[i].nombre + " tiene " + almuno[i].edad + " años y su promedio es de " + promedionotas[i] + " y es el Segundo Puesto.")
  }else if(promediosordenados[2]===promedionotas[i]){
    console.log(almuno[i].nombre + " tiene " + almuno[i].edad + " años y su promedio es de " + promedionotas[i] + " y es el Tercer Puesto.")
  }
}
}
// Llamando a nuestra funcion 
rankingdepuestos(arrayDeAlumnos)