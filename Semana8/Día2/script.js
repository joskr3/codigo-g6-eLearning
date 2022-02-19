//ejemplo: obtener el numero mayor de un array

function obtenerNumeroMayor(...numeros){
    let numeroMayor=0;
    for(let i=0; i<numeros.length;i++){
        if(numeros[i]>numeroMayor)
        {
            numeroMayor=numeros[i];
        }        
    }
    return numeroMayor
}
console.log(obtenerNumeroMayor());

console.log(obtenerNumeroMayor(-5,-1,-9));