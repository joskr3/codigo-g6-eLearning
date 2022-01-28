'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const botonCerrarModal = document.querySelector('.cerrar-modal');
const botonesAbrirModales = document.querySelectorAll('.mostrar-modal');



const abrirModal = () => {
    modal.classList.remove("escondido")
    overlay.classList.remove("escondido")
}

const cerrarModal = () => {
    modal.classList.add("escondido")
    overlay.classList.add("escondido")
}

botonesAbrirModales.forEach((n) => {
  console.log(n);
  n.addEventListener("click", () => {
    abrirModal();
  });
});

// vamos a recorrer la lista de botones que obtengo en botonesAbrirModales
// a cada boton le vamos a agregar un evento click y le vamos a pasar la funcion abrirModal

// al boton de cerrar le vamos a pasar un evento click , la funcion para cerrar
// igual con el overlay


// voy a detectar cuando se presione una tecla y en base a ese evento  cerrare el modal , tambien debe funcionar con la tecla escape
