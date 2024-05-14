import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  public listaTarea: Tarea[] = [];
  public nombreTarea: string = "";

  agregarTarea() {

    if (this.nombreTarea.trim()) {
      const tarea: Tarea = new Tarea(this.nombreTarea, false);
    /* const tarea2:Tarea = {
      nombre:this.nombreTarea,
      estado:false
    } */

    /* if(tarea.nombre)  */this.listaTarea.push(tarea);
      this.nombreTarea = ""
    }else{
      alert("Debes introducir una tarea.")
    }
  }

  eliminarTarea(i: number){
    this.listaTarea.splice(i, 1);
  }

  modificarEstado(i: number){
    this.listaTarea[i].estado = !this.listaTarea[i].estado
  }

}
