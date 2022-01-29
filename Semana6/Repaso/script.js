let arrayUsuarios = [
    {
        nombre: "Juan",
        usuario: "juan",
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

window.onload = function () {
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
        alert("Bienvenido");
        contenedorInfo.style.display = "block";
        // console.log(datosUsuario)
        // console.log(document.getElementById("label-usuario"))
        return datosUsuario

    } else {
        alert("Usuario o contraseña incorrectos");
        return null
    }
}
