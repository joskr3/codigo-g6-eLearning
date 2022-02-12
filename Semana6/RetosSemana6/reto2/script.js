const input = document.querySelector("#agregar")
const btn = document.querySelector("#btn")
const list = document.querySelector("#lista")
var el = document.getElementsByTagName('li')
let arreglo = []
btn.onclick = function () {

    var txt = input.value
    if (txt == '') {
        alert('Debe escribnir una tarea!...')
    }
    else {
        li = document.createElement('li')
        arreglo.push(txt)
        li.innerHTML = txt
        list.insertBefore(li, list.childNodes[0])
        //list.insertAdjacentText()
        input.value = ''
        console.log(arreglo)
    }

};

list.onclick = function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked')
    }
};