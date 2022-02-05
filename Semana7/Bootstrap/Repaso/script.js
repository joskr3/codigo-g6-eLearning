"use-strict";

let arrayUsuarios = [
    {
        nombre: "Juan",
        usuario: "juan123",
        apellido: "Perez",
        edad: 20,
        email: "juan@mail.com",
        password: "1234",
        balance: 100,
        moneda: "PEN"
    },
    {
        nombre: "Pedro",
        usuario: "pedro",
        apellido: "Perez",
        edad: 25,
        email: "pedro@mail.com",
        password: "1234",
        balance: 200,
        moneda: "PEN"
    },
    {
        nombre: "Maria",
        usuario: "maria",
        apellido: "Perez",
        edad: 30,
        email: "maria@email.com",
        password: "1234",
        balance: 300,
        moneda: "PEN"
    }
]

let contenedorInfoUsuario = document.getElementById("contenedor-info-usuario");
let contenedorOperaciones = document.getElementById("contenedor-operaciones")
let contenedorEjecutarOperaciones = document.getElementsByClassName("contenedor-ejecutar-operaciones")[0];
let contenedorBienvenida = document.getElementById("contenedor-bienvenida");
let placeholderDeLaAlerta = document.getElementById('liveAlertPlaceholder')
let activadorDeAlerta = document.getElementById('boton-ingresar')
let contenedorDatosUsuario = document.getElementById("datos-usuario");

window.onload = function () {
    contenedorEjecutarOperaciones.style.display = "none";
    //contenedorOperaciones.style.display = "none";
    contenedorInfoUsuario.style.display = "none";
    //contenedorDatosUsuario.style.display = "none";
   // console.log(contenedorEjecutarOperaciones)
   console.log(contenedorInfoUsuario)
}


function obtenerUsuario() {
    const email = document.getElementById("label-email-usuario").value;
    const password = document.getElementById("label-password").value;
    let datosUsuario = null;
    let usuarioValido = false;
    let passwordValido = false;
    for (let i = 0; i < arrayUsuarios.length; i++) {
        if (arrayUsuarios[i].email === email) {
            usuarioValido = true;
            datosUsuario = arrayUsuarios[i];
            if (arrayUsuarios[i].password === password) {
                passwordValido = true;
            }
        }
    }

    let returnUser = usuarioValido && passwordValido ? datosUsuario : null
    console.log(returnUser)
    return returnUser

}

function iniciarSesion() {
    const usuario = obtenerUsuario();

    if (usuario) {
        alerta("Bienvenido " + usuario.nombre, "success");

        // contenedorInfoUsuario.classList.remove("d-none");
        // contenedorOperaciones.classList.add("d-flex", "flex-column");

        contenedorInfoUsuario.style.display = "flex";
        contenedorInfoUsuario.style.justifyContent = "center"

        document.querySelector(".contenedor-retiro").style.display = "none";
        document.querySelector(".contenedor-deposito").style.display = "none";
        document.querySelector(".contenedor-consulta").style.display = "none";
        document.querySelector("#nombre-usuario").innerHTML = usuario.nombre || "undefined";
        document.querySelector("#username-usuario").innerHTML = usuario.usuario;
        document.querySelector("#email-usuario").innerHTML = usuario.email;
        document.getElementById("login").style.display = "none";
    } else {
        alerta("Usuario o contraseña incorrectos", "danger");
    }
}

// TODO: Arreglar la alerta para que deje de mostrarse despues de 5 segundos

// const miIntervaloDeTiempo = setTimeout(desaparecerAlerta, 3000);

// function desaparecerAlerta() {
//   document.getElementById("liveAlertPlaceholder").style.display = "none";
// }

// function dejarDeMostrarAlerta() {
//   clearTimeout(miIntervaloDeTiempo);
// }

function alerta(mensaje, tipo) {
    // estamos creando una etiqueta div
    const etiqueta_envoltorio = document.createElement('div')
    // en esta linea agregamos una clase al div
    etiqueta_envoltorio.classList.add('notification', tipo === "success" ? "is-success" : "is-danger")

    // creamos un nodo de boton(elemento/etiqueta button)
    etiqueta_envoltorio.innerHTML = `<button class="delete" id="boton-cerrar" title="cerrar"> </button>${mensaje}`

    // agregamos el nodo(elemento/etiqueta) de boton al div
    const elementoAlerta = document.getElementById('alerta')
    elementoAlerta.append(etiqueta_envoltorio)

    const botonCerrar = document.getElementById('boton-cerrar');

    // agregamos un evento click al boton , para remover este elemento(notification) del arbol de elementos(DOM)
    botonCerrar.addEventListener('click', function () {
        etiqueta_envoltorio.remove();
    });
}

function irAFuncionDeRetiro() {
    const usuario = obtenerUsuario();
    if (usuario) {
        document.querySelector(".contenedor-ejecutar-operaciones").style.display = "block";
        document.querySelector(".contenedor-retiro").style.display = "block";
        document.querySelector(".contenedor-deposito").style.display = "none";
        document.querySelector(".contenedor-consulta").style.display = "none";
        document.getElementById("datos-usuario").style.display = "none";
        console.log("Entro al if")
    } else {
        console.log("error")
    }
}

function retirar() {
    const usuario = obtenerUsuario();
    arrayUsuarios.forEach(elementoArray => {
        if (elementoArray.nombre === usuario.nombre && elementoArray.balance >= 0) {
            elementoArray.balance = elementoArray.balance - parseInt(document.getElementById("label-monto-retiro").value);
            // alert("Retiro realizado con exito");
            console.log(usuario.balance)
        }
    });
}

// VAMOS A HACER LA FUNCIONALIDAD DE RETIRO

function irAFuncionDeDeposito() {
    const usuario = obtenerUsuario();
    if (usuario) {
        document.querySelector(".contenedor-retiro").style.display = "none";
        document.querySelector(".contenedor-deposito").style.display = "block";
        document.querySelector(".contenedor-consulta").style.display = "none";
    }
}

function depositar() {
    const usuario = obtenerUsuario();
    arrayUsuarios.forEach(elementoArray => {
        if (elementoArray.nombre === usuario.nombre && elementoArray.balance >= 0) {
            elementoArray.balance = elementoArray.balance + parseInt(document.getElementById("operacion-deposito").value);
            // alert("Retiro realizado con exito");
            console.log(usuario.balance)
        }
    });
}


function irAFuncionDeConsulta() {
    const usuario = obtenerUsuario();
    if (usuario) {
        document.querySelector(".contenedor-retiro").style.display = "none";
        document.querySelector(".contenedor-deposito").style.display = "none";
        document.querySelector(".contenedor-consulta").style.display = "block";

        document.querySelector("#resultado-consulta").innerHTML = usuario.balance + "  " + usuario.moneda;
    }
}

function resetear() {
    document.getElementById("label-usuario").value = "";
    document.getElementById("label-password").value = "";
    document.getElementById("label-monto-retiro").value = "";
    document.getElementById("operacion-deposito").value = "";
    document.querySelector(".contenedor-retiro").style.display = "none";
    document.querySelector(".contenedor-deposito").style.display = "none";
    document.querySelector(".contenedor-consulta").style.display = "none";
    document.querySelector(".contenedor-info-usuario").style.display = "none";
}

document.querySelector(".resetear-evento").addEventListener("click", resetear);

