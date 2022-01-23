/*
    ! Ejercicio Basico:

    * Un productor de leche lleva el registro de lo que produce en litros, pero cuando entrega le pagan en galones. Realice un algoritmo, y represéntelo en JS, que ayude al productor a saber cuánto recibirá por la entrega de su producción de un día (1 galón = 3.785 litros).

    * Si se analiza el problema se puede establecer que los datos que se necesitan para resolver el problema son los que se muestran en la tabla
*/

let L =  prompt("Ingrese cantidad de litros producidos:")     // ? Cantidad e litros producidos
let PG = prompt("Ingrese precio del galon:")                  // ? Precio del galon
let TG = (litros) => (litros/3.785)                           // ? Cantidad de galones en produccion
let GA = TG(L)*PG                                             // ? Ganancia por la entrega de leche

console.log(`Cantidad de litros producidos: ${L}`)
console.log(`Precio del galon: ${PG}`)
console.log(`Cantidad de galones en produccion: ${TG(L)}`)
console.log(`Ganancia por la entrega: ${GA}`)

