import { Component } from '@angular/core';

//definimos un componente
@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//propiedades del componente
export class AppComponent {
  title = 'miPrimeraApp';
  saludo = 'Hola daniel que tal'
}
