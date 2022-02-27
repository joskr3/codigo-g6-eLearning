const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addPrioridadBtn());
        li.appendChild(addUrgenciaBtn());
        li.appendChild(addTiempoBtn());
        li.appendChild(addDeleteBtn());

        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none";
    }
});

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
            empty.style.display = "block";
        }
    });

    return deleteBtn;
}

function addPrioridadBtn() {
    const prioridaBtn = document.createElement('button');

    prioridaBtn.textContent = "Prioridad";
    prioridaBtn.className = "txt-texto";

    prioridaBtn.addEventListener("click", (e) => {

        if (prioridaBtn.textContent == "Prioridad") {
            prioridaBtn.textContent = "Menor";
            prioridaBtn.className = "menor";
        }
        else if (prioridaBtn.textContent == "Menor") {
            prioridaBtn.textContent = "Medio";
            prioridaBtn.className = "medio";
        }
        else if (prioridaBtn.textContent == "Medio") {
            prioridaBtn.textContent = "Mayor";
            prioridaBtn.className = "mayor";
        }
        else if (prioridaBtn.textContent == "Mayor") {
            prioridaBtn.textContent = "Menor";
            prioridaBtn.className = "menor";
        }

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
            empty.style.display = "block";
        }
    });

    return prioridaBtn;
}
function addUrgenciaBtn() {
    const urgenciaBtn = document.createElement('button');

    urgenciaBtn.textContent = "Urgencia";
    urgenciaBtn.className = "txt-texto";

    urgenciaBtn.addEventListener("click", (e) => {
        if (urgenciaBtn.textContent == "Urgencia") {
            urgenciaBtn.textContent = "Hoy";
            urgenciaBtn.className = "menor";
        }
        else if (urgenciaBtn.textContent == "Hoy") {
            urgenciaBtn.textContent = "Mañana";
            urgenciaBtn.className = "medio";
        }
        else if (urgenciaBtn.textContent == "Mañana") {
            urgenciaBtn.textContent = "Pasado Mañana";
            urgenciaBtn.className = "mayor";
        }
        else if (urgenciaBtn.textContent == "Pasado Mañana") {
            urgenciaBtn.textContent = "Hoy";
            urgenciaBtn.className = "menor";
        }

      

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
            empty.style.display = "block";
        }
    });

    return urgenciaBtn;
}
function addTiempoBtn() {
    const tiempoBtn = document.createElement('text');

    tiempoBtn.textContent = "Tiempo";
    tiempoBtn.className = "txt-texto";

    tiempoBtn.addEventListener("click", (e) => {
        
        if (tiempoBtn.textContent == "Tiempo") {
            tiempoBtn.textContent = "3 horas";
            tiempoBtn.className = "menor";
        }
        else if (tiempoBtn.textContent == "3 horas") {
            tiempoBtn.textContent = "2 horas";
            tiempoBtn.className = "medio";
        }
        else if (tiempoBtn.textContent == "2 horas") {
            tiempoBtn.textContent = "1 horas";
            tiempoBtn.className = "mayor";
        }
        else if (tiempoBtn.textContent == "1 horas") {
            tiempoBtn.textContent = "3 horas";
            tiempoBtn.className = "menor";
        }
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
            empty.style.display = "block";
        }
    });

    return tiempoBtn;
}

