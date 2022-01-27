// Numero de consulta
numeroConsulta = parseInt(prompt(alert("Ingresar numero de la cita: ")));

// Declarar el Costo de la cita
let costoCita;
// Costo del tratamiento 
let costoTratamiento = 0;

// calcular costo de la cita
if (numeroConsulta < 4) {
costoCita = 200;
} else if (numeroConsulta < 6) {
costoCita = 150;
} else {
costoCita = 50;
}
// Calcular del costo del tratamiento
for (let i = 0; i < numeroConsulta; i++) {
    if (i < 3) {
        costoTratamiento = costoTratamiento + 200;
    } else if (i < 5) {
        costoTratamiento = costoTratamiento + 150;
    } else {
        costoTratamiento = costoTratamiento + 50;
    }
}
alert(`Costo Total de la Cita es: ${costoCita}`);
alert(`Costo del Tratamiento es: ${costoTratamiento}`);
