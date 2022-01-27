
let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let puntaje = 0;
let puntajeMayor = 0;
let maxIntentos = 5;
let countIntentosErrados = 0;

const mostrarMensaje = (mensaje, query) => {
    document.querySelector(`.${query}`).textContent = mensaje;
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
        mostrarMensaje('Correcto', 'mensaje');

        document.querySelector('.numero').textContent = numeroSecreto;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.numero').style.width = '30rem';

        document.querySelector('.puntaje').textContent = puntaje;

        if (puntaje > puntajeMayor) {
            puntajeMayor = puntaje;
            document.querySelector('.label-puntaje-mayor').textContent = `🎖 Puntaje mas alto: ${puntajeMayor}`;
        }

        countIntentosErrados = 0;

    } else if (numeroSecreto !== adivinar) {

        if (puntaje > 0) {
            puntaje--
        } else {
            puntaje = 0
        }

        mostrarMensaje(adivinar > numeroSecreto ? '🔥 Caliente !' : '🥶 Frio !', 'mensaje');


        document.querySelector('.puntaje').textContent = puntaje < 0 ? 0 : puntaje;
        countIntentosErrados++;
    } else {
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


document.querySelector('.repetir').addEventListener('click', () => {
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

