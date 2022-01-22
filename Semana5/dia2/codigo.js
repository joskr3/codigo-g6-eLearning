//Angel Montesinos
function parOImpar(numero)
{
    if(numero%2==0)
        return "par";
    else
        return "impar"
}

let valor=10
let resultado=parOImpar(valor)
console.log("El numero ", valor, " es: ", resultado)



function sumaMultiplos35()
{
    let numero=1;
    let suma=0
    while(numero<=1000)
    {
        if(numero%3==0)
           suma=suma+numero
        if(numero%5==0 && numero %3!=0)
            suma=suma+numero
        numero++
    }
    return suma
}

let respuesta=sumaMultiplos35()
console.log("La sumatoria es: ", respuesta)

let fibo1=1
let fibo2=2

function paresFibonacci()
{
    let fibo=0
    //for(){

    //}
}
//Angel Montesinos
/////////////////////////////////////////////////////////
//          EJERCICIO4///////
/////////////////////////////////////////////////////////

// dado un array de objetos que representan a los alumnos de una clase

// vamos a filtrar solo a los alumnos que tengan notas mayores o iguales  a 15 

// y vamos imprimir el promedio, de los tres mejores alumnos

// debo imprimir el nombre del alumno, su edad , su nota(promedio) y el ranking (ej.primer puesto)

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
let listaPromedio=arrayDeAlumnos.map(element=> {
        let promedio=0
        for(i=0;i<5;i++)
            promedio=promedio+element.notas[i]
        promedio=(promedio/5)
        return [element.nombre,element.edad,promedio];
    })
    console.log(listaPromedio)
    let lista=listaPromedio.sort((alumno1,alumno2)=>{return alumno2.promedio-alumno1.promedio})
    console.log(lista)

    console.log(lista[0].nombre," tiene ", lista[0].edad, " años y su promedio es de ",lista[0].promedio," y es el primer puesto")
    console.log(lista[1].nombre," tiene ", lista[1].edad, " años y su promedio es de ",lista[1].promedio," y es el segundo puesto")
    console.log(lista[2].nombre," tiene ", lista[2].edad, " años y su promedio es de ",lista[2].promedio," y es el tercer puesto")
 
  
 function mayorA15(elemento){
      for(i=0;i<5;i++)
        if(elemento.notas[i]>=15)
            return elemento;
  }
  let listaMayor15=arrayDeAlumnos.filter(mayorA15)
  console.log("Alumnos con nostas mayores o iguales a 15: ")
  for (j=0;j<listaMayor15.length;j++)
      console.log("Alumno ", j+1,": ",listaMayor15[j].nombre)