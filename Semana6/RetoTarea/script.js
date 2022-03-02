let arrayTask = [];

document.querySelector(".btn").addEventListener('click', () =>{
    let taskInput = document.getElementById("dato");

    if (taskInput.value){
        arrayTask.push(taskInput.value);
        taskInput.value = "";
        console.log("Array: "+ arrayTask);
    }});
