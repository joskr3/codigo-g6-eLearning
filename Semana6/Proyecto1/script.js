
let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let puntaje = 0;
let puntajeMayor = 0;


const mostrarMensaje = (mensaje, query) => {
    document.querySelector(`.${query}`).textContent = mensaje;
}


