let arreglo=[];

document.querySelector('.btn-agregar').addEventListener('click', () => {
    let valor = document.querySelector('#input-text').value;
    
    if(valor){
        arreglo.push(valor);
        valor = "";
        console.log(arreglo);
    }
    else{
        console.log("ingrese un valor");
    }
});

