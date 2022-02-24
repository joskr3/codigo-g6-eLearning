import {Tareas} from "./Tareas.js";
import {UI}  from "./UI.js";


// DOM Events
document.getElementById("tarea-form").addEventListener("submit", function (e) {
    // Override the default Form behaviour
    console.log("hola")
    e.preventDefault();

    // Getting Form Values
    
    const name = document.getElementById("nuevatarea").value;
     
    // Create a new Oject Product

    const tarea = new Tareas(name);
    
    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === "") {
      ui.showMessage("Please Insert data in all fields", "danger");
    }
    else{
      // Save Product
      ui.anadirTarea(tarea);
      ui.showMessage("Product Added Successfully", "success");
      ui.resetForm();
    }
  });

document.getElementById("lista-tareas").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteTarea(e.target);
  e.preventDefault();
});