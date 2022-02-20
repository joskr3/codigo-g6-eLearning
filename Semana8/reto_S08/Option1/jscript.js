let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let list = document.querySelector('#lista');
let el = document.querySelector('li');


btn.addEventListener('click',() => {
    let txt = input.value;
    if (txt==="") {
        alert('debes introducir alguna tarea');
    } else {
        let li = document.createElement('li');
        //li.innerHTML = '<input type="checkbox" name="check" class="check" />';
        li.innerHTML = '<input type="checkbox" name="check" class="check" />'+'<label for="check"> '+txt+'</label>';
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
})