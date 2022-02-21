let arrayTask = [];

class AllTask {
    constructor(task) {
      this.task = task;
    }
}

/* ************************************************************************************ */

class UI {
    /**
     * Add a New Task 
     */
    addTask(allTask) {
        const taskList = document.getElementById("task-list");
        const element = document.createElement("div");
        element.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Task</strong>: ${allTask.task}
                      <a href="#" class="btn btn-danger" name="delete">Delete</a>
                  </div>
              </div>
          `;
        taskList.appendChild(element);
    }
    
    /**************************************************************************************
     * Reset Form Values
     */
    resetForm() {
        document.getElementById("task-form").reset();
    }

    /**************************************************************************************
     * Delete a New Task 
     */
    deleteProduct(element) {
        if (element.name === "delete") {
            element.parentElement.parentElement.remove();
            this.showMessage("Task Deleted Succsssfully", "success");
        }
    }

    /* ************************************************************************************ */
    
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




/* *********************************************************************************************** */
/********************** DOM Events *************************************************************** */
// 
document.getElementById("task-form").addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const task = document.getElementById("task").value;

    arrayTask.push(task);

    // Create a new Oject Product
    const allTask = new AllTask(task);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (task === "") {
      ui.showMessage("Please Insert a Task", "danger");
      return 0;
    }
    // Save Product
    ui.addTask(allTask);
    ui.showMessage("Task Added Successfully", "success");
    ui.resetForm();
  });

/* ************************************************************************************ */

document.getElementById("task-list").addEventListener("click", (e) => {
    const ui = new UI();
    ui.deleteProduct(e.target);
    e.preventDefault();
});