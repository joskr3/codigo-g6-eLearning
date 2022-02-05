
const cleanDone = document.getElementById('clean-done');
const cleanAll = document.getElementById('clean-all');
const contentTask = document.getElementById('contentTask');
const taskInput = document.getElementById("new-task");
const buttonAdd = document.querySelector(".button-add");


//setLocalStorage("arrayTask",[])
//console.log(getLocalStorage("arrayTask"))


function setLocalStorage(key,array = '[]'){
    window.localStorage.setItem(key, JSON.stringify(array));
}
function getLocalStorage(key){
    let item = window.localStorage.getItem(key);
    if(!item){
        item = [];
        return item
    }
    else{
        item = item.trim()
        return JSON.parse(item)
    }
}

// ! funcion de agregar elemento 
buttonAdd.addEventListener('click', () => {
    // let taskInput = document.getElementById("new-task");

    if (taskInput.value) {
        let newItemTask = {
            "task-name": taskInput.value,
            "checked": false
        }
        let arrayListTask = getLocalStorage('arrayTask');
        console.log('insert', arrayListTask)
        arrayListTask.push(newItemTask);
        setLocalStorage('arrayTask',arrayListTask);
        addItemTask(newItemTask, arrayListTask.length - 1 );
        taskInput.value = "";
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
    
    // * Reconocer el ENTER
    if (keycode == '13') {
        buttonAdd.click();
    }
});



// ! limpiando todos los elementos task
cleanAll.addEventListener('click', function (e) {
    e.preventDefault(); //evitar recargar pagina
    window.localStorage.removeItem('arrayTask');
    readListTask(); 
})
// ! limpiando todos los elementos seleccionados
cleanDone.addEventListener('click', function (e) {
    e.preventDefault(); //evitar recargar pagina
    let arrayListTask = getLocalStorage('arrayTask');
    arrayListTask = arrayListTask.filter((item) => item["checked"] === false);
    setLocalStorage('arrayTask',arrayListTask);
    readListTask();
})

// ! leer la lista de tareas y dibujarlos
const readListTask = () => {
    let itemsElements = '';
    let arrayListTask = getLocalStorage('arrayTask');
    // console.log(arrayListTask.length)
    if(arrayListTask.length > 0){
        for (let i = 0; i < arrayListTask.length; i++) {
            itemsElements += '<li class="item-task" id="task_' + i + '" index="' + i + '" ><input type="checkbox" ' + (arrayListTask[i]["checked"] ? "checked" : "") + ' /><label for="task_' + i + '">' + arrayListTask[i]["task-name"] + '</label></li>';
        }
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
           
            let arrayListTask = getLocalStorage('arrayTask');
            arrayListTask[index]["checked"] = e.currentTarget.checked;
            setLocalStorage('arrayTask',arrayListTask);
            
            //* actualizamos el atributo checked en el nodo item input 
            if (e.currentTarget.checked){
                item.setAttribute("checked","");
            }else{
                item.removeAttribute("checked");
            }
            console.log('check',arrayListTask)
        })
    })
}



readListTask();





