import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';


@NgModule({
  //declaramos los componentes
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  //componente principal a cargar
  bootstrap: [AppComponent]
})
export class AppModule { }
