let tipoHam = null
let numHam = 0
let tipoPago = null
let precioHam = 0
let cargoTarjeta = 0.5
let total = 0
let totalCargo = 0

tipoHam = prompt('Que tipo de hamburguesa desea: (sencilla, doble, triple')
tipoPago = prompt('Elija el tipo de Pago: (credito o efectivo)')
numHam = prompt('Cuantas hamburguesas desea:')
if (tipoHam=='sencilla') {
    if (tipoPago=='credito') {
        precioHam=20
        total=precioHam*numHam
        totalCargo=total+(total*cargoTarjeta)
        console.log("Detalle de la Venta: Hamburguesa "+tipoHam+", tipo de pago "+tipoPago+", unidades: "+numHam+" \n")
        console.log("Total a pagar con cargo: "+totalCargo+" dolares")
    }else if(tipoPago=='efectivo'){
        precioHam=20
        total=precioHam*numHam
        console.log("Detalle de la Venta: Hamburguesa "+tipoHam+", tipo de pago "+tipoPago+", unidades: "+numHam+" \n")
        console.log("Total a pagar: "+total+" dolares")
    }else{
        console.log("Detalle de la Venta: Hamburguesa "+tipoHam+", tipo de pago "+tipoPago+", unidades: "+numHam+" \n")
        console.log("ingrese nuevamente")
    }

}else if (tipoHam=='doble') {
    if (tipoPago=='credito') {
        precioHam=25
        total=precioHam*numHam
        totalCargo=total+(total*cargoTarjeta)
        console.log("Detalle de la Venta: Hamburguesa "+tipoHam+", tipo de pago "+tipoPago+", unidades: "+numHam+" \n")
        console.log("Total a pagar con cargo: "+totalCargo+" dolares")
    }else if(tipoPago=='efectivo'){
        precioHam=25
        total=precioHam*numHam
        console.log("Detalle de la Venta: Hamburguesa "+tipoHam+", tipo de pago "+tipoPago+", unidades: "+numHam+" \n")
        console.log("Total a pagar: "+total+" dolares")
    }else{
        console.log("ingrese nuevamente")
    }
}else if (tipoHam=='triple') {
    if (tipoPago=='credito') {
        precioHam=28
        total=precioHam*numHam
        totalCargo=total+(total*cargoTarjeta)
        console.log("Detalle de la Venta: Hamburguesa "+tipoHam+", tipo de pago "+tipoPago+", unidades: "+numHam+" \n")
        console.log("Total a pagar con cargo: "+totalCargo+" dolares")
    }else if(tipoPago=='efectivo'){
        precioHam=28
        total=precioHam*numHam
        console.log("Detalle de la Venta: Hamburguesa "+tipoHam+", tipo de pago "+tipoPago+", unidades: "+numHam+" \n")
        console.log("Total a pagar: "+total+" dolares")
    }else{
        console.log("ingrese nuevamente")
    }
}