const input = document.querySelector("#agregar")
const btn = document.querySelector("#btn")
const list = document.querySelector("#lista")
var el = document.getElementsByTagName('li')
let contador = 0
btn.onclick = function () {
    let txt = input.value
    if (txt == '') {
        alert('Debe escribnir una tarea!...')
    }
    else {
        li = document.createElement('li')
        contador++
        let llave=contador.toString()
        localStorage.setItem(JSON.stringify(llave), txt)
        li.innerHTML = txt
        list.insertBefore(li, list.childNodes[0])
        //list.insertAdjacentText()
        input.value = ''
    }

}

list.onclick = function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked')
    }
}