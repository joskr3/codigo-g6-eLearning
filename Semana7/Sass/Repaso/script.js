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
    },
    {
        nombre: "Danny",
        usuario: "Dann",
        apellido: "Pandal",
        edad: 30,
        email: "dev.pandaldn@email.com",
        password: "0000",
        balance: 500,
        moneda: "PEN"
    }
]

let contenedorInfoUsuario = document.getElementById("contenedor-info-usuario");
let contenedorOperaciones = document.getElementById("contenedor-operaciones")
let contenedorEjecutarOperaciones = document.getElementById("contenedor-execute");
let contenedorDatosUsuario = document.getElementById("datos-usuario");

window.onload = function () {
    contenedorEjecutarOperaciones.style.display = "none";
    contenedorInfoUsuario.style.display = "none";
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
    //console.log(returnUser)
    return returnUser

}

function iniciarSesion() {
    const usuario = obtenerUsuario();

    if (usuario) {
        alerta("Bienvenido " + usuario.nombre, "success");
        contenedorInfoUsuario.style.display = "flex";
        contenedorInfoUsuario.style.justifyContent = "center"

        document.querySelector("#contenedor-retiro").style.display = "none";
        document.querySelector("#contenedor-deposito").style.display = "none";
        document.querySelector("#contenedor-saldo").style.display = "none";
        document.querySelector("#nombre-usuario").innerHTML = usuario.nombre || "undefined";
        document.querySelector("#username-usuario").innerHTML = usuario.usuario;
        document.querySelector("#email-usuario").innerHTML = usuario.email;
        document.getElementById("login").style.display = "none";
    } else {
        alerta("Usuario o contraseña incorrectos", "danger");
    }
}

// TODO: Arreglar la alerta para que deje de mostrarse despues de 5 segundos

function alerta(mensaje, tipo) {
    // estamos creando una etiqueta div
    const etiqueta_envoltorio = document.createElement('div')
    // en esta linea agregamos una clase al div
    etiqueta_envoltorio.classList.add('alerta__notify', tipo === "success" ? "alerta__success" : "alerta__danger")

    // creamos un nodo de boton(elemento/etiqueta button)
    etiqueta_envoltorio.innerHTML = `<button class="alerta__notify__delete" id="boton-cerrar" title="cerrar"> </button><span>${mensaje}</span>`

    // agregamos el nodo(elemento/etiqueta) de boton al div
    const elementoAlerta = document.getElementById('alerta')
    elementoAlerta.append(etiqueta_envoltorio)

    const botonCerrar = document.getElementById('boton-cerrar');

    // agregamos un evento click al boton , para remover este elemento(notification) del arbol de elementos(DOM)
    botonCerrar.addEventListener('click', function () {
        etiqueta_envoltorio.remove();
    });
    setTimeout(cerrarAlertas, 5000);
}
/*  funcion que permite clickear los botones de cerrar */
const cerrarAlertas = () =>{
    const botonCerrar = document.querySelectorAll('.alerta__notify__delete');
    botonCerrar.forEach(element => element.click())    
}

function irAFuncionDeRetiro() {
    const usuario = obtenerUsuario();
    if (usuario) {
        contenedorEjecutarOperaciones.style.display = "initial"
        document.querySelector("#contenedor-retiro").style.display = "block";
        document.querySelector("#contenedor-deposito").style.display = "none";
        document.querySelector("#contenedor-saldo").style.display = "none";
    }
}

function retirar() {
    const usuario = obtenerUsuario();
    arrayUsuarios.forEach(elementoArray => {
        if (elementoArray.nombre === usuario.nombre && elementoArray.balance >= 0) {
            let amount = parseInt(document.getElementById("operacion-retiro").value);
            elementoArray.balance = elementoArray.balance - amount;
            alerta("Retiro realizado por S/. " + amount + " ", "success");
        }
    });
}

function irAFuncionDeDeposito() {
    const usuario = obtenerUsuario();
    if (usuario) {
        contenedorEjecutarOperaciones.style.display = "initial"
        document.querySelector("#contenedor-retiro").style.display = "none";
        document.querySelector("#contenedor-deposito").style.display = "block";
        document.querySelector("#contenedor-saldo").style.display = "none";
    }
}

function depositar() {
    const usuario = obtenerUsuario();
    arrayUsuarios.forEach(elementoArray => {
        if (elementoArray.nombre === usuario.nombre && elementoArray.balance >= 0) {
            let amount = parseInt(document.getElementById("operacion-deposito").value)
            elementoArray.balance = elementoArray.balance + amount;
            alerta("Deposito realizado por S/. " + amount + " ", "success");
        }
    });
}

function irAFuncionDeConsulta() {
    const usuario = obtenerUsuario();
    if (usuario) {
        contenedorEjecutarOperaciones.style.display = "initial"
        document.querySelector("#contenedor-retiro").style.display = "none";
        document.querySelector("#contenedor-deposito").style.display = "none";
        document.querySelector("#contenedor-saldo").style.display = "block";
        document.querySelector("#resultado-consulta").innerHTML = usuario.balance + "  " + usuario.moneda;
    }
}

function resetear() {
    // let seleccionarBotonesReseteo = document.getElementsByClassName("resetear-evento");

    document.getElementById("label-email-usuario").value = "";
    document.getElementById("label-password").value = "";
    document.getElementById("operacion-retiro").value = "";
    document.getElementById("operacion-deposito").value = "";
    document.querySelector("#contenedor-retiro").style.display = "none";
    document.querySelector("#contenedor-deposito").style.display = "none";
    document.querySelector("#contenedor-saldo").style.display = "none";
    contenedorEjecutarOperaciones.style.display = "initial"

    document.getElementById("login").style.display = "flex";
    contenedorInfoUsuario.style.display = "none";

    // document.querySelector("#contenedor-info-usuario").style.display = "block";
    
    // contenedorEjecutarOperaciones.style.display = "none"
    // contenedorDatosUsuario.style.display = "flex";
    // contenedorDatosUsuario.style.flexDirection = "column";

    // contenedorInfoUsuario.style.display = "none";
    // contenedorInfoUsuario.style.flexDirection = "column";
}
