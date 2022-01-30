
// Button add and input taks
const btnAdd = document.getElementById('btn-add');
const task = document.getElementById('task');

// Array donde se guardan las tareas
let arrayTask = [];

btnAdd.addEventListener('click', () => {
    arrayTask.push(task.value)
    console.log(arrayTask)
    task.value = "";
})

