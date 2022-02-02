// Con HTML, CSS y JS crea un pequeño Input y un botón,
// donde al hacer click en el boton guarde el valor del input en un arreglo,
// no es necesario mostrar el texto guardado en el navegador.
// Tips: usar .push() .value addEventListener

let arrayTask = []

// function addTask() {
//     let newTask = document.getElementById("label-task").value
//     arrayTask.push(newTask)
//     console.log(arrayTask)
// }

let buttonAddTask = document.querySelector("button")

buttonAddTask.addEventListener("click", function() {
    arrayTask.push(document.querySelector("input").value)
    //
    console.log(arrayTask)
})