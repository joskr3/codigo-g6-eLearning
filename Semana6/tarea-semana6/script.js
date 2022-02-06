let boton = document.querySelector('.button-add');
let input = document.querySelector('.input-add');
let arrayTarea = [];

function agregarTarea(){
    let nuevaTarea = input.value;
    if (nuevaTarea===""){
        alert("Ingresar descripcion de la tarea");
    }else{        
        arrayTarea.push(nuevaTarea);               
        console.log(arrayTarea)
        input.value="";
    }
}
document.querySelector(".button-add").addEventListener("click", agregarTarea);

//console.log(arrayTarea[arrayTarea.length-1])