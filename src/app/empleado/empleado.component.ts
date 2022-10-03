import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //ejemplo html inline
  //template: "<p>aqui iría un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //ejemplo de css inline
  //styles: ["p{background-color : red;}"]
})
export class EmpleadoComponent implements OnInit {

  //creamos propiedades
  nombre : string = "Daniel";
  apellido : string ="Zapata";
  //empresa : string ="Pildoras Informaticas";
  edad :  number = 18;

  //defino funcion para evento
  // setEmpresa(value:String){

  // }

  //property binding
  habilitarInput=false;

  //otro ejemplo de binding
  usuRegistrado=false;

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

    //getter
  getEdad(){
    return this.edad;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
