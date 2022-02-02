const PA = [20 , 25 , 28]
const cargoTarjeta = 0.05

// Obtiene los datos del usuario
let tipoBurger = window.prompt("¿Qué hamburguesa deseas? (1) Sencilla, (2) Doble, o (3) Triple")
let cantidad = window.prompt("Cantidad")
let tipoPago = window.prompt("¿Pagas con tarjeta?: SI/NO")

// Despues de llamar a determinarPago() y pagoTotal() imprime el total neto a pagar.
console.log(pagoTotal(tipoPago))


// Funcion que recibe Tipo y Numero de hamburguesas y retorna Total sin cargo
function determinarPago(tipoBurger, cantidad) {
    let totalSinCargo = 0
    //
    switch (tipoBurger) {
        case "1":
            return totalSinCargo = PA[0] * cantidad
        case "2":
            return totalSinCargo = PA[1] * cantidad
        case "3":
            return totalSinCargo = PA[2] * cantidad
    }
}

// Funcion que recibe Tipo de pago y retorna el Pago total
function pagoTotal(tipoPago) {
    let totalSinCargo = determinarPago(tipoBurger, cantidad)
    let totalConCargo = 0
    //
    if ((tipoPago === "SI") || (tipoPago === "Si")) {
        totalConCargo = totalSinCargo + (totalSinCargo * cargoTarjeta);
        return "El total es $ " + totalConCargo
    } else {
        return "El total es $ " + totalSinCargo
    }
}






