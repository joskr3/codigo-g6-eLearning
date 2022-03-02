/*
Un productor de leche lleva el registro de lo que produce en litros, 
pero cuando entrega le pagan en galones. Realice un algoritmo, y represéntelo en JS, 
que ayude al productor a saber cuánto recibirá por la entrega de su producción de 
un día (1 galón= 3.785 litros).
L= Cantidad de litros que produce
PG= Preciol galon
TG= cantidad de galones que produce
GA= Ganancia por la entrega de leche
*/

let L =  prompt("Cantidad de litros producidos: ")     
let PG = prompt("Precio del galon: ")                  
let TG = (litros) => (litros/3.785)                           
let GA = TG(L)*PG                                             

console.log(`Ganancia del dia: ${GA}`)