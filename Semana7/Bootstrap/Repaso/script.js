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

let contenedorInfo = document.getElementsByClassName("contenedor-info-usuario")[0];
let contenedorOperaciones = document.getElementsByClassName("contenedor-operaciones")[0];
let contenedorEjecutarOperaciones = document.getElementsByClassName("contenedor-ejecutar-operaciones")[0];
let contenedorBienvenida = document.getElementById("contenedor-bienvenida");
let placeholderDeLaAlerta = document.getElementById('liveAlertPlaceholder')
let activadorDeAlerta = document.getElementById('boton-ingresar')

window.onload = function () {
    contenedorEjecutarOperaciones.style.display = "none";
    contenedorOperaciones.style.display = "none";
    console.log(contenedorEjecutarOperaciones)
}


function obtenerUsuario() {
    const usuario = document.getElementById("label-usuario").value;
    const password = document.getElementById("label-password").value;
    let datosUsuario = null;
    let usuarioValido = false;
    let passwordValido = false;
    for (let i = 0; i < arrayUsuarios.length; i++) {
        if (arrayUsuarios[i].usuario === usuario) {
            usuarioValido = true;
            datosUsuario = arrayUsuarios[i];
            if (arrayUsuarios[i].password === password) {
                passwordValido = true;
            }
        }
    }

    let returnUser = usuarioValido && passwordValido ? datosUsuario : null

    return returnUser

}

function iniciarSesion() {
    const usuario = obtenerUsuario();

    if (usuario) {
        alerta("Bienvenido", "success");


        // if(alerta){
        //     dejarDeMostrarAlerta()
        // }

        //dejarDeMostrarAlerta();


        // console.log(contenedorInfo.classList)
        contenedorInfo.classList.remove("d-none");
        contenedorOperaciones.classList.add("d-flex", "flex-column");
        document.querySelector(".contenedor-retiro").style.display = "none";
        document.querySelector(".contenedor-deposito").style.display = "none";
        document.querySelector(".contenedor-consulta").style.display = "none";
        document.querySelector("#nombre-usuario").innerHTML = usuario.nombre || "undefined";
        document.querySelector("#username-usuario").innerHTML = usuario.usuario;
        document.querySelector("#email-usuario").innerHTML = usuario.email;
    } else {
        alerta("Usuario o contraseña incorrectos/ alerta1", "danger");
        // if(alerta){
        //     dejarDeMostrarAlerta()
        // }
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
    const etiqueta_envoltorio = document.createElement('div')
    etiqueta_envoltorio.innerHTML = '<div class="alert alert-' + tipo + ' alert-dismissible" role="alert">' + mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    placeholderDeLaAlerta.append(etiqueta_envoltorio)
}

function irAFuncionDeRetiro() {
    const usuario = obtenerUsuario();
    if (usuario) {
        document.querySelector(".contenedor-ejecutar-operaciones").style.display = "block";
        document.querySelector(".contenedor-retiro").style.display = "block";
        document.querySelector(".contenedor-deposito").style.display = "none";
        document.querySelector(".contenedor-consulta").style.display = "none";
       // document.querySelector(".operacion-retiro").classList.add("text-white");
        console.log("Entro al if")
    }else{
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

