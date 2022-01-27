let PAsencillo = 20;
let PAdoble = 25;
let PAtriple = 28;
let cargoTarjeta = 0.05;

//Funcion que recibe Tipo y Numero de hamburguesas y retorna Total sin cargo
function determinarPago(tipoBurger, cantidad) {
    let totalSinCargo = 0;
    //
    switch (tipoBurger) {
        case "Sencilla":
            return totalSinCargo = PAsencillo * cantidad;
        case "Doble":
            return totalSinCargo = PAdoble * cantidad;
        case "Triple":
            return totalSinCargo = PAtriple * cantidad;
    }
}

//Funcion que recibe Tipo de pago y retorna el PAgo total
function pagoTotal(tipoPago) {
    let totalSinCargo = determinarPago("Triple", 2);
    let totalConCargo = 0;
    //
    if (tipoPago === "Tarjeta") {
        totalConCargo = totalSinCargo + (totalSinCargo * cargoTarjeta);
        return "El total a pagar es de $ " + totalConCargo;
    } else {
        return "El total a pagar es de $ " + totalSinCargo;
    }
}

//console.log(pagoTotal("Tarjeta"));
console.log(pagoTotal("Tarjeta"));






