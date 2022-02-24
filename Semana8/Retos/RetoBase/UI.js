export class UI {


  anadirTarea(tarea) {
    const listatareas = document.getElementById("lista-tareas");
    const element = document.createElement("div");
    element.innerHTML = `
          <div class="row justify-content-start mb-3">      
              <div class="col-5">
                  <strong> ${tarea.tarea} </strong>          
              </div>
                <div class="col-2">
                  <strong> ${tarea.prioridad} </strong>
                </div>
                <div class="col-2">
                  <strong> ${tarea.urgencia} </strong>
                </div>
                <div class="col-2">
                  <strong> ${tarea.duracion} </strong>
                </div>
                <div class="col-1">
                  <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
              </div>
          </div>
          `;
    listatareas.appendChild(element);
  }

  /**
   * Reset Form Values
   */
  resetForm() {
    document.getElementById("tarea-form").reset();
  }

  deleteTarea(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product Deleted Succsssfully", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}