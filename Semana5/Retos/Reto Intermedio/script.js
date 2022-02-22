function calcular_pago () {
    let tipoHamburguesa = document.getElementById("tipo-hamburguesa").value; 

    let precioHamburguesa;
    if (tipoHamburguesa == "sencilla"){
        precioHamburguesa = 20;
    } else {
        if (tipoHamburguesa == "doble"){
            precioHamburguesa = 25;
        } else {
            if (tipoHamburguesa == "triple"){
                precioHamburguesa = 28;
            } else {
                precioHamburguesa = null;
            };
        };
    };  

    let cantidadHamburguesas = document.getElementById("cantidad-hamburguesas").value;

    let tipoPago = document.getElementById("tipo-pago").value;

    let cargoporUso;
    if (tipoPago == "efectivo"){
        cargoporUso = 1;
    } else {
        if (tipoPago == "tcredito"){
            cargoporUso = 1.05;
        } else {
            cargoporUso = null;
        };
    };  

    let pago = precioHamburguesa * cantidadHamburguesas * cargoporUso;
    document.getElementById("resultado").innerHTML = pago.toFixed(2);
};
