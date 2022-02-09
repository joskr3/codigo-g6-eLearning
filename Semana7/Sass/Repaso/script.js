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
let contenedorEjecutarOperaciones = document.getElementsByClassName("contenedor-ejecutar")[0];
let contenedorBienvenida = document.getElementById("contenedor-bienvenida");
let placeholderDeLaAlerta = document.getElementById('liveAlertPlaceholder')
let activadorDeAlerta = document.getElementById('boton-ingresar')
let contenedorDatosUsuario = document.getElementById("datos-usuario");
let contenedorCerrarSesion = document.getElementById("cerrar-sesion")

window.onload = function () {
    contenedorEjecutarOperaciones.style.display = "none";
    contenedorInfoUsuario.style.display = "none";
    contenedorCerrarSesion.style.display = "none";
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
        contenedorInfoUsuario.style.display = "flex";
        alerta("Bienvenido " + usuario.nombre, "success");

        document.querySelector(".retiro").style.display = "none";
        document.querySelector(".deposito").style.display = "none";
        document.querySelector(".consulta").style.display = "none";
        document.querySelector("#nombre-usuario").innerHTML = usuario.nombre || "undefined";
        document.querySelector("#username-usuario").innerHTML = usuario.usuario;
        document.querySelector("#email-usuario").innerHTML = usuario.email;
        document.getElementById("login").style.display = "none";
        contenedorCerrarSesion.style.display = "flex";
    } else {
        alerta("Usuario o contraseña incorrectos");
    }
}

// TODO: Arreglar la alerta para que deje de mostrarse despues de 5 segundos

function alerta(mensaje, tipo) {
    // estamos creando una etiqueta div
    const etiqueta_envoltorio = document.createElement('div')
    // en esta linea agregamos una clase al div
    etiqueta_envoltorio.classList.add('notification', tipo === "success" ? "notification__is-success" : "notification__is-danger")

    // Agregamos el mensaje a nuestro Div
    etiqueta_envoltorio.innerHTML = `${mensaje}`

    // agregamos el nodo(elemento/etiqueta) de boton al div
    const elementoAlerta = document.getElementById('alerta')
    elementoAlerta.append(etiqueta_envoltorio)
    setTimeout(function(){
        etiqueta_envoltorio.classList.remove('notification')
        etiqueta_envoltorio.innerHTML = ""
    },3500)
}

function irAFuncionDeRetiro() {
    const usuario = obtenerUsuario();
    if (usuario) {
        document.querySelector(".contenedor-ejecutar").style.display = "flex";
        document.querySelector(".retiro").style.display = "flex";
        document.querySelector(".deposito").style.display = "none";
        document.querySelector(".consulta").style.display = "none";
        document.querySelector(".operaciones").style.display = "none";
        document.getElementById("datos-usuario").style.display = "none";
        document.getElementById("datos-usuario").style.display = "none";
    }
}

function retirar() {
    const usuario = obtenerUsuario();
    arrayUsuarios.forEach(elementoArray => {
        if (elementoArray.nombre === usuario.nombre && elementoArray.balance >= 0) {
            elementoArray.balance = elementoArray.balance - parseInt(document.getElementById("label-monto-retiro").value);
            alerta("Retiro Completado", "success");
        }
    });
}

function irAFuncionDeDeposito() {
    const usuario = obtenerUsuario();
    if (usuario) {
        document.querySelector(".contenedor-ejecutar").style.display = "flex";
        document.querySelector(".retiro").style.display = "none";
        document.querySelector(".deposito").style.display = "flex";
        document.querySelector(".consulta").style.display = "none";
        document.querySelector(".operaciones").style.display = "none";
        document.getElementById("datos-usuario").style.display = "none";
        document.getElementById("datos-usuario").style.display = "none";
    }
}

function depositar() {
    const usuario = obtenerUsuario();
    arrayUsuarios.forEach(elementoArray => {
        if (elementoArray.nombre === usuario.nombre && elementoArray.balance >= 0) {
            elementoArray.balance = elementoArray.balance + parseInt(document.getElementById("operacion-deposito").value);
            console.log(usuario.balance)
            alerta("Deposito Completado", "success");
        }
    });
}

function irAFuncionDeConsulta() {
    const usuario = obtenerUsuario();
    if (usuario) {
        document.querySelector(".contenedor-ejecutar").style.display = "flex";
        document.querySelector(".retiro").style.display = "none";
        document.querySelector(".deposito").style.display = "none";
        document.querySelector(".consulta").style.display = "flex";
        document.querySelector(".operaciones").style.display = "none";
        document.getElementById("datos-usuario").style.display = "none";
        document.getElementById("datos-usuario").style.display = "none";
        document.querySelector("#resultado-consulta").innerHTML = usuario.balance + "  " + usuario.moneda;
    }
}

function resetear() {
    let seleccionarBotonesReseteo = document.getElementsByClassName("resetear-evento");

    // document.getElementById("label-email-usuario").value = "";
    // document.getElementById("label-password").value = "";
    // document.getElementById("label-monto-retiro").value = "";
    // document.getElementById("operacion-deposito").value = "";
    document.querySelector(".retiro").style.display = "none";
    document.querySelector(".deposito").style.display = "none";
    document.querySelector(".consulta").style.display = "none";
    document.querySelector("#contenedor-info-usuario").style.display = "flex";
    document.querySelector(".operaciones").style.display = "flex";

    contenedorDatosUsuario.style.display = "flex";
    contenedorDatosUsuario.style.flexDirection = "column";
}

function cerrarsesion() {
    window.location.href = "index.html";
}
