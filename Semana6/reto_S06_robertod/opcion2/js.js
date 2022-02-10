
let input = document.querySelector('#valor-input');
let btn=document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');

btn.addEventListener('click',() => {
    let txtInput = input.value;
    if (txtInput ==="") {
        alert('Debes introducir un valor')
    }else{
        console.log("dato ingresado")
        let li = document.createElement('li');
        li.innerHTML = txtInput;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
})