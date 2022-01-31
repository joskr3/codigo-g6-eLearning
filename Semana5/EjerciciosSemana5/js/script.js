// RESOLUCION OPCION 1
function calculandopago(){
    let l = document.getElementById('litros').value
    let pg = document.getElementById('precio').value
    let tg = l / 3.785
    let ga = pg * tg
    document.getElementById('resultado').value = ga.toFixed(2)
}

function calculandoventa(){
    let ti = document.getElementById('select-hamb').value
    let tp = document.getElementById('select-pago').value
    let n = document.getElementById('numerohamb').value  
    let to = 0
    let tot = 0
    let pa = [20.00,25.00,28.00]
    let ca = 0.05
    if(ti=="sencilla"){
        to = pa[0] * n
    }else if(ti=="doble"){
        to = pa[1] * n
    }else if(ti=="triple"){
        to = pa[2] * n
    }
    if(tp=="tarjetacredito"){
        tot = to + (to * ca)
        document.getElementById('resultado-hamb').value = tot.toFixed(2)
    }else{
        tot = to
        document.getElementById('resultado-hamb').value = tot.toFixed(2)
    }
}


//RESOLUCION OPCION 3
nc = 0
