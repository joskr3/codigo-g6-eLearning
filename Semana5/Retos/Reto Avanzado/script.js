function calcular_montos () {
    let numeroCita = document.getElementById("num-cita").   value;

    let costoCita;
    if (numeroCita <= 3){
        costoCita = 200;
    } else {
        if (numeroCita <= 5){
            costoCita = 150;
        } else {
            if (numeroCita <= 8){
                costoCita = 100;
            } else {
                costoCita = 50
            };
        };
    };

    let sumatoria = new Array();
    // sumatoria[0,2] = 200;    
    // sumatoria[3,4] = 150;
    // sumatoria[5,7] = 100;
    // sumatoria[8,100] = 50;
    sumatoria.length = numeroCita - 1;
    
    let suma;
    // for (let i = 0; i < sumatoria.length; i++){
    //     suma += sumatoria[i]
    // }; 

    document.getElementById("resultado1").innerHTML = costoCita.toFixed(2);
    document.getElementById("resultado2").innerHTML = sumatoria[0];
}


