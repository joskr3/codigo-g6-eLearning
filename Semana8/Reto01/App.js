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
    const element = document.createElement('div');
    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <strong>Tarea</strong>:${Tarea.tarea}
          <strong>Prioridad</strong>:${Tarea.prioridad}
          <strong>Urgencia</strong>:${Tarea.urgencia}
          <strong>Duracion</strong>:${Tarea.duracion}
        </div>
      </div>
    `;
    tareaList.appendChild(element);
  }

  eliminarTareas() {}

  showMessage() {}
}

document.getElementById('tarea-form').addEventListener('submit', function (e) {
  const tarea = document.getElementById("tarea").value;
  const prioridad=document.getElementById('prioridad').value
  const urgencia=document.getElementById('urgencia').value
  const duracion=document.getElementById('duracion').value
  // console.log(tarea + " - " + prioridad + " - " + urgencia + " - " + duracion);
  const Tarea = new Tareas(tarea, prioridad, urgencia, duracion);

  const ui =new UI();
  ui.anadirTarea(Tarea);

  e.preventDefault();
});
