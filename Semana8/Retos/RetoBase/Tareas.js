 export class Tareas {
   #tarea=[]
   #prioridad=["minor","midium","major"]
   #urgencia=["tomorrow","today","has time"]
   #duracion=["10min", "30min", "1h", "break!"] 

   constructor(tar){
      this.#tarea=tar;
   }
 
    get tarea(){
      return this.#tarea
    }

    get prioridad(){
      let rand1 = Math.floor(Math.random()*this.#prioridad.length)
      let valueprio = this.#prioridad[rand1]
      return valueprio
    }

    get urgencia(){
      let rand2 = Math.floor(Math.random()*this.#urgencia.length)
      let valueurgen = this.#prioridad[rand2]
      return valueurgen
    }

    get duracion(){

      let rand3 = Math.floor(Math.random()*this.#duracion.length)
      let valuedura = this.#duracion[rand3]
      return valuedura
    }



  }