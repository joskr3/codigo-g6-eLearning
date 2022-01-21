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


let arrayDeAlumnos = [
    { nombre: "Juan", edad:20 , nota: [10,20,10,20,15]},
    { nombre: "Rosa", edad:30 , nota: [15,17,18,20,13]},
    { nombre: "Pedro", edad:20 , nota: [13,12,11,20,10]},
    { nombre: "Cristina", edad:22 , nota: [13,13,13,13,13]},
    { nombre: "Roberto", edad:21 , nota: [17,17,18,17,19]}
  ];
  
  let suma=0

    for(i=0;i<arrayDeAlumnos.length;i++){
        const filtered = array.filter(function(element){
            return element.id > 2;
          });
    }
    console.log(arrayDeAlumnos.length)
  