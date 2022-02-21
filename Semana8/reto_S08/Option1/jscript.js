let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let list = document.querySelector('#lista');
let el = document.querySelector('li');
let check = document.querySelector('#check');


btn.addEventListener('click',() => {
    let txt = input.value;
    if (txt==="") {
        alert('debes introducir alguna tarea');
    } else {
        let li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" name="check" class="check" />
        <label for="check"> 
        ${txt}
        </label>
        <div class="div-lista">  MINOR</div>
        `;
        list.appendChild(li);
        //list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
})
