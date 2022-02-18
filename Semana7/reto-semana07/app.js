const carrito = document.getElementById('carrito')
const template = document.getElementById('template')

const fragment = document.createDocumentFragment()

const btnBotones = document.querySelectorAll('.card .btn')

// console.log(btnBotones)

// Crear el objeto que alacenara los items del carrito 
const carritoObjeto = {}

// Crear la funcion para agregar items al carrito 
const addCarrito = (e) => {
    console.log(e.target.dataset.fruta)

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,

    }

    if (carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad +1
    }

    carritoObjeto[producto.titulo] = producto
    pintarCarrito(producto)
}

// Crear la funcion para pintar los items de forma dinamica en el document 
const pintarCarrito = (producto) => {
    
    carrito.textContent = ""
    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)

    })

    carrito.appendChild(fragment)
}

// Captura los elementos del button y agrega el evento click y los captura con el forEach 
btnBotones.forEach((btn) => btn.addEventListener("click", addCarrito))