try {
    // Litros de leche que se producen
    const L = parseInt(prompt("¿Cuantos litros de leches produces?"));
    if (isNaN(L)) {
        throw "Introduzca un numero por favor y presione 'F5'";
    }

    // Precio del galon de leche
    const PG = parseFloat(prompt("Introduzca el precio de leche por galon"));

    // Convertidos de litros a galones
    const TG = L/3.785
 
    // Ganancia por la venta
    const GA = (TG * PG).toFixed(2)
    alert(`La ganancia por la entrega de leches es de $${GA}`)

} catch (error) {
    alert(error);
}