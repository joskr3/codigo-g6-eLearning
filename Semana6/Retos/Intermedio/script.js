"use strict"

// Selectores

const task = document.getElementById("task");
const btnAdd = document.getElementById("btn-add");
const tasksContainer = document.querySelector('.tasks-container');
// let achis;

// Tasks storage array

let tasks = [];

btnAdd.addEventListener('click', () => {
    let txt = task.value;
    if (txt === "") {
        alert("Add a task")
    } else {
        tasks.push(txt);
        
        let taskContainer = document.createElement('div');
        taskContainer.classList.add("tasks-container__task")
        taskContainer.innerHTML = `<span>${txt}</span><input type="checkbox" class="tasks-container__task-checkbox" name="" id="task1">`
        tasksContainer.insertBefore(taskContainer, tasksContainer.firstChild);

        // const achis = document.getElementById('task1').previousElementSibling;
        // console.log(achis)
        // achis = document.getElementById('task1')
    }
})


const achis = document.getElementById('task1')
console.log(achis)
if(achis) {
    achis.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      alert('checked');
    } else {
      alert('not checked');
    }
  })
}

