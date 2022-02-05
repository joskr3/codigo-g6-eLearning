let boton = document.querySelector('.button-add');
let input = document.querySelector('.input-add');
let arrayTarea = [];

function agregarTarea(){
    let nuevaTarea = input.value;
    if (nuevaTarea===""){
        alert("Ingresar descripcion de la tarea");
    }else{        
        let array = arrayTarea.push(nuevaTarea);        
        console.log(array);
        input.value="";
    }
}
document.querySelector(".button-add").addEventListener("click", agregarTarea);