import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';

@NgModule({
  //declaramos los componentes
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent, EjemploComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  //componente principal a cargar
  bootstrap: [AppComponent]
})
export class AppModule { }
