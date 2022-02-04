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
let placeholderDeLaAlerta = document.getElementById('liveAlertPlaceholder')
let  activadorDeAlerta = document.getElementById('boton-ingresar')

window.onload= function () {
    contenedorInfo.style.display = "none";
}

function iniciarSesion() {
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
    if (usuarioValido && passwordValido) {
        // alert("Bienvenido");
        alerta("Bienvenido", "success");
        contenedorInfo.style.display = "block";
        // console.log(datosUsuario)
        // console.log(document.getElementById("label-usuario"))

        // let elemento = document.getElementById("elemento1");

        // let listaClasesDelElemento = elemento.classList;

        // console.log(listaClasesDelElemento);

        document.querySelector(".contenedor-retiro").style.display = "none";
        document.querySelector(".contenedor-deposito").style.display = "none";
        document.querySelector(".contenedor-consulta").style.display = "none";

        document.querySelector("#nombre-usuario").innerHTML = datosUsuario.nombre;
        document.querySelector("#username-usuario").innerHTML = datosUsuario.usuario;
        document.querySelector("#email-usuario").innerHTML = datosUsuario.email;

        return datosUsuario

    } else {
        
        alerta("Usuario o contraseña incorrectos/ alerta1", "danger")
        return null
    }
}

function alerta(mensaje, tipo) {
  const etiqueta_envoltorio = document.createElement('div')
  etiqueta_envoltorio.innerHTML = '<div class="alert alert-' + tipo + ' alert-dismissible" role="alert">' + mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  placeholderDeLaAlerta.append(etiqueta_envoltorio)
}

// if (activadorDeAlerta) {
//   alertTrigger.addEventListener('click', () =>{
//     alerta('Nice, you triggered this alert message!', 'success')
//   })
// }



function irAFuncionDeRetiro() {
    let usuario = iniciarSesion();
    if (usuario) {
        document.querySelector(".contenedor-retiro").style.display = "block";
        document.querySelector(".contenedor-deposito").style.display = "none";
        document.querySelector(".contenedor-consulta").style.display = "none";
    }
}

function retirar() {
    let usuario = iniciarSesion();
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
    let usuario = iniciarSesion();
    if (usuario) {
        document.querySelector(".contenedor-retiro").style.display = "none";
        document.querySelector(".contenedor-deposito").style.display = "block";
        document.querySelector(".contenedor-consulta").style.display = "none";
    }
}

function depositar() {
    let usuario = iniciarSesion();
    arrayUsuarios.forEach(elementoArray => {
        if (elementoArray.nombre === usuario.nombre && elementoArray.balance >= 0) {
            elementoArray.balance = elementoArray.balance + parseInt(document.getElementById("operacion-deposito").value);
            // alert("Retiro realizado con exito");
            console.log(usuario.balance)
        }
    });
}


function irAFuncionDeConsulta() {
    let usuario = iniciarSesion();
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

