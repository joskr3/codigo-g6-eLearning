function calcular_ganancia () {
    let L = document.getElementById("litros").value;
    let PG = document.getElementById("precio-galon").value;
    let TG = L/3.785;
    let GA = TG*PG;
    document.getElementById("resultado").innerHTML = GA.toFixed(2);
}


