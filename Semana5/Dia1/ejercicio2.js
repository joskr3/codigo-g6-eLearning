let puntajeDelfines=[100, 150, 90]
let puntajeKoalas=[10, 200, 130]

function calculaPuntaje(arrayDePuntajes){
    let promedio=0;
    for(let i=0; i< 3;i++)
        promedio+=arrayDePuntajes[i]
    return promedio/arrayDePuntajes.lenght
}