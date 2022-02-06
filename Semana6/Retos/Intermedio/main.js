let arrayTask = [
    // {
    //     "task-name": "task 1",
    //     "checked": false
    // }
    // ,
    // {
    //     "task-name": "tarea 2",
    //     "checked": false
    // }
    // ,
    // {
    //     "task-name": "task 3",
    //     "checked": false
    // }
    // ,
    // {
    //     "task-name": "task 4",
    //     "checked": true
    // }
];
const cleanDone = document.getElementById('clean-done');
const cleanAll = document.getElementById('clean-all');
const contentTask = document.getElementById('contentTask');
const taskInput = document.getElementById("new-task");
const buttonAdd = document.querySelector(".button-add");

// ! funcion de agregar elemento 
buttonAdd.addEventListener('click', () => {
    // let taskInput = document.getElementById("new-task");

    if (taskInput.value) {
        let newItemTask = {
            "task-name": taskInput.value,
            "checked": false
        }
        arrayTask.push(newItemTask);
        addItemTask(newItemTask, arrayTask.length - 1 );
        taskInput.value = "";
        //console.log(arrayTask);
    }
    else {
        alert("Debe ingresar algun valor");
    }
});

const addItemTask = (item,index) => {
    let new_item = '<li class="item-task" id="task_' + index + '" index="' + index + '"><input type="checkbox" /><label for="task_' + index + '">' + item["task-name"] + '</label></li>';
    contentTask.innerHTML = contentTask.innerHTML + new_item;
    
    //* añadir el evento a los check input
    checkInputAssignEvent();
}

// ! funcion que reconoce Enter para agregar task
taskInput.addEventListener('keypress', function(e){
    let keycode = (e.keyCode ? e.keyCode : e.which);
    
    if (keycode == '13') {
        buttonAdd.click();
        console.log(keycode)
        // e.preventDefault();
        // return false;
    }
});



// ! limpiando todos los elementos task
cleanAll.addEventListener('click', function (e) {
    e.preventDefault(); //evitar recargar pagina
    contentTask.innerHTML = '';
    arrayTask = [];
})
// ! limpiando todos los elementos seleccionados
cleanDone.addEventListener('click', function (e) {
    e.preventDefault(); //evitar recargar pagina
    arrayTask = arrayTask.filter((item) => item["checked"] === false);
    readListTask();    
})

// ! leer la lista de tareas
const readListTask = () => {
    let itemsElements = '';
    for (let i = 0; i < arrayTask.length; i++) {
        itemsElements += '<li class="item-task" id="task_' + i + '" index="' + i + '" ><input type="checkbox" ' + (arrayTask[i]["checked"] ? "checked" : "") + ' /><label for="task_' + i + '">' + arrayTask[i]["task-name"] + '</label></li>';
    }
    contentTask.innerHTML = itemsElements;
    
    checkInputAssignEvent();
}

// ! funcion que busca los .imtem-task input, recorre, agrega el evento y almacena los checkd en el array
const checkInputAssignEvent = ()=>{
    let inputCheck = contentTask.querySelectorAll(".item-task input");

    inputCheck.forEach(item => {
        item.addEventListener('click',(e)=>{
            
            //console.log(item.parentElement.getAttribute("index"))
            //! usando atributo de index en elemento li
            let index = item.parentElement.getAttribute("index");
            arrayTask[index]["checked"] = e.currentTarget.checked;
        })
    })
}



readListTask();





