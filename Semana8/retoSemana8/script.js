class Lista {
    constructor() {
        this._elementos = []
        this.contador = 0
    }
    agregarElemento(tarea) {
        this._elementos.push(tarea)
        this.contador++
    }
    eliminarElemento() {
        this._elementos.pop()
        this.contador--
    }

}
class Tareas {

    constructor(nombre) {
        this._nombre = nombre
        this._prioridad = prompt("Ingrese la prioridad(1:MINOR, 2:MEDIUM, 3:MAJOR): ")
        this._urgencia = prompt("Ingrese la urgencia(1:TODAY, 2:TOMORROW, 3:HAS TIME):")
        this._tiempo = prompt("ingrese el tiempo estimado(10MIN): ")
    }
    get nombre() {
        return this._nombre
    }
    get prioridad() {
        return this._prioridad
    }
    get urgencia() {
        return this._urgencia
    }
    get tiempo() {
        return this._tiempo
    }
    set nombre(nombre) {
        this._nombre = nombre
    }
    set prioridad(prioridad) {
        this._prioridad = prioridad
    }
    set urgencia(urgencia) {
        this._urgencia = urgencia
    }
    set tiempo(tiempo) {
        this._tiempo = tiempo
    }
}
class GUI {
    addElemento(tarea) {
        const listaTareas = document.getElementById("task-list")
        const prio = tarea._prioridad
        const li = document.createElement('li')
        if (prio == "1") {
            li.innerHTML = `
            <div class="card col-md-12 text-center mb-1">
                <div class ="card-body  sm-1">
                <p>
                    <span class="col-md-9 text-left">${tarea._nombre} </span>
                    <span class="col-md-1 text-center btn btn-success">MINOR
                    </span>
                <span class="col-md-1 text-center"> ${tarea._tiempo}</span>   
                <span class="col-md-1 text-center">${tarea._urgencia}</span> 
                </p>
                </div>
             </div>
        `
        }
        if (prio == "3") {
            li.innerHTML = `<div class="card text-center mb-4">
            <div class ="card-body">
                <strong>${tarea._nombre}</strong>
                <a href="#" class="btn btn-danger">MAJOR</a>
    
            </div>   
        </div>
        `
        }
        if (prio == "2") {
            li.innerHTML = `<div class="card text-center mb-4">
            <div class ="card-body">
                <strong>${tarea._nombre}</strong>
                <button type="button" class="btn btn-warning">MEDIUM</button>
    
            </div>   
        </div>
        `
        }



        listaTareas.appendChild(li)
    }
    deleteElemento() {



    }
    showMessage() {

    }
}
//const input=document.querySelector("input")

//const ul=document.querySelector("ul")
//const empty = document.querySelector(".empty")

const lista = new Lista()

document.getElementById("list-form").addEventListener("submit", function (e) {
    e.preventDefault()

    const nombre = document.getElementById("input").value
    const elemento = new Tareas(nombre)
    lista.agregarElemento(elemento)
    const gui = new GUI()
    gui.addElemento(elemento)
})



