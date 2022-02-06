
let numeroSecreto = Math.floor(Math.random() * 20) + 1; // estamos generando un numero aleatorio entre el 1 y el 20
let puntaje = 0;
let puntajeMayor = 0;
let maxIntentos = 5;
let countIntentosErrados = 0;

// let variable = puntjeMayor// undefined

// esta funcion toma dos parametros uno es el mensaje que quiero mostrar y el segundo es donde lo voy a mostrar(en que elemento del DOM)
const mostrarMensaje = (mensaje, query) => {
    // En el DOM , voy buscar la primera coincidencia(elemento de HTML) que tenga ese nombre en la clase ej. <div class="mensaje" > contenido </div> y le va asiganr atravez del metodo textContent(contenido del texto) el valor mensaje
    document.querySelector(`.${query}`).textContent = mensaje;
    // return true
    // el return define el tipo de la funcion
}

// quiero seleccionar el elemente cuya clase sea "repetir" y a este elemento le agrego un evento click

document.querySelector('.resetear').addEventListener('click', () => {
    console.log(numeroSecreto);
    const adivinar = Number(document.querySelector('.adivinar').value);

    if (!adivinar) {
        mostrarMensaje('✋🏼 No adivinaste el numero', 'mensaje');
        countIntentosErrados++;
    } else if (numeroSecreto === adivinar) {
        puntaje++;
        //ejecuto/llamo  mi funcion "mostrar mensaje" que recibe dos parametros , el texto que quiero mostrar y el lugar(el elmento HTMl) donde lo quiero mostrar
        mostrarMensaje('Correcto', 'mensaje');

        console.log(typeof(mostrarMensaje('Correcto', 'mensaje')))

        document.querySelector('.numero').textContent = numeroSecreto;

        // aca selecciono mi elemento del DOM, y cambiare su estilo(una de sus propiedades de estilo) - background y atravez de codigo javascript le asigno un codigo hexadecimal con el nuevo color
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.numero').style.width = '30rem';

        document.querySelector('.puntaje').textContent = puntaje;

        // en esta condicion esta la logica para almacenar el puntaje mayor
        // si el puntaje que tengo alctualmente . ej 5 , es mayor al anterior que tenia (ej.0 (el valor que tiene asignado por defecto puntaje mayor)), entonces este puntaje se convertora en mi nuevo puntaje mayor (asignando en punatajeMyor el valor de puntaje)
        if (puntaje > puntajeMayor) {
            puntajeMayor = puntaje;
            document.querySelector('.label-puntaje-mayor').textContent = `🎖 Puntaje mas alto: ${puntajeMayor}`;
        }

        countIntentosErrados = 0;

    } else if (numeroSecreto !== adivinar) {
        // console.log("Entro a la tercera condicion ",numeroSecreto,adivinar)
        // debugger;

        // como no deseamos mostrarle al usuario un puntaje negativo , solamente mostrare aquel puntaje mayor a 0 y a su vez reducire el puntaje que tenga en 1
        if (puntaje > 0) {
            puntaje--
        } else {
            puntaje = 0
        }


        
        // le asigno un valor "caliente " o "frio" dependiendo del valor booelano de la condicion "adivinar > numeroSecreto"
        mostrarMensaje(adivinar > numeroSecreto ? '🔥 Caliente !' : '🥶 Frio !', 'mensaje');

        // me aseguro de mostrar un numero pistivo al usuario
        document.querySelector('.puntaje').textContent = puntaje < 0 ? 0 : puntaje;
        countIntentosErrados++;
    } else {
        // console.log("Entro a la ultima condicion")
        // debugger;
        mostrarMensaje('🤔 Lo siento , perdiste! ', 'mensaje');
        document.querySelector('.puntaje').textContent = 0;
        countIntentosErrados++;
    }

    console.log(countIntentosErrados)
    if (countIntentosErrados >= maxIntentos){
        alert("Perdiste");
        document.querySelector('.repetir').click();
        document.querySelector('body').style.backgroundColor = '#b34747';
    }
    
})


document.querySelector('.boton-repetir').addEventListener('click', () => {
    puntaje = 0;
    numeroSecreto = Math.floor(Math.random() * 20) + 1;

    mostrarMensaje('Empieza a adivinar...! 🔮', 'mensaje')

    document.querySelector('.puntaje').textContent = puntaje

    document.querySelector('.numero').textContent = '?'

    document.querySelector('.adivinar').textContent = ""

    document.querySelector('body').style.backgroundColor = '#222'

    document.querySelector('.numero').style.width = '15rem';
    
    countIntentosErrados = 0;
})


//  Tarea:

// definir un limite de intentos(5)

// si se equivocan 5 veces , mostrar una alerta(alert) que diga , "Perdiste" y resetea el juego 
// y cambiar el color de fondo del body a rojo
