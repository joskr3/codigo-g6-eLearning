
let input = document.querySelector('#valor-input');
let btn=document.querySelector('#btn');

btn.addEventListener('click',() => {
    let txtInput = input.value;
    if (txtInput ==="") {
        alert('Debes introducir un valor')
    }else{
        console.log("todo bien")
        let lista = []
        lista.push(txtInput)
        console.log(lista)
    }
})
