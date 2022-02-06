let arrayTask = ["gato","perro"];
//console.log(arrayTask);


document.querySelector(".button-add").addEventListener('click', () =>{
    let taskInput = document.getElementById("new-task");

    if (taskInput.value){
        arrayTask.push(taskInput.value);
        taskInput.value = "";
        console.log(arrayTask);
    }
    else{
        alert("Debe ingresar algun valor");
    }
});

