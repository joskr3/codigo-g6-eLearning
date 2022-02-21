class Tareas {
  constructor(tarea, prioridad, urgencia, duracion) {
    this.tarea = tarea;
    this.prioridad = prioridad;
    this.urgencia = urgencia;
    this.duracion = duracion;
  }
}

class UI {
  anadirTarea() {}

  eliminarTareas() {}

  showMessage() {}
}

document.getElementById('tarea-form').addEventListener('submit', function (e) {
  const tarea = document.getElementById("tarea").value;
  const prioridad=document.getElementById('prioridad').value
  const urgencia=document.getElementById('urgencia').value
  const duracion=document.getElementById('duracion').value
  // console.log(tarea + " - " + prioridad + " - " + urgencia + " - " + duracion);
  const Tarea = new Tareas(tarea, prioridad, urgencia, duracion));


  e.preventDefault();
});
