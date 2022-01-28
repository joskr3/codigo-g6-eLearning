

<<<<<<< HEAD
=======
const mostrarMensaje = (mensaje, query) => {
    document.querySelector(`.${query}`).textContent = mensaje;
}

// quiero seleccionar el elemente cuya clase sea "repetir" y a este elemento le agrego un evento click

// window.onload = function() {
//    console.log(numeroSecreto);
// };

document.querySelector('.boton-adivinar').addEventListener('click', () => {
   
    const adivinar = Number(document.querySelector('.input-adivinar').value); 
    
     if (numeroSecreto === adivinar) {
        // console.log("Entro a la segunda condicion--- cuando numero secreto y adivinar son iguales",numeroSecreto,adivinar)
        // debugger;

        puntaje++;
        mostrarMensaje('Correcto', 'mensaje');

        document.querySelector('.numero').textContent = numeroSecreto;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.numero').style.width = '30rem';

        document.querySelector('.puntaje').textContent = puntaje;

        if (puntaje > puntajeMayor) {
            puntajeMayor = puntaje;
            document.querySelector('.label-puntaje-mayor').textContent = `🎖 Puntaje mas alto: ${puntajeMayor}`;
        }

    } else if (numeroSecreto !== adivinar) {
        // console.log("Entro a la tercera condicion ",numeroSecreto,adivinar)
        // debugger;
        if (puntaje > 0) {
            puntaje--
        } else {
            puntaje = 0
        }

        mostrarMensaje(adivinar > numeroSecreto ? '🔥 Caliente !' : '🥶 Frio !', 'mensaje');

        document.querySelector('.puntaje').textContent = puntaje < 0 ? 0 : puntaje;

    } else {
        // console.log("Entro a la ultima condicion")
        // debugger;
        mostrarMensaje('🤔 Lo siento , perdiste! ', 'mensaje');
        document.querySelector('.puntaje').textContent = 0;
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

})
>>>>>>> d388160b3129f9439edd913346dea070ba580cf5


//  Tarea:

// definir un limite de intentos(5)

// si se equivocan 5 veces , mostrar una alerta(alert) que diga , "Perdiste" y resetea el juego 
// y cambiar el color de fondo del body a rojo

