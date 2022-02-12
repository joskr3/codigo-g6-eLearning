
function saludarAmigos(salude, ...lista){
    if(salude ==true)
        for(i = 0; i < lista.length;i++)
            console.log("Saludos 0${lista[i]}!" )
    else
        for(i = 0; i < lista.length;i++)
            console.log("Nuevamente gracias por venir 0${lista[i]}!" )
}

let x=palindrome(1,2,3,3,2,1)

function palindrome(...numero){
    for(i =0, j=numero.length; i<(numero.length/2);i++,j--)
        if(numero[i]!=numero[j]&&j!=i)
           return false
    return true
}
if (x)
    console.log("El numero es palindrome")
else
    console.log("El numero no es palindrome")