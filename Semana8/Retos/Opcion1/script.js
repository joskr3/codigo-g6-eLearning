"use-strict";

// Clase para las tareas
class Task {

    static statusPriority ;
    static statusUrgency ;
    static statusLen ;
    static colorValue;

    constructor(checked, name, priority, urgency, len) {
        this.checked = checked;
        this.name = name;
        this.priority = priority;
        this.urgency = urgency;
        this.len = len;
        this.statusPriority = ["Mayor", "Medio", "Menor"];
        this.statusUrgency = ["hoy", "mañana", "despues"];
        this.statusLen = ["break!", "1h", "10 min", "30 min"];
        this.colorValue = ["danger","warning","success"]
    }
    getChecked(){
        return this.checked;
    }
    getName(){
        return this.name;
    }
    getPriority(){
        return this.statusPriority[this.priority];
    }
    getPriorityColor(){
        return this.colorValue[this.priority];
    }
    getUrgency(){
        return this.statusUrgency[this.urgency];
    }
    getUrgencyColor(){
        return this.colorValue[this.urgency];
    }
    getLen(){
        return this.statusLen[this.len];
    }
    getLenColor(){
        return this.colorValue[this.len];
    }
}



//clase para manejar el DOM
class UI {
    readTask(taskList){
        
        this.cleanListDom()

        //if(!taskList == []){
        // ! tipo de varible es un objeto cuando tiene contenido del array
        if(typeof(taskList) == "object"){
            
            for (let i = 0; i < taskList.length; i++) {
               
                this.addTask(taskList[i], i)
                
                // let task_item = new Task(taskList[i]["checked"], taskList[i]["name"], taskList[i]["priority"], taskList[i]["urgency"], taskList[i]["len"])

                // itemsElements += `<li class="box__content__list__task" index="${i}">
                //     <input class="box__content__list__task__check" type="checkbox" ${(task_item.getChecked() ? "checked" : "")}/>
                //     <label class="box__content__list__task__name" for="">${task_item.getName()}</label>
                //     <button class="box__content__list__task__priority ${task_item.getPriorityColor()}">${task_item.getPriority()}</button>
                //     <button class="box__content__list__task__urgency ${task_item.getUrgencyColor()}">${task_item.getUrgency()}</button>
                //     <button class="box__content__list__task__len ${task_item.getLenColor()}">${task_item.getLen()}</button>
                // </li>`

                // console.log(itemsElements)
            }
            
        }               
        // contentTask.innerHTML = contentTask.firstElementChild.outerHTML + itemsElements;
    }
    addTask(task, index=0){
        let task_item = db_task.returnObjectTask(task)
        // let task_item = new Task(task_array["checked"], task_array["name"], task_array["priority"], task_array["urgency"], task_array["len"])

        // let itemsElements = `<li class="box__content__list__task" index="${index}">
        //     <input class="box__content__list__task__check" type="checkbox" ${(task_item.getChecked() ? "checked" : "")}/>
        //     <label class="box__content__list__task__name" for="">${task_item.getName()}</label>
        //     <button class="box__content__list__task__priority ${task_item.getPriorityColor()}">${task_item.getPriority()}</button>
        //     <button class="box__content__list__task__urgency ${task_item.getUrgencyColor()}">${task_item.getUrgency()}</button>
        //     <button class="box__content__list__task__len ${task_item.getLenColor()}">${task_item.getLen()}</button>
        // </li>`
        // let newElement = document.createElement(itemsElements);
        // console.log(newElement)
        // contentTask.append(newElement)

        //contentTask.innerHTML = contentTask.outerHTML + itemsElements;

        
    
        let liNew = document.createElement('li');
        liNew.className = "box__content__list__task";
        liNew.setAttribute("index",index);
        liNew.innerHTML = `
            <input class="box__content__list__task__check" type="checkbox" ${(task_item.getChecked() ? "checked" : "")}/>
            <label class="box__content__list__task__name" for="">${task_item.getName()}</label>
            <button class="box__content__list__task__priority ${task_item.getPriorityColor()}">${task_item.getPriority()}</button>
            <button class="box__content__list__task__urgency ${task_item.getUrgencyColor()}">${task_item.getUrgency()}</button>
            <button class="box__content__list__task__len ${task_item.getLenColor()}">${task_item.getLen()}</button>`;

        //! Añadiendo los eventos a los task
        this.AddTaskcheckEvent(liNew);
        this.AddTaskOnClickEvent(liNew);
        // UI_task.AddcheckEvent();
        // UI_task.AddOnClickEvent();
        //! Añadiendo elemento
        contentTask.appendChild(liNew);

        // console.log(liNew)
    }

    changeTask(task,option="checked",taskStyle="white",value="ninguno"){
        if (option == "checked"){ //checked
            // console.log(task);
            task.setAttribute("checked","");
        }
        else{
            // console.log(task);
            task.className = `box__content__list__task__${option} ${taskStyle}`;
            task.innerHTML = value;
            // console.log(task);
        }
    }
    sortTask(option){
        
    }
    resetInput(){
        taskInput.value = "";
    }
    cleanListDom(){
        let liListIndex = contentTask.querySelectorAll("li[index]");
        if(liListIndex.length > 0){
            liListIndex.forEach((nodeItem)=>{
                contentTask.removeChild(nodeItem);
            })
        }
    }
    
    // ! evento de check
    AddTaskcheckEvent = (cTask) =>{
        let inputCheck = cTask.querySelectorAll(".box__content__list__task__check");

        inputCheck.forEach(item => {
            item.addEventListener('click',(e)=>{
            
                //! usando atributo de index en elemento li
                let index = item.parentElement.getAttribute("index");
               
                db_task.updateLocalDataStore(index);
                UI_task.changeTask(item);
            })
        })
    }
    // ! eventos de Priority, urgency, length a todos
    AddTaskOnClickEvent = (cTask) =>{
        let buttonPriorityClick = cTask.querySelectorAll(".box__content__list__task__priority");
        let buttonUrgencyClick = cTask.querySelectorAll(".box__content__list__task__urgency");
        let buttonLenClick = cTask.querySelectorAll(".box__content__list__task__len");

        //! recorriendo el boton y añadiendo el evento
        buttonPriorityClick.forEach(item => {
            item.addEventListener('click',(e)=>{
            
                //! usando atributo de index en elemento li
                let index = item.parentElement.getAttribute("index");
                
                //! actualizando el valor en localstorage
                db_task.updateLocalDataStore(index,"priority");

                //! obtener un objeto del index en localstorage
                let task = db_task.getItemObjectLocalStorage(index);
                
                //! funcion UI para mostrar el cambio
                this.changeTask(item,"priority",task.getPriorityColor(),task.getPriority());
            })
        });

        //! recorriendo el boton y añadiendo el evento
        buttonUrgencyClick.forEach(item => {
            item.addEventListener('click',(e)=>{
            
                //! usando atributo de index en elemento li
                let index = item.parentElement.getAttribute("index");
                
                //! actualizando el valor en localstorage
                db_task.updateLocalDataStore(index,"urgency");

                //! obtener un objeto del index en localstorage
                let task = db_task.getItemObjectLocalStorage(index);
                
                //! funcion UI para mostrar el cambio
                this.changeTask(item,"urgency",task.getUrgencyColor(),task.getUrgency());
            })
        });

        //! recorriendo el boton y añadiendo el evento
        buttonLenClick.forEach(item => {
            item.addEventListener('click',(e)=>{
            
                //! usando atributo de index en elemento li
                let index = item.parentElement.getAttribute("index");
                
                //! actualizando el valor en localstorage
                db_task.updateLocalDataStore(index,"len");

                //! obtener un objeto del index en localstorage
                let task = db_task.getItemObjectLocalStorage(index);
                
                //! funcion UI para mostrar el cambio
                this.changeTask(item,"len",task.getLenColor(),task.getLen());
            })
        });
    }

    // ! Eventos primarios de objetos
    AddEventsPrimaryOnClickEvents = () =>{
        // ! Evento de button add 
        buttonAddTask.addEventListener('click', () => {
            // let taskInput = document.getElementById("new-task");
            if (taskInput.value) {
                const newTask =  new Task(false,taskInput.value,0,0,0);
                db_task.addLocalStorage(newTask);
                let index = db_task.getLocalStorage().length-1
                UI_task.addTask(newTask,index)
                UI_task.resetInput();
            }
            else {
                alert("Debe ingresar algun valor");
            }
        });
        
        // ! funcion Input Enter para agregar task
        taskInput.addEventListener('keypress', function(e){
            let keycode = (e.keyCode ? e.keyCode : e.which);
            // * Reconocer el ENTER
            if (keycode == '13') {
                buttonAddTask.click();
            }
        });


        // ! limpiando todos los elementos seleccionados
        taskDoneDelete.addEventListener('click', (e) => {
            e.preventDefault(); //evitar recargar pagina
            db_task.deleteSelectLocalStorage();
            const tasks = db_task.getLocalStorage();
            this.readTask(tasks);
        });
        // ! limpiando todos los elementos task
        taskAllDelete.addEventListener('click', (e) => {
            e.preventDefault(); //evitar recargar pagina            
            db_task.deleteAllLocalStorage();
            const tasks = db_task.getLocalStorage();
            this.readTask(tasks);
        });
        
        sortedPriority.addEventListener('click', (e) => {
            e.preventDefault(); //evitar recargar pagina
            sortedPriority.toggleAttribute("sortOrderInverse");

            const tasksList = db_task.getLocalStorage();
            if (tasksList.length > 0){
                let newTaskArray = db_task.sortTask(tasksList, "priority",sortedPriority.getAttribute("sortOrderInverse") == null ? false : true );

                this.readTask(newTaskArray);
            }
        });
        
        sortedUrgency.addEventListener('click', (e) => {
            e.preventDefault(); //evitar recargar pagina
            sortedUrgency.toggleAttribute("sortOrderInverse");

            const tasksList = db_task.getLocalStorage();
            if (tasksList.length > 0){
                let newTaskArray = db_task.sortTask(tasksList, "urgency",sortedUrgency.getAttribute("sortOrderInverse") == null ? false : true );

                this.readTask(newTaskArray);
            }
        });
        
        sortedLen.addEventListener('click', (e) => {
            e.preventDefault(); //evitar recargar pagina
            sortedLen.toggleAttribute("sortOrderInverse");

            const tasksList = db_task.getLocalStorage();
            if (tasksList.length > 0){
                let newTaskArray = db_task.sortTask(tasksList, "len",sortedLen.getAttribute("sortOrderInverse") == null ? false : true );

                this.readTask(newTaskArray);
            }
        });

    }
    

}


// Local Storage
class db{

    static key_storage

    constructor() {
        this.key_storage = 'task_list'
    }

    addLocalStorage(new_item){
        let dbTask = this.getLocalStorage(this.key_storage);
        if (dbTask == "[]") {
            dbTask = [];
        }
        dbTask.push(new_item)
        this.setLocalStorage(dbTask);
    }
    setLocalStorage(array = '[]'){
        window.localStorage.setItem(this.key_storage, JSON.stringify(array));
    }
    getLocalStorage(){
        let item = window.localStorage.getItem(this.key_storage);
        if(!item){
            return [];
        }
        else{
            item = item.trim();
            return JSON.parse(item);
        }
    }
    getItemObjectLocalStorage(index = 0){
        let dbTask = this.getLocalStorage(this.key_storage);
        let task = this.returnObjectTask(dbTask[index]);
        return task
    }
    //Cambiar valor 
    updateLocalDataStore(index,option="checked"){
        let dbTask = this.getLocalStorage(this.key_storage);
        if(option == "checked"){
            
            dbTask[index][option] = !dbTask[index][option]
        }
        // else if(option=="priority"){
        //     dbTask[index][option] = dbTask[index][option] +1 > dbTask[index]["statusPriority"].length-1 ? 0 : dbTask[index][option] +1
        //     //console.log(dbTask)
        // }
        // else if(option=="urgency"){
        //     dbTask[index][option] = dbTask[index][option] +1 > dbTask[index]["statusUrgency"].length-1 ? 0 : dbTask[index][option] +1
        //     //console.log(dbTask)
        // }
        else{
            //! transformo el nombre de la propiedad para obtener el estado correcto
            let optionStatus = `status${option.charAt(0).toUpperCase()}${option.slice(1)}`
            dbTask[index][option] = dbTask[index][option] +1 > dbTask[index][optionStatus].length-1 ? 0 : dbTask[index][option] +1
        }
        this.setLocalStorage(dbTask)
    }

    // filtrar las tareas seleccionadas y borrarlas
    deleteSelectLocalStorage(){
        let arrayListTask = this.getLocalStorage(this.key_storage);
        arrayListTask = arrayListTask.filter((item) => item["checked"] === false);
        this.setLocalStorage(arrayListTask);
    }
    // !borrar todas las tareas
    deleteAllLocalStorage(){
        this.setLocalStorage();
    }
    // * retorna el objeto de la clase Task mediante el json como parametro
    returnObjectTask(task_item){
        let task = new Task(task_item["checked"], task_item["name"], task_item["priority"], task_item["urgency"], task_item["len"]);
        return task;
    }
    
    sortTask(taskList, option = "priority", orderInverse = False){
        let newTaskArray = [];
        //! transformo el nombre de la propiedad para obtener el estado correcto
        let optionStatus = `status${option.charAt(0).toUpperCase()}${option.slice(1)}`;
        for(let i = 0 ; i < taskList[0][optionStatus].length; i++){
            let taskFilter = taskList.filter(item => item[option] === ( orderInverse ? taskList[0][optionStatus].length - 1 - i : i  ) );
            // !se usa para descomponer el array encerrado del retorno del filtro, para pasar los elementos por separado
            newTaskArray.push(...taskFilter);
        }
        this.setLocalStorage(newTaskArray);
        // console.log(newTaskArray)
        return newTaskArray;
    }
    
}

//inicializar
const db_task = new db();
const UI_task = new UI();

// DOM elements
const buttonAddTask = document.querySelector(".box__content__row__btn-add");
const taskInput = document.getElementById("new-task");
const contentTask = document.getElementById('contentTask');
const taskDoneDelete = document.getElementById('clean-done');
const taskAllDelete = document.getElementById('clean-all');
const sortedPriority = document.getElementById('sortedPriority');
const sortedUrgency = document.getElementById('sortedUrgency');
const sortedLen = document.getElementById('sortedLen');

//Event Onload
window.onload = () =>{
    const tasks = db_task.getLocalStorage();

    UI_task.AddEventsPrimaryOnClickEvents();
    UI_task.readTask(tasks);

    //  //! Añadiendo los eventos a los task
    // UI_task.AddcheckEvent();
    // UI_task.AddTaskOnClickEvent();
    // AddAllTaskOnClickEvent= (cTask) 
}



