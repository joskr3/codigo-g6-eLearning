//Ejercicio 1
//Angel Montesinos
let peso1=0;
let estatura1=0;
ibm1=0;
let peso2=0;
let estatura2=0;
ibm2=0;
console.log()
peso1=prompt("Ingresar Peso de Ana: ")
estatura1=prompt("Ingresar Estatura de Ana: ")
peso2=prompt("Ingresar Peso de Pedro: ")
estatura2=prompt("Ingresar Estatura de Pedro: ")
ibm1=(peso1)/(estatura1*estatura1)
ibm2=(peso2)/(estatura2*estatura2)
if(ibm1>ibm2)
    console.log("El indice de masa muscular de Ana: ", ibm1)
else
    if(ibm1<ibm2)
        console.log("El indice de masa muscular Pedro: ", ibm2)
    else
    console.log("El indice de masa muscular son iguales: ", ibm1)
