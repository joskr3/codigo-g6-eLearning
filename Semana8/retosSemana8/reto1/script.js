class Lista{
    constructor(){
        this._elementos=[]
        this.contador=0
    }
    agregarElemento(tarea){
        this._elementos.push(tarea)
        contador++
    }
    eliminarElemento(){
        this._elementos.pop()
        contador--
    }
    
}
class Tareas{
 
    constructor(nombre,prioridad,urgencia,tiempo)
    {
        this._nombre=input.value
        this._prioridad=prompt("Ingrese la prioridad: ")
        this._urgencia=promopt("Ingrese la urgencia:")
        this._tiempo=prompt("ingrese el tiempo estimado: ")
    }
    get nombre(){
        return this._nombre
    }
    get prioridad(){
        return this._prioridad
    }
    get urgencia(){
        return this._urgencia
    }
    get tiempo(){
        return this._tiempo
    }
    set nombre(nombre){
        this._nombre=nombre
    }
    set prioridad(prioridad){
        this._prioridad=prioridad
    }
    set urgencia(urgencia){
        this._urgencia=urgencia
    }
    set tiempo(tiempo){
        this._tiempo=tiempo
    }
}
class GUI{
    addElemento(tarea){
        const listaTareas=document.getElementById("task-list")
        const elemento= documento.createElement("div")
        elemento.innerHTML = "
        <div class="card text-center mb-4">
            <div class ="card body">
                <strong>${tarea._nombre}</strong>

            </div>   
        </div>
        "
        listaTareas.appendChild(elemento)
    }
    deleteElemento(){

    }
    showMessage(){

    }
}
//const input=document.querySelector("input")
//const addBtn = document.querySelector(".btn-add")
//const ul=document.querySelector("ul")
//const empty = document.querySelector(".empty")

const lista= new Lista()

document.getElementById("list-form").addEventListener("submit", function(e){
    const nombre=document.getElementById("input").value
    const elemento=new Tareas()
    lista.agregarElemento(elemento)
    const gui= new GUI()
    gui.addElemento(elemento)
    e.preventDefault()

})
addBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    const text=input.value
    const li=document.createElement("li")
    const p = document.createElement("p")
    p.textContent=text
    li.appendChild(p)
    ul.appendChild(li)

})
function addDeleteBtn(){
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent="X"
    deleteBtn.className ="btn-delete"
    deleteBtn.addEventListener("click", (e)=> {
        const item =e.target.parentElement
        ul.removeChild(item)
    })
    return deleteBtn
}
