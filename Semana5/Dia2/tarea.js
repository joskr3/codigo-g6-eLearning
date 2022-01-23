function parImpar(numero) {
  if (numero % 2 == 0) {
    return "es par";
  } else {
    return "es impar";
  }
}

//console.log(parImpar(4));

//console.log("******");

let sumatoria = 0;

function multiplo(a, b, hasta) {
  sumatoria = 0;
  for (let i = 1; i <= hasta; i++) {
    if (i % a == 0 || i % b == 0) {
      sumatoria = sumatoria + i;
    }
  }
  return sumatoria;
}

//console.log(multiplo(3,5,1000))

let cantidad = 0;
let impar = 0;
function conteoImpar(array) {
  for (let i = 0; i < array.length; i++) {
    cantidad = 0;
    for (let n = 0; n < array.length; n++) {
      if (array[i] == array[n]) {
        cantidad++;
      }
    }
    if (cantidad % 2 != 0) {
      impar = array[i];
    }
  }
  return impar;
}

//console.log(conteoImpar([1,1,1,2,2,3,3]))

let arrayDeAlumnos = [
  {
    nombre: "Juan",
    edad: 20,
    sexo: "Masculino",
    notas: [10, 20, 10, 20, 15],
  },
  {
    nombre: "Rosa",
    edad: 30,
    sexo: "Femenino",
    notas: [15, 17, 18, 20, 13],
  },
  {
    nombre: "Pedro",
    edad: 27,
    sexo: "Masculino",
    notas: [13, 12, 11, 21, 10],
  },
  {
    nombre: "Cristina",
    edad: 22,
    sexo: "Femenino",
    notas: [13, 13, 13, 13, 13],
  },
  {
    nombre: "Roberto",
    edad: 21,
    sexo: "Masculino",
    notas: [17, 17, 18, 17, 19],
  },
];

arrayDeAlumnos.forEach(function (objeto) {
  let arrayNotas = objeto.notas;
  let promedio=0
  let sumPromedio=0

  console.log(mayorANota(arrayNotas, 15, objeto.nombre));
  // console.log(arrayNotas);
  // for(let i=0;i<arrayNotas.length;i++){
  //   if(arrayNotas[i]>=15){
  //     sumPromedio = sumPromedio + arrayNotas[i];
  //   }
  // }
  // promedio = sumPromedio / arrayNotas.length;

  // console.log(objeto.nombre + ' - ' + promedio);

});

function mayorANota(array, nota, nombre) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= nota) {
      return nombre;
    }
  }
}

function promedio(array){
  let suma=0
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }

}