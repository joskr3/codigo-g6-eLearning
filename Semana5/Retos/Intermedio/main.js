
let Hamburguesa = [
    {
        type:"sencilla",
        price: 20.0
    },
    {
        type:"doble",
        price: 25.0
    },
    {
        type:"triple",
        price: 28.0
    }
]

let TI = prompt("Ingrese tipo de Hamburguesa:")                      //? Tipo hamburguesa
let N  = prompt("Ingrese cantidad de Hamburguesas:")                 //? Cantidade  hamburguesas
let TP = prompt("Ingrese tipo de pago:")                             //? Tipo de pago
let PA = [20.0, 25.0, 28.0]                                          //? Precios de los tipos de Hamburguesas
let CA = (valor) => (TP === "tarjeta" ? 0.05 * valor : 0.0 )         // ? Cargo por el uso de tarjeta

let TO = Hamburguesa.find((item) => item.type === TI ? item : 0 ).price * N  // ? Total sin cargo
let TOT = TO + CA(TO)                                                // ? Total con cargo

console.log(`Total sin cargo: ${TO}`)
console.log(`Total con cargo: ${TOT}`)

