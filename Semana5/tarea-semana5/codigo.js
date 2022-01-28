let L = 70.5; // produccion de leche en litros
const PG = 7.5; // precio por galón
const unGalon = 3.785;// Un galon equivale a 3.785 litros

//Función convierte litros a galones
function litrosAGalones(litros){
    let enGalones = litros / unGalon;
    return enGalones;
}

let galones = litrosAGalones (L);
//console.log(galones)

//Funcion Ganancia por la venta de Leche
function ventaLeche(litrosLeche){
    let G = litrosAGalones(litrosLeche) * PG;
    return G;    
}
let ganancia = ventaLeche (L);

console.log(`Se obtuvo una ganancia de:${ganancia} soles, por la venta de: ${galones} galones de leche, a un precio de: ${PG} soles por galón`);

