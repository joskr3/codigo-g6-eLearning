"use-strict"

// 1.  let y const - var 

// var esta deprecado , es decir , ya no se debe usar
// esecialmente el por "hoiting" que no se recomienda el uso de var
// var x = 10;
// var y = 20;
// var z = x + y;
// console.log(z);

// una funcion es un bloque de codigo que se quiere reusar en otras partes

// hoisting es el movimiento de las declaraciones de las variables y funciones a la parte superior de la funcion/scope




function ejemplo() {
    console.log(z, "Aca se esta aplicando hoisting( mover las declaraciones de las variables y funciones a la parte superior de la funcion/scope)");
    var x = 10;
    var y = 20;
    var z = x + y;
    if (z) {
        console.log(z);
    }
}

ejemplo();


const valorQueNoCambia = "valor que no cambia";
let valorQueCambia = "valor que cambia";


// Objetos 
//
// objeto creado con sintaxis literal . es decir , escribirlo sin mas 
let celular = {
    "Apple": "Iphone",
    "anho": 2020,
    "marca": "Apple",
    "modelo": "Iphone X",
    "procesador": "A12",
}
// let celular = ["Iphone", "Iphone X", "A12", 2020];


// Clase es un blueprint(plano) de un objeto
// es la abstraccion de un concepto de la vida real , llevado a la programacion

// una instancia es un objeto que se crea a partir de una clase(la materializciom de una clase)


class Carro {

    static numeroDeSerie = 12345;


    constructor(marca1, modelo, anho) {
        this.marca = marca1;
        this.modelo = modelo;
        this.anho = anho;
    }



    static acelerar() {
        console.log("Acelerando");
    }


    // metodos
    getMarca() {

        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }

    getAnho() {
        return this.anho;
    }

    setMarca(marca) {
        this.marca = marca;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    setAnho(anho) {
        this.anho = anho;
    }

    acelerar() {
        console.log("Acelerando");
    }

}


let Carro2 = {
    marca: "Toyota",
    modelo: "Corolla",
    anho: 2020,
    acelerar: function () {
        return ("Acelerando");
    }
}

console.log(Carro2.acelerar(), "Carro 2");

console.log(Carro2.marca)


let ferrari = new Carro("Ferrari", "F40", 2020);

let tico = new Carro("Tico", "AWS-2020", 2020);

console.log(ferrari.marca);

console.log(typeof (ferrari));

console.log(ferrari.numeroDeSerie);

// Carro.prototype.acelerar = function(){
//     console.log("Acelerando");
// }

//Carro("Toyota", "Corolla", 2020);


console.log(Carro.numeroDeSerie);
console.log(Carro.acelerar());





let primerNombre = "Josue"

let apellidoPaterno = "Retamozo";

let nickname = "Josh";


let nombre = primerNombre + " \n " + apellidoPaterno;

console.log(nombre)

let nuevoNombre = `Hola soy , ${primerNombre} ${apellidoPaterno} , y tengo ${10 + 60} años`;

let poema = `
    lINEA1
    linea2
    linea3
`

console.log(poema)




function suma2(a, b) {
    return a + b;
}


let suma3 = function (a, b) {
    return a + b;
}

let suma4 = (a, b) => a + b;

let suma5 = (a, b) => {
    return a + b;
}

let cuadrado = a => a * a;


console.log(cuadrado(5));


// Ejercicio 1: Van a implemetar la formula del cuadro perfecto usando funciones flechas 


let binomioCuadradoPerfecto = (a, b) => a * a + 2 * a * b + b ** 2

console.log(Math.abs(binomioCuadradoPerfecto(2, -10)));



// la differncia entre funciones flechas y funciones normales es que las funciones normales no se pueden usar como parametros de otras funciones


let objeto = {

    // propiedad 1
    demora: function () {
        setTimeout(() => {
            this.hacerAlgo();
            console.log(this);
        }, 2000)
    },

    // propiedad 2
    hacerAlgo: function () {
        //alert("Hola mundo");
        return "Hola mundo"
    },

    propiedad3: "Hola"
}

//console.log(objeto.hacerAlgo(), "objeto");

objeto.demora()


class Operacion {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }


    suma = () => { console.log(this.a + this.b) };


    // suma() {
    //     return this.a + this.b;
    // }

    // resta() {
    //     return this.a - this.b;
    // }

    // multiplicacion() {
    //     return this.a * this.b;
    // }

    // division() {
    //     return this.a / this.b;
    // }

}

let suma1 = new Operacion(10, 20);

console.log(suma1.suma());


function restar (a=0,b=0){
    return a-b;
}


let resta1 = restar(3)

console.log(resta1);
