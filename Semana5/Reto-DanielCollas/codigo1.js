//Reto opción 2

const TI=[ 
    Sencillas = 20,
    Dobles = 25,
    Triples = 28 
]
let N= 5;
function TO(Tarjeta, N, TI){
    if(Tarjeta="no")
    {
    return "El precio sin cargos es de " + (N*TI) }
}
function TOT(Tarjeta, N, TI){
    if(Tarjeta="si")
    {
        return "El precio con cargos es de " + (0.05*(N*TI) + (N*TI))
    }

}
 console.log(TOT("si", 2, Sencillas))


