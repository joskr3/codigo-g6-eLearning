class Tarea{
    constructor(nombre, prioridad, urgencia, tiempo){
        this.name = nombre
        this.priority = prioridad
        this.urgency = urgencia
        this.time = tiempo
    }
}

class Interface{

    
    // getPrioridad(task){
    //     if(task.priority="minor"){
    //         let divpriority = "red"
    //     }else if(task.priority="medium"){
            
    //     }else if(task.priority="major"){
            
    //     }

    // }

    addTask(task){

        let divpriority = ""
        let namepriority = ""
        let tamanioprio = ""

        if(task.priority=="minor"){
            divpriority = "bg-success"
            namepriority = "MENOR"
            tamanioprio = "w-50"
        }else if(task.priority=="medium"){
            divpriority = "bg-warning"
            namepriority = "MEDIO"
            tamanioprio = "w-50"
        }else if(task.priority=="major"){
            divpriority = "bg-danger"
            namepriority = "IMPORTANTE"
            tamanioprio = "w-75"
        }

        let nameurgency = ""
        let colorurgency = ""

        if(task.urgency=="hastime"){
            nameurgency = "Tiene Tiempo"
            colorurgency = "text-success"
        }else if(task.urgency=="today"){
            nameurgency = "Hoy dia"
            colorurgency = "text-danger"
        }else if(task.urgency=="tomorrow"){
            nameurgency = "Mañana"
            colorurgency = "text-warning"
        }

        let nametime = ""
        let colortime= ""

        if(task.time=="break"){
            nametime = "break!"
            colortime = "text-danger"
        }else if(task.time=="10min"){
            nametime = "10min"
            colortime = "text-success"
        }else if(task.time=="30min"){
            nametime = "30min"
            colortime = "text-success"
        }else if(task.time=="1h"){
            nametime = "1h"
            colortime = "text-warning"
        }

        let tareaList = document.getElementById('tarea-list')
        let element = document.createElement('div')
        element.innerHTML= `
        <div class="d-flex justify-content-center align-items-center flex-row w-50 card m-3 overflow-hidden mt-2 mb-2" style="height:5vh">
            <div class="w-50 d-flex justify-content-start align-items-center ps-3">
            <strong> ${task.name}</strong>
            </div>
            <div class="w-25 d-flex justify-content-center align-items-center">
                <div class="${divpriority} ${tamanioprio} text-white p-1 fs-6 rounded-3 fw-bolder w-50 text-center">
                   ${namepriority}
                </div>
            </div>
            <div class="${colorurgency} w-25 d-flex justify-content-center align-items-center">
                <strong> ${nameurgency}</strong>
            </div>
            <div class="${colortime} w-25 d-flex justify-content-center align-items-center">
                <strong> ${nametime}</strong>
            </div>
        </div>
        `;
        tareaList.appendChild(element)
    }

    resetForm(){
        document.getElementById('task-form').reset()
    }


    deleteTask(){

    }

    showMessage(){

    }
}

// Creando Eventos
document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    let tarea = document.getElementById('input').value
    let prioridad = document.getElementById('priority').value
    let urgencia = document.getElementById('urgency').value
    let tiempo = document.getElementById('length').value

    let task = new Tarea(tarea,prioridad,urgencia,tiempo)
    let interf = new Interface()
    interf.addTask(task)
    interf.resetForm()
})