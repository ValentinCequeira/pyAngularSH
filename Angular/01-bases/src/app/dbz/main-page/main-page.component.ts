import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000,
  };

  agregar() {
    //prevee el comportamiento por defecto que tiene un submit de un formulario
    //event.preventDefault();

    console.log(this.nuevo);
  }
}
