'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const botonCerrarModal = document.querySelector('.cerrar-modal');
//convertimos el selector a un array para poder recorrerlo
const botonesAbrirModales = Array.from(document.querySelectorAll('.mostrar-modal'));
//constante de body
const body = document.querySelector('body');


const abrirModal = () => {
    modal.classList.remove("escondido")
    overlay.classList.remove("escondido")
}

const cerrarModal = () => {
    modal.classList.add("escondido")
    overlay.classList.add("escondido")
}


// vamos a recorrer la lista de botones que obtengo en botonesAbrirModales 
// a cada boton le vamos a agregar un evento click y le vamos a pasar la funcion abrirModal

// al boton de cerrar le vamos a pasar un evento click , la funcion para cerrar
// igual con el overlay


// voy a detectar cuando se presione una tecla y en base a ese evento  cerrare el modal , tambien debe funcionar con la tecla escape


//evento click usando map propiedad de un array
botonesAbrirModales.map(boton => {
    boton.addEventListener('click',abrirModal);
})

//evento click para cerrar modal
botonCerrarModal.addEventListener('click',cerrarModal);

//evento body para reconocer cualquier keydown y cerrar el modal
body.addEventListener('keydown',cerrarModal);
