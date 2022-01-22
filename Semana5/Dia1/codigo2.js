let arrayNotas = [13,14,16,18,20];

//for (let index = 0; index < arrayNotas.length; index++) {
  //  console.log(arrayNotas[indice]);
    
//}

let contador = 0;
while (contador < arrayNotas.length) {
    console.log(arrayNotas[contador]);
    contador++;
}

//let division = 8/3;
//let residuo = 8%3;

//while (esPar==false) {
    //if (numero % 2 == 0) {
 //       esPar = true;
  //      break;
  //  }
  //  numero++;
//}



function esParoImpar(numero){
    if (numero%2==0) {
        console.log("el numero es Par")
    } else {
        console.log("el numero es Impar")
    }
    
}

let n1 = esParoImpar(9);

//EJERCICIO2

function sumarMultiplos(numero1, numero2, maximo) {
acum = 0; 

for (let i = 1; i <= maximo; i++) {
    if (i%numero1 ==0 || i%numero2==0) {
        console.log(i);
        acum = acum + i;
    }  
}
   console.log("la suma de los numeros es "+acum);
   return acum;

}
let Resultado = sumarMultiplos(3,5,1000);

console.log("El resultado final es "+Resultado);

