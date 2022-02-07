

let input = document.querySelector('#tareas');
let btn = document.querySelector('#btn');

let lista = document.querySelector('.lista');

let elementos = document.getElementsByTagName('li')


//funcion para agregar elementos o tareas

btn.addEventListener('click',() => {
    let texto = input.value;

    let arrayTareas = [];


    if (texto === ""){
        // alert("Agregar una Tarea")

        // li.innerHTML("Agregar una Tarea")
        document.getElementById('mostrar-tarea').innerHTML = 'Agregar una Tarea';
        document.getElementById('mostrar-tarea').style.background = 'yellow'
        document.getElementById('mostrar-tarea').style.color = 'red';
    }else{
        document.getElementById('mostrar-tarea').style.display= 'none'; 
        let li  = document.createElement('li');
        li.innerHTML = texto;
        lista.insertBefore(li, lista.childNodes[0]);
        input.value='';
        // document.getElementById('mostrar-tarea').style.display = 'none'; 

        arrayTareas.push(input.value);
        console.log(arrayTareas)
    }
    
})

// Funcion para marcar tareas realizadas

lista.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    }
})