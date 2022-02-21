class Tareas {
  constructor(tarea, prioridad, urgencia, duracion) {
    this.tarea = tarea;
    this.prioridad = prioridad;
    this.urgencia = urgencia;
    this.duracion = duracion;
  }
}

class UI {
  anadirTarea(Tarea) {
    const tareaList = document.getElementById("tarea-list");
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <strong>Tarea</strong>:${Tarea.tarea}
          <strong>Prioridad</strong>:${Tarea.prioridad}
          <strong>Urgencia</strong>:${Tarea.urgencia}
          <strong>Duracion</strong>:${Tarea.duracion}
          <a href="" class="btn btn-danger" name="eliminar">Eliminar</a>
        </div>
      </div>
    `;
    tareaList.appendChild(element);
  }

  resetForm() {
    document.getElementById("tarea-form").reset();
  }

  eliminarTareas(element) {
    if (element.name === 'eliminar') {
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage('Tarea eliminada', 'danger');
    }
  }

  showMessage(message, cssClass) {
    const div=document.createElement('div');
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    const container=document.querySelector('.container');
    const app=document.querySelector('#App');
    container.insertBefore(div, app);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }
}

document.getElementById('tarea-form').addEventListener("submit", function (e) {
  const tarea = document.getElementById("tarea").value;
  const prioridad = document.getElementById("prioridad").value;
  const urgencia = document.getElementById("urgencia").value;
  const duracion = document.getElementById("duracion").value;
  // console.log(tarea + " - " + prioridad + " - " + urgencia + " - " + duracion);
  const Tarea = new Tareas(tarea, prioridad, urgencia, duracion);

  const ui = new UI();
  ui.anadirTarea(Tarea);
  ui.resetForm();
  ui.showMessage('Tarea agregada', 'success');
  e.preventDefault();
});

document.getElementById('tarea-list').addEventListener("click", function (e) {
  const ui = new UI();
  ui.eliminarTareas(e.target);
  // ui.showMessage('Tarea eliminada', 'danger')
});
