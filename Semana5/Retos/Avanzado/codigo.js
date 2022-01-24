try {
    /**
     * Inicializacion de variables
     */
    // Numero de consulta
    NC = parseInt(prompt("Introduza el numero de cita"));
    if (isNaN(NC)) {
        throw "Presione 'F5' e introduzca un numero por favor";
    }
    // Costo de la cita
    let CC;
    // Costo del tratamiento hasta ahora
    let TOT = 0;

    /**
     * Procedimiento
     */

    // Calculo del costo de la cita
    if (NC < 4) {
        CC = 200;
    } else if (NC < 6) {
        CC = 150;
    } else {
        CC = 50;
    }
    // Calculo del costo hasta ahora del tratamiento
    for (let i = 0; i < NC; i++) {
        if (i < 3) {
            TOT = TOT + 200;
        } else if (i < 5) {
            TOT = TOT + 150;
        } else {
            TOT = TOT + 50;
        }
    }
    alert(`Costo por la cita es de: ${CC}`);
    alert(`Costo hasta ahora por el tratamiento es de: ${TOT}`);
} catch (error) {
    alert(error);
}
