const inputTask = document.querySelector("#input");
const buttonAdd = document.querySelector("#button");
let results = document.querySelector("#resultados");
let ArrayTasks = []
const formulario = document.querySelector("#submit");

buttonAdd.addEventListener("click", function () {
    ArrayTasks.push(inputTask.value);
    console.log(ArrayTasks);
    inputTask.value = "";
})

formulario.addEventListener("submit", function(event) {
    event.preventDefault()
})








