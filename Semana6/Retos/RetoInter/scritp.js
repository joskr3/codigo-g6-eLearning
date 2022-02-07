
const input = document.querySelector("#add");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const borrarMarcado = document.querySelector("#borrar-marcados");
const borrarTodo = document.querySelector("#borrar-todo");
//var el = document.getElementsByTagName('li');


let arreglo = [];

// this function will allow us to add elements when we click the button
btn.onclick = function () {

    var txt = input.value;
    if (txt == '') {
        alert('you must write something');
    } else {
        let nuevoitemtask = { "label-name": input.value, "input-checked": false };
        arreglo.push(nuevoitemtask);
        agregarTarea(nuevoitemtask,arreglo.length-1);
        input.value = '';

        //li.innerHTML = txt;
       // list.insertBefore(li, list.childNodes[0]);
        
    }

};

let agregarTarea = (item, index) => {
    let nuevoItem = '<li class="item-task" id="task' + index + '" index="' + index + '"><label for="task' + index + '">' + item["label-name"] + '</label><input type="checkbox" class="checkbox" /></li>';
    list.innerHTML = list.innerHTML + nuevoItem;
    //checkInputAssignEvent();
}

const checkInputAssignEvent = ()=>{
    let inputCheck = list.querySelectorAll(".item-task input");

    inputCheck.forEach(item => {
        item.addEventListener('click',(e)=>{
            let index = item.parentElement.getAttribute("index");
            arreglo[index]["input-checked"] = e.currentTarget.checked;
        })
    })
}

borrarTodo.addEventListener('click', function(e){
    e.preventDefault();
    list.innerHTML = '';
    arreglo = [];
})

borrarMarcado.addEventListener('click', function(e){
    e.preventDefault();
    let checkboxes = list.querySelectorAll(".item-task .checkbox");

    for(let i=0; i< checkboxes.length; i++ ){
        if(checkboxes[i].checked === true){
            list.querySelectorAll(".item-task .checkbox")[i].removeChild;
            
        }
       
    }


})






//this function will allow us to check the clicked elements
//list.onclick = function (ev) {
//    if (ev.target.tagName == 'LI') {
//        ev.target.classList.toggle('checked');
//    }
//};



