let inputTask = document.querySelector("input");
let formulario= document.querySelector("#formulario");
let btnAdd = document.querySelector("#button");
let taskArea = document.querySelector("#task-list");
let nwElement = document.querySelector("#task");

formulario.addEventListener("submit", function(event) {
    event.preventDefault()
})

btnAdd.addEventListener("click", () => {
    let txt = inputTask.value;
    if(txt === ""){
        alert("Añade alguna tarea");
    } else {
        let ul = document.createElement("ul");
        ul.classList.add("nw-ul")
        let li = document.createElement("li");
        li.innerHTML = txt;
        let iptchk = document.createElement("input");
        iptchk.type = "checkbox";
        iptchk.classList.add("class-check")
        taskArea.insertBefore(ul, taskArea.childNodes[0]);
        ul.insertBefore(li, ul.childNodes[0]);
        ul.insertBefore(iptchk, ul.childNodes[1]);
        input.value = "";
    };
})

let unList = document.querySelector("ul");
let liTask = document.querySelector("li");

unList.addEventListener("click", e =>{
    if(e.target.tagName == "UL", "LI", "INPUT"){
        e.target.classList.toggle("checked");
    }
})



console.log("input %O", input)
