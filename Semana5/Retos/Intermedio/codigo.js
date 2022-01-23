try {

    /**
     * Inicializacion de variables
     */

    // Precio de la hamburguesa
    let PA;
    // Cargo por uso de tarjeta de credito 5%
    const CA =0.05;
    // Total sin cargo
    let TO
    // Total con cargo
    let TOT

    /**
     * Variables generadas por el cliente
     */

    // Tipo de hamburguesa
    let TI = prompt("¿Que hamburguesa desea?    1. Simple     2.Doble     3. Triple");

    TI = TI.toLowerCase();

    if (!((TI == "simple") || (TI == "1")|| (TI == "doble") || (TI == "2") || (TI == "triple") || (TI == "3"))) {
        throw "Presione 'F5' e introduzca la hamburguesa deseada o el numero de ella.";
    }

    // Numero de hamburguesas
    let N = parseInt(prompt("Introduzca el 'numero' de hamburguesas que desee."))
    if (isNaN(N)) {
        throw "No introdujo el numero de hamburguesas deseadas. Presione 'F5'";
    }

    // Tipo de pago, efectivo, debito o credito
    let TP = prompt("Pago con:  1. Efectivo     2. Debito   3. Credito");

    TP = TP.toLowerCase();

    if (!((TP == "efectivo") || (TP == "1")|| (TP == "debito") || (TP == "2") || (TP == "credito") || (TP == "3"))) {
        throw "No introdujo el metodo de pago. Presione 'F5'";
    }

    // Designacion de precios
    if (TI == ("simple" | "1")) {
        PA = 20;
    } else if (TI == ("doble" | "2")) {
        PA = 25;
    } else if (TI == ("triple" | "3")) {
        PA = 28;
    }

    //Total sin cargo
    TO = PA * N;

    // Total a pagar con o sin cargo del 5%

    if ((TP == "efectivo") || (TP == "1")|| (TP == "debito") || (TP == "2") ) {
        TOT = TO;
    } else if (TP == ("credito" || "3")) {
        console.log("achis2")
        TOT = TO * (1 + CA);
    }

    alert(`El total a pagar es de ${TOT}`);

} catch (error) {
    alert(error)
}
