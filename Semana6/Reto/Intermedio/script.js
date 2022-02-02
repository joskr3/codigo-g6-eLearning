// Crea una aplicación que te permita manejar tareas.
// Las tareas completadas deben tacharse.
// Las tareas se guardarán en un arreglo.

let arrayTask = []

let buttonAddTask = document.querySelector('#button-task')
let inputTask = document.querySelector('#label-task')
let list = document.querySelector('#task')

buttonAddTask.addEventListener('click', function() {
    let data = inputTask.value
    if (data === "") {
        alert("Ingresar tarea!");
    } else {
        arrayTask.push(data)
        
        for (let i = 0; i < arrayTask.length; i++) {
            let li = document.createElement('li')
            li.innerHTML = arrayTask[i]
            list.insertBefore(li, list.childNodes[0])
            inputTask.value = ''
        }

    //Josue, hice lo que pude... ya no se como seguir.JAJA         
            


    }
})